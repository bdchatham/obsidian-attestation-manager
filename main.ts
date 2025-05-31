import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { S3Bucket } from "./.gen/providers/aws/s3-bucket";
import { S3BucketPublicAccessBlock } from "./.gen/providers/aws/s3-bucket-public-access-block";
import { LaunchTemplate } from "./.gen/providers/aws/launch-template";
import { IamRole } from "./.gen/providers/aws/iam-role";
import { IamRolePolicy } from "./.gen/providers/aws/iam-role-policy";
import { IamInstanceProfile } from "./.gen/providers/aws/iam-instance-profile";
import { CodebuildProject } from "./.gen/providers/aws/codebuild-project";

class AttestationManagerStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Configure AWS Provider
    new AwsProvider(this, "AWS", {
      region: "us-east-1",
    });

    // Create S3 bucket for binaries
    const binaryBucket = new S3Bucket(this, "attestation-manager-binaries", {
      bucket: "attestation-manager-binaries",
      versioning: {
        enabled: true,
      },
    });

    // Block public access to S3 bucket
    new S3BucketPublicAccessBlock(this, "binary-bucket-public-access-block", {
      bucket: binaryBucket.id,
      blockPublicAcls: true,
      blockPublicPolicy: true,
      ignorePublicAcls: true,
      restrictPublicBuckets: true,
    });

    // Create CodeBuild role
    const codebuildRole = new IamRole(this, "codebuild-role", {
      name: "attestation-manager-codebuild-role",
      assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
          Effect: "Allow",
          Principal: {
            Service: "codebuild.amazonaws.com",
          },
          Action: "sts:AssumeRole",
        }],
      }),
    });

    // Create CodeBuild policy
    new IamRolePolicy(this, "codebuild-policy", {
      name: "attestation-manager-codebuild-policy",
      role: codebuildRole.id,
      policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Resource: [
              binaryBucket.arn,
              `${binaryBucket.arn}/*`,
            ],
            Action: [
              "s3:PutObject",
              "s3:GetObject",
              "s3:ListBucket",
            ],
          },
          {
            Effect: "Allow",
            Resource: ["*"],
            Action: [
              "logs:CreateLogGroup",
              "logs:CreateLogStream",
              "logs:PutLogEvents",
            ],
          },
        ],
      }),
    });

    // Create CodeBuild project
    const buildProject = new CodebuildProject(this, "attestation-manager-build", {
      name: "attestation-manager-build",
      serviceRole: codebuildRole.arn,
      
      artifacts: {
        type: "NO_ARTIFACTS",
      },
      
      environment: {
        computeType: "BUILD_GENERAL1_SMALL",
        image: "aws/codebuild/amazonlinux2-x86_64-standard:4.0",
        type: "LINUX_CONTAINER",
        environmentVariable: [
          {
            name: "S3_BUCKET",
            value: binaryBucket.id,
          },
        ],
      },
      
      source: {
        type: "NO_SOURCE",
        buildspec: JSON.stringify({
          version: "0.2",
          phases: {
            install: {
              commands: [
                "yum install -y golang make git",
              ],
            },
            pre_build: {
              commands: [
                "git clone https://github.com/bdchatham/obsidian-attestation-manager.git .",
              ],
            },
            build: {
              commands: [
                "./packaging/build.sh",
                "aws s3 cp release/attestation-manager.tar.gz s3://$S3_BUCKET/",
              ],
            },
          },
        }),
      },
    });

    // Create IAM role for EC2 instances
    const instanceRole = new IamRole(this, "instance-role", {
      name: "attestation-manager-instance-role",
      assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
          Action: "sts:AssumeRole",
          Effect: "Allow",
          Principal: {
            Service: "ec2.amazonaws.com",
          },
        }],
      }),
    });

    // Create IAM policy for S3 access
    new IamRolePolicy(this, "instance-s3-policy", {
      name: "attestation-manager-s3-access",
      role: instanceRole.id,
      policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
          Effect: "Allow",
          Action: [
            "s3:GetObject",
            "s3:ListBucket",
          ],
          Resource: [
            binaryBucket.arn,
            `${binaryBucket.arn}/*`,
          ],
        }],
      }),
    });

    // Create instance profile
    const instanceProfile = new IamInstanceProfile(this, "instance-profile", {
      name: "attestation-manager-instance-profile",
      role: instanceRole.name,
    });

    // Create launch template
    const launchTemplate = new LaunchTemplate(this, "attestation-manager-template", {
      name: "attestation-manager-template",
      imageId: "ami-0c7217cdde317cfec", // Replace with your AMD SEV-SNP AMI
      instanceType: "t3.medium",
      iamInstanceProfile: {
        name: instanceProfile.name,
      },
      userData: Buffer.from(`#!/bin/bash
# Install required packages
yum update -y
yum install -y aws-cli unzip

# Create directories
mkdir -p /opt/attestation-manager

# Download and extract binary package from S3
aws s3 cp s3://${binaryBucket.id}/attestation-manager.tar.gz /opt/attestation-manager/
cd /opt/attestation-manager
tar xzf attestation-manager.tar.gz

# Install the service
cd attestation-manager
./packaging/install.sh

# Generate operator key if not exists
if [ ! -f /etc/attestation-manager/operator.key ]; then
  openssl rand -out /etc/attestation-manager/operator.key 32
  chown attestation:attestation /etc/attestation-manager/operator.key
  chmod 600 /etc/attestation-manager/operator.key
fi

# Start the service
systemctl enable attestation-manager
systemctl start attestation-manager`).toString("base64"),
      metadataOptions: {
        httpEndpoint: "enabled",
        httpTokens: "required",
      },
      networkInterfaces: [{
        associatePublicIpAddress: "false",
        deleteOnTermination: "true",
        securityGroups: [],
      }],
      blockDeviceMappings: [{
        deviceName: "/dev/xvda",
        ebs: {
          volumeSize: 20,
          volumeType: "gp3",
        },
      }],
    });

    // Output values
    new TerraformOutput(this, "bucket-name", {
      value: binaryBucket.id,
    });

    new TerraformOutput(this, "launch-template-id", {
      value: launchTemplate.id,
    });

    new TerraformOutput(this, "codebuild-project", {
      value: buildProject.name,
    });
  }
}

const app = new App();
new AttestationManagerStack(app, "attestation-manager");
app.synth(); 