// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/serverlessapplicationrepository_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsServerlessapplicationrepositoryApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/serverlessapplicationrepository_application#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/serverlessapplicationrepository_application#id DataAwsServerlessapplicationrepositoryApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/serverlessapplicationrepository_application#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}
  */
  readonly semanticVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/serverlessapplicationrepository_application aws_serverlessapplicationrepository_application}
*/
export class DataAwsServerlessapplicationrepositoryApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_serverlessapplicationrepository_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsServerlessapplicationrepositoryApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsServerlessapplicationrepositoryApplication to import
  * @param importFromId The id of the existing DataAwsServerlessapplicationrepositoryApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/serverlessapplicationrepository_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsServerlessapplicationrepositoryApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_serverlessapplicationrepository_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/serverlessapplicationrepository_application aws_serverlessapplicationrepository_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsServerlessapplicationrepositoryApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsServerlessapplicationrepositoryApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_serverlessapplicationrepository_application',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.67.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._semanticVersion = config.semanticVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // required_capabilities - computed: true, optional: false, required: false
  public get requiredCapabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('required_capabilities'));
  }

  // semantic_version - computed: true, optional: true, required: false
  private _semanticVersion?: string; 
  public get semanticVersion() {
    return this.getStringAttribute('semantic_version');
  }
  public set semanticVersion(value: string) {
    this._semanticVersion = value;
  }
  public resetSemanticVersion() {
    this._semanticVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticVersionInput() {
    return this._semanticVersion;
  }

  // source_code_url - computed: true, optional: false, required: false
  public get sourceCodeUrl() {
    return this.getStringAttribute('source_code_url');
  }

  // template_url - computed: true, optional: false, required: false
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      semantic_version: cdktf.stringToTerraform(this._semanticVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      semantic_version: {
        value: cdktf.stringToHclTerraform(this._semanticVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
