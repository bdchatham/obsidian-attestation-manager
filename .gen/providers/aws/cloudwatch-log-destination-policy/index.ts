// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cloudwatch_log_destination_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogDestinationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cloudwatch_log_destination_policy#access_policy CloudwatchLogDestinationPolicy#access_policy}
  */
  readonly accessPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cloudwatch_log_destination_policy#destination_name CloudwatchLogDestinationPolicy#destination_name}
  */
  readonly destinationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cloudwatch_log_destination_policy#force_update CloudwatchLogDestinationPolicy#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cloudwatch_log_destination_policy#id CloudwatchLogDestinationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cloudwatch_log_destination_policy aws_cloudwatch_log_destination_policy}
*/
export class CloudwatchLogDestinationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_destination_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchLogDestinationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchLogDestinationPolicy to import
  * @param importFromId The id of the existing CloudwatchLogDestinationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cloudwatch_log_destination_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchLogDestinationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_destination_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cloudwatch_log_destination_policy aws_cloudwatch_log_destination_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchLogDestinationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchLogDestinationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_destination_policy',
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
    this._accessPolicy = config.accessPolicy;
    this._destinationName = config.destinationName;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: false, required: true
  private _accessPolicy?: string; 
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string) {
    this._accessPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy;
  }

  // destination_name - computed: false, optional: false, required: true
  private _destinationName?: string; 
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }
  public set destinationName(value: string) {
    this._destinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNameInput() {
    return this._destinationName;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      destination_name: cdktf.stringToTerraform(this._destinationName),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy: {
        value: cdktf.stringToHclTerraform(this._accessPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_name: {
        value: cdktf.stringToHclTerraform(this._destinationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
