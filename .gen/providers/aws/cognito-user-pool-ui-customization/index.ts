// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cognito_user_pool_ui_customization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserPoolUiCustomizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cognito_user_pool_ui_customization#client_id CognitoUserPoolUiCustomization#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cognito_user_pool_ui_customization#css CognitoUserPoolUiCustomization#css}
  */
  readonly css?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cognito_user_pool_ui_customization#id CognitoUserPoolUiCustomization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cognito_user_pool_ui_customization#image_file CognitoUserPoolUiCustomization#image_file}
  */
  readonly imageFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cognito_user_pool_ui_customization#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}
  */
  readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cognito_user_pool_ui_customization aws_cognito_user_pool_ui_customization}
*/
export class CognitoUserPoolUiCustomization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cognito_user_pool_ui_customization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CognitoUserPoolUiCustomization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoUserPoolUiCustomization to import
  * @param importFromId The id of the existing CognitoUserPoolUiCustomization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cognito_user_pool_ui_customization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoUserPoolUiCustomization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cognito_user_pool_ui_customization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/cognito_user_pool_ui_customization aws_cognito_user_pool_ui_customization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolUiCustomizationConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolUiCustomizationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool_ui_customization',
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
    this._clientId = config.clientId;
    this._css = config.css;
    this._id = config.id;
    this._imageFile = config.imageFile;
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // css - computed: false, optional: true, required: false
  private _css?: string; 
  public get css() {
    return this.getStringAttribute('css');
  }
  public set css(value: string) {
    this._css = value;
  }
  public resetCss() {
    this._css = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssInput() {
    return this._css;
  }

  // css_version - computed: true, optional: false, required: false
  public get cssVersion() {
    return this.getStringAttribute('css_version');
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

  // image_file - computed: false, optional: true, required: false
  private _imageFile?: string; 
  public get imageFile() {
    return this.getStringAttribute('image_file');
  }
  public set imageFile(value: string) {
    this._imageFile = value;
  }
  public resetImageFile() {
    this._imageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFileInput() {
    return this._imageFile;
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      css: cdktf.stringToTerraform(this._css),
      id: cdktf.stringToTerraform(this._id),
      image_file: cdktf.stringToTerraform(this._imageFile),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      css: {
        value: cdktf.stringToHclTerraform(this._css),
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
      image_file: {
        value: cdktf.stringToHclTerraform(this._imageFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_pool_id: {
        value: cdktf.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
