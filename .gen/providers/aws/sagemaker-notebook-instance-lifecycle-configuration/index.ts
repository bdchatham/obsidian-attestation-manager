// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerNotebookInstanceLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}
  */
  readonly onCreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}
  */
  readonly onStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration aws_sagemaker_notebook_instance_lifecycle_configuration}
*/
export class SagemakerNotebookInstanceLifecycleConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_notebook_instance_lifecycle_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerNotebookInstanceLifecycleConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfiguration to import
  * @param importFromId The id of the existing SagemakerNotebookInstanceLifecycleConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_notebook_instance_lifecycle_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration aws_sagemaker_notebook_instance_lifecycle_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerNotebookInstanceLifecycleConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceLifecycleConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_notebook_instance_lifecycle_configuration',
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
    this._id = config.id;
    this._name = config.name;
    this._onCreate = config.onCreate;
    this._onStart = config.onStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_create - computed: false, optional: true, required: false
  private _onCreate?: string; 
  public get onCreate() {
    return this.getStringAttribute('on_create');
  }
  public set onCreate(value: string) {
    this._onCreate = value;
  }
  public resetOnCreate() {
    this._onCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCreateInput() {
    return this._onCreate;
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart?: string; 
  public get onStart() {
    return this.getStringAttribute('on_start');
  }
  public set onStart(value: string) {
    this._onStart = value;
  }
  public resetOnStart() {
    this._onStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      on_create: cdktf.stringToTerraform(this._onCreate),
      on_start: cdktf.stringToTerraform(this._onStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_create: {
        value: cdktf.stringToHclTerraform(this._onCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_start: {
        value: cdktf.stringToHclTerraform(this._onStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
