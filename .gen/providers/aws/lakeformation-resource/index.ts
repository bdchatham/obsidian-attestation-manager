// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lakeformation_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LakeformationResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lakeformation_resource#arn LakeformationResource#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lakeformation_resource#id LakeformationResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lakeformation_resource#role_arn LakeformationResource#role_arn}
  */
  readonly roleArn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lakeformation_resource aws_lakeformation_resource}
*/
export class LakeformationResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lakeformation_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LakeformationResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LakeformationResource to import
  * @param importFromId The id of the existing LakeformationResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lakeformation_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LakeformationResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lakeformation_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lakeformation_resource aws_lakeformation_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LakeformationResourceConfig
  */
  public constructor(scope: Construct, id: string, config: LakeformationResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_resource',
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
    this._arn = config.arn;
    this._id = config.id;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      id: cdktf.stringToTerraform(this._id),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
