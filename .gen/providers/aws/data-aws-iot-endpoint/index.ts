// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/iot_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIotEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/iot_endpoint#endpoint_type DataAwsIotEndpoint#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/iot_endpoint#id DataAwsIotEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/iot_endpoint aws_iot_endpoint}
*/
export class DataAwsIotEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsIotEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsIotEndpoint to import
  * @param importFromId The id of the existing DataAwsIotEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/iot_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsIotEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/iot_endpoint aws_iot_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIotEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsIotEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_endpoint',
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
    this._endpointType = config.endpointType;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_address - computed: true, optional: false, required: false
  public get endpointAddress() {
    return this.getStringAttribute('endpoint_address');
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
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
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
