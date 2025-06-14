// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/elasticache_user_group_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticacheUserGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/elasticache_user_group_association#id ElasticacheUserGroupAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/elasticache_user_group_association#user_group_id ElasticacheUserGroupAssociation#user_group_id}
  */
  readonly userGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/elasticache_user_group_association#user_id ElasticacheUserGroupAssociation#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/elasticache_user_group_association aws_elasticache_user_group_association}
*/
export class ElasticacheUserGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_elasticache_user_group_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticacheUserGroupAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticacheUserGroupAssociation to import
  * @param importFromId The id of the existing ElasticacheUserGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/elasticache_user_group_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticacheUserGroupAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_elasticache_user_group_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/elasticache_user_group_association aws_elasticache_user_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticacheUserGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticacheUserGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticache_user_group_association',
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
    this._userGroupId = config.userGroupId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
      user_id: cdktf.stringToTerraform(this._userId),
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
      user_group_id: {
        value: cdktf.stringToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
