// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#id SagemakerAppImageConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#tags_all SagemakerAppImageConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * kernel_gateway_image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}
  */
  readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig;
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}
  */
  readonly defaultGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}
  */
  readonly defaultUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}
  */
  readonly mountPath?: string;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gid: cdktf.numberToTerraform(struct!.defaultGid),
    default_uid: cdktf.numberToTerraform(struct!.defaultUid),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
  }
}


export function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gid: {
      value: cdktf.numberToHclTerraform(struct!.defaultGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_uid: {
      value: cdktf.numberToHclTerraform(struct!.defaultUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGid = this._defaultGid;
    }
    if (this._defaultUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUid = this._defaultUid;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGid = undefined;
      this._defaultUid = undefined;
      this._mountPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGid = value.defaultGid;
      this._defaultUid = value.defaultUid;
      this._mountPath = value.mountPath;
    }
  }

  // default_gid - computed: false, optional: true, required: false
  private _defaultGid?: number; 
  public get defaultGid() {
    return this.getNumberAttribute('default_gid');
  }
  public set defaultGid(value: number) {
    this._defaultGid = value;
  }
  public resetDefaultGid() {
    this._defaultGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGidInput() {
    return this._defaultGid;
  }

  // default_uid - computed: false, optional: true, required: false
  private _defaultUid?: number; 
  public get defaultUid() {
    return this.getNumberAttribute('default_uid');
  }
  public set defaultUid(value: number) {
    this._defaultUid = value;
  }
  public resetDefaultUid() {
    this._defaultUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUidInput() {
    return this._defaultUid;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#display_name SagemakerAppImageConfig#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#name SagemakerAppImageConfig#name}
  */
  readonly name: string;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._name = value.name;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface SagemakerAppImageConfigKernelGatewayImageConfig {
  /**
  * file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}
  */
  readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
  /**
  * kernel_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#kernel_spec SagemakerAppImageConfig#kernel_spec}
  */
  readonly kernelSpec: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec;
}

export function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_config: sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct!.fileSystemConfig),
    kernel_spec: sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform(struct!.kernelSpec),
  }
}


export function sagemakerAppImageConfigKernelGatewayImageConfigToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_config: {
      value: sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToHclTerraform(struct!.fileSystemConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigList",
    },
    kernel_spec: {
      value: sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToHclTerraform(struct!.kernelSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerAppImageConfigKernelGatewayImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemConfig = this._fileSystemConfig?.internalValue;
    }
    if (this._kernelSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelSpec = this._kernelSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemConfig.internalValue = undefined;
      this._kernelSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemConfig.internalValue = value.fileSystemConfig;
      this._kernelSpec.internalValue = value.kernelSpec;
    }
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig = new SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }

  // kernel_spec - computed: false, optional: false, required: true
  private _kernelSpec = new SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference(this, "kernel_spec");
  public get kernelSpec() {
    return this._kernelSpec;
  }
  public putKernelSpec(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec) {
    this._kernelSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelSpecInput() {
    return this._kernelSpec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config}
*/
export class SagemakerAppImageConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_app_image_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerAppImageConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerAppImageConfig to import
  * @param importFromId The id of the existing SagemakerAppImageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerAppImageConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_app_image_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerAppImageConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_app_image_config',
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
    this._appImageConfigName = config.appImageConfigName;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._kernelGatewayImageConfig.internalValue = config.kernelGatewayImageConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // kernel_gateway_image_config - computed: false, optional: true, required: false
  private _kernelGatewayImageConfig = new SagemakerAppImageConfigKernelGatewayImageConfigOutputReference(this, "kernel_gateway_image_config");
  public get kernelGatewayImageConfig() {
    return this._kernelGatewayImageConfig;
  }
  public putKernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig) {
    this._kernelGatewayImageConfig.internalValue = value;
  }
  public resetKernelGatewayImageConfig() {
    this._kernelGatewayImageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayImageConfigInput() {
    return this._kernelGatewayImageConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_image_config_name: cdktf.stringToTerraform(this._appImageConfigName),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      kernel_gateway_image_config: sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(this._kernelGatewayImageConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_image_config_name: {
        value: cdktf.stringToHclTerraform(this._appImageConfigName),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kernel_gateway_image_config: {
        value: sagemakerAppImageConfigKernelGatewayImageConfigToHclTerraform(this._kernelGatewayImageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerAppImageConfigKernelGatewayImageConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
