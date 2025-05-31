# Attestation Manager Infrastructure

This directory contains the infrastructure code for deploying the Attestation Manager service using CDK for Terraform.

## Prerequisites

- Node.js >= 16.0
- AWS CLI configured with appropriate credentials
- Terraform >= 1.0.0
- CDK for Terraform CLI (`npm install -g cdktf-cli`)

## Infrastructure Components

The infrastructure includes:
- CodeBuild project for automated binary builds
- S3 bucket for storing the attestation manager binary
- IAM roles and policies for EC2 instances and CodeBuild
- Launch template for EC2 instances with AMD SEV support
- Security group configurations
- Instance profile for S3 access

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Initialize CDK for Terraform:
   ```bash
   cdktf get
   ```

3. Build the TypeScript code:
   ```bash
   npm run build
   ```

4. Deploy the infrastructure:
   ```bash
   cdktf deploy
   ```

5. Trigger a build:
   ```bash
   aws codebuild start-build --project-name attestation-manager-build
   ```

## Build Process

The build process is fully automated using AWS CodeBuild:

1. CodeBuild pulls the source code from the repository
2. Installs necessary build dependencies (Go, Make)
3. Runs the build script
4. Uploads the binary to S3
5. Launch template automatically uses the latest binary

To trigger a new build:
```bash
aws codebuild start-build --project-name attestation-manager-build
```

To view build logs:
```bash
aws codebuild batch-get-builds --ids <build-id>
```

## Launch Template Usage

The launch template is configured to:
- Use the latest Amazon Linux 2 AMI
- Install and configure the attestation manager service
- Generate necessary keys on first boot
- Set up systemd service
- Configure proper permissions

To launch an instance using this template:

```bash
aws ec2 run-instances \
  --launch-template LaunchTemplateName=attestation-manager-template \
  --subnet-id <your-subnet-id>
```

## Security Considerations

1. The S3 bucket is configured with:
   - Versioning enabled
   - Public access blocked
   - Server-side encryption

2. EC2 instances are configured with:
   - IMDSv2 required
   - Encrypted EBS volumes
   - Minimal IAM permissions
   - Security group restrictions

3. CodeBuild is configured with:
   - Dedicated IAM role with minimal permissions
   - Secure build environment
   - Build logs for auditing

4. The attestation service runs with:
   - Dedicated service user
   - Protected key material
   - Limited system access

## Customization

To customize the deployment:

1. Edit `main.ts` to modify infrastructure settings
2. Update the CodeBuild buildspec in `main.ts` for build changes
3. Adjust instance type or other parameters as needed
4. Modify security group rules based on your network requirements

## Cleanup

To destroy the infrastructure:
```bash
cdktf destroy
```

Note: This will not automatically remove objects from the S3 bucket. You'll need to empty the bucket manually before destruction. 