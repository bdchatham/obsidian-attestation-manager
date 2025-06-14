// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksPhpAppLayerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#auto_assign_elastic_ips OpsworksPhpAppLayer#auto_assign_elastic_ips}
  */
  readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#auto_assign_public_ips OpsworksPhpAppLayer#auto_assign_public_ips}
  */
  readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#auto_healing OpsworksPhpAppLayer#auto_healing}
  */
  readonly autoHealing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#custom_configure_recipes OpsworksPhpAppLayer#custom_configure_recipes}
  */
  readonly customConfigureRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#custom_deploy_recipes OpsworksPhpAppLayer#custom_deploy_recipes}
  */
  readonly customDeployRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#custom_instance_profile_arn OpsworksPhpAppLayer#custom_instance_profile_arn}
  */
  readonly customInstanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#custom_json OpsworksPhpAppLayer#custom_json}
  */
  readonly customJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#custom_security_group_ids OpsworksPhpAppLayer#custom_security_group_ids}
  */
  readonly customSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#custom_setup_recipes OpsworksPhpAppLayer#custom_setup_recipes}
  */
  readonly customSetupRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#custom_shutdown_recipes OpsworksPhpAppLayer#custom_shutdown_recipes}
  */
  readonly customShutdownRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#custom_undeploy_recipes OpsworksPhpAppLayer#custom_undeploy_recipes}
  */
  readonly customUndeployRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#drain_elb_on_shutdown OpsworksPhpAppLayer#drain_elb_on_shutdown}
  */
  readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#elastic_load_balancer OpsworksPhpAppLayer#elastic_load_balancer}
  */
  readonly elasticLoadBalancer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#id OpsworksPhpAppLayer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#install_updates_on_boot OpsworksPhpAppLayer#install_updates_on_boot}
  */
  readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#instance_shutdown_timeout OpsworksPhpAppLayer#instance_shutdown_timeout}
  */
  readonly instanceShutdownTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#name OpsworksPhpAppLayer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#stack_id OpsworksPhpAppLayer#stack_id}
  */
  readonly stackId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#system_packages OpsworksPhpAppLayer#system_packages}
  */
  readonly systemPackages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#tags OpsworksPhpAppLayer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#tags_all OpsworksPhpAppLayer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#use_ebs_optimized_instances OpsworksPhpAppLayer#use_ebs_optimized_instances}
  */
  readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
  /**
  * cloudwatch_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#cloudwatch_configuration OpsworksPhpAppLayer#cloudwatch_configuration}
  */
  readonly cloudwatchConfiguration?: OpsworksPhpAppLayerCloudwatchConfiguration;
  /**
  * ebs_volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#ebs_volume OpsworksPhpAppLayer#ebs_volume}
  */
  readonly ebsVolume?: OpsworksPhpAppLayerEbsVolume[] | cdktf.IResolvable;
  /**
  * load_based_auto_scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#load_based_auto_scaling OpsworksPhpAppLayer#load_based_auto_scaling}
  */
  readonly loadBasedAutoScaling?: OpsworksPhpAppLayerLoadBasedAutoScaling;
}
export interface OpsworksPhpAppLayerCloudwatchConfigurationLogStreams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#batch_count OpsworksPhpAppLayer#batch_count}
  */
  readonly batchCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#batch_size OpsworksPhpAppLayer#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#buffer_duration OpsworksPhpAppLayer#buffer_duration}
  */
  readonly bufferDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#datetime_format OpsworksPhpAppLayer#datetime_format}
  */
  readonly datetimeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#encoding OpsworksPhpAppLayer#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#file OpsworksPhpAppLayer#file}
  */
  readonly file: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#file_fingerprint_lines OpsworksPhpAppLayer#file_fingerprint_lines}
  */
  readonly fileFingerprintLines?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#initial_position OpsworksPhpAppLayer#initial_position}
  */
  readonly initialPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#log_group_name OpsworksPhpAppLayer#log_group_name}
  */
  readonly logGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#multiline_start_pattern OpsworksPhpAppLayer#multiline_start_pattern}
  */
  readonly multilineStartPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#time_zone OpsworksPhpAppLayer#time_zone}
  */
  readonly timeZone?: string;
}

export function opsworksPhpAppLayerCloudwatchConfigurationLogStreamsToTerraform(struct?: OpsworksPhpAppLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_count: cdktf.numberToTerraform(struct!.batchCount),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    buffer_duration: cdktf.numberToTerraform(struct!.bufferDuration),
    datetime_format: cdktf.stringToTerraform(struct!.datetimeFormat),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    file: cdktf.stringToTerraform(struct!.file),
    file_fingerprint_lines: cdktf.stringToTerraform(struct!.fileFingerprintLines),
    initial_position: cdktf.stringToTerraform(struct!.initialPosition),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    multiline_start_pattern: cdktf.stringToTerraform(struct!.multilineStartPattern),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function opsworksPhpAppLayerCloudwatchConfigurationLogStreamsToHclTerraform(struct?: OpsworksPhpAppLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_count: {
      value: cdktf.numberToHclTerraform(struct!.batchCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer_duration: {
      value: cdktf.numberToHclTerraform(struct!.bufferDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    datetime_format: {
      value: cdktf.stringToHclTerraform(struct!.datetimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_fingerprint_lines: {
      value: cdktf.stringToHclTerraform(struct!.fileFingerprintLines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_position: {
      value: cdktf.stringToHclTerraform(struct!.initialPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_name: {
      value: cdktf.stringToHclTerraform(struct!.logGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiline_start_pattern: {
      value: cdktf.stringToHclTerraform(struct!.multilineStartPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OpsworksPhpAppLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchCount = this._batchCount;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._bufferDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferDuration = this._bufferDuration;
    }
    if (this._datetimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetimeFormat = this._datetimeFormat;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._fileFingerprintLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFingerprintLines = this._fileFingerprintLines;
    }
    if (this._initialPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialPosition = this._initialPosition;
    }
    if (this._logGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupName = this._logGroupName;
    }
    if (this._multilineStartPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.multilineStartPattern = this._multilineStartPattern;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksPhpAppLayerCloudwatchConfigurationLogStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchCount = undefined;
      this._batchSize = undefined;
      this._bufferDuration = undefined;
      this._datetimeFormat = undefined;
      this._encoding = undefined;
      this._file = undefined;
      this._fileFingerprintLines = undefined;
      this._initialPosition = undefined;
      this._logGroupName = undefined;
      this._multilineStartPattern = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchCount = value.batchCount;
      this._batchSize = value.batchSize;
      this._bufferDuration = value.bufferDuration;
      this._datetimeFormat = value.datetimeFormat;
      this._encoding = value.encoding;
      this._file = value.file;
      this._fileFingerprintLines = value.fileFingerprintLines;
      this._initialPosition = value.initialPosition;
      this._logGroupName = value.logGroupName;
      this._multilineStartPattern = value.multilineStartPattern;
      this._timeZone = value.timeZone;
    }
  }

  // batch_count - computed: false, optional: true, required: false
  private _batchCount?: number; 
  public get batchCount() {
    return this.getNumberAttribute('batch_count');
  }
  public set batchCount(value: number) {
    this._batchCount = value;
  }
  public resetBatchCount() {
    this._batchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchCountInput() {
    return this._batchCount;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // buffer_duration - computed: false, optional: true, required: false
  private _bufferDuration?: number; 
  public get bufferDuration() {
    return this.getNumberAttribute('buffer_duration');
  }
  public set bufferDuration(value: number) {
    this._bufferDuration = value;
  }
  public resetBufferDuration() {
    this._bufferDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferDurationInput() {
    return this._bufferDuration;
  }

  // datetime_format - computed: false, optional: true, required: false
  private _datetimeFormat?: string; 
  public get datetimeFormat() {
    return this.getStringAttribute('datetime_format');
  }
  public set datetimeFormat(value: string) {
    this._datetimeFormat = value;
  }
  public resetDatetimeFormat() {
    this._datetimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeFormatInput() {
    return this._datetimeFormat;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // file_fingerprint_lines - computed: false, optional: true, required: false
  private _fileFingerprintLines?: string; 
  public get fileFingerprintLines() {
    return this.getStringAttribute('file_fingerprint_lines');
  }
  public set fileFingerprintLines(value: string) {
    this._fileFingerprintLines = value;
  }
  public resetFileFingerprintLines() {
    this._fileFingerprintLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFingerprintLinesInput() {
    return this._fileFingerprintLines;
  }

  // initial_position - computed: false, optional: true, required: false
  private _initialPosition?: string; 
  public get initialPosition() {
    return this.getStringAttribute('initial_position');
  }
  public set initialPosition(value: string) {
    this._initialPosition = value;
  }
  public resetInitialPosition() {
    this._initialPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPositionInput() {
    return this._initialPosition;
  }

  // log_group_name - computed: false, optional: false, required: true
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // multiline_start_pattern - computed: false, optional: true, required: false
  private _multilineStartPattern?: string; 
  public get multilineStartPattern() {
    return this.getStringAttribute('multiline_start_pattern');
  }
  public set multilineStartPattern(value: string) {
    this._multilineStartPattern = value;
  }
  public resetMultilineStartPattern() {
    this._multilineStartPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilineStartPatternInput() {
    return this._multilineStartPattern;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList extends cdktf.ComplexList {
  public internalValue? : OpsworksPhpAppLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference {
    return new OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsworksPhpAppLayerCloudwatchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#enabled OpsworksPhpAppLayer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * log_streams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#log_streams OpsworksPhpAppLayer#log_streams}
  */
  readonly logStreams?: OpsworksPhpAppLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable;
}

export function opsworksPhpAppLayerCloudwatchConfigurationToTerraform(struct?: OpsworksPhpAppLayerCloudwatchConfigurationOutputReference | OpsworksPhpAppLayerCloudwatchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_streams: cdktf.listMapper(opsworksPhpAppLayerCloudwatchConfigurationLogStreamsToTerraform, true)(struct!.logStreams),
  }
}


export function opsworksPhpAppLayerCloudwatchConfigurationToHclTerraform(struct?: OpsworksPhpAppLayerCloudwatchConfigurationOutputReference | OpsworksPhpAppLayerCloudwatchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_streams: {
      value: cdktf.listMapperHcl(opsworksPhpAppLayerCloudwatchConfigurationLogStreamsToHclTerraform, true)(struct!.logStreams),
      isBlock: true,
      type: "list",
      storageClassType: "OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsworksPhpAppLayerCloudwatchConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksPhpAppLayerCloudwatchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logStreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreams = this._logStreams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksPhpAppLayerCloudwatchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._logStreams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._logStreams.internalValue = value.logStreams;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // log_streams - computed: false, optional: true, required: false
  private _logStreams = new OpsworksPhpAppLayerCloudwatchConfigurationLogStreamsList(this, "log_streams", false);
  public get logStreams() {
    return this._logStreams;
  }
  public putLogStreams(value: OpsworksPhpAppLayerCloudwatchConfigurationLogStreams[] | cdktf.IResolvable) {
    this._logStreams.internalValue = value;
  }
  public resetLogStreams() {
    this._logStreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamsInput() {
    return this._logStreams.internalValue;
  }
}
export interface OpsworksPhpAppLayerEbsVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#encrypted OpsworksPhpAppLayer#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#iops OpsworksPhpAppLayer#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#mount_point OpsworksPhpAppLayer#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#number_of_disks OpsworksPhpAppLayer#number_of_disks}
  */
  readonly numberOfDisks: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#raid_level OpsworksPhpAppLayer#raid_level}
  */
  readonly raidLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#size OpsworksPhpAppLayer#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#type OpsworksPhpAppLayer#type}
  */
  readonly type?: string;
}

export function opsworksPhpAppLayerEbsVolumeToTerraform(struct?: OpsworksPhpAppLayerEbsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
    raid_level: cdktf.stringToTerraform(struct!.raidLevel),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function opsworksPhpAppLayerEbsVolumeToHclTerraform(struct?: OpsworksPhpAppLayerEbsVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_disks: {
      value: cdktf.numberToHclTerraform(struct!.numberOfDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    raid_level: {
      value: cdktf.stringToHclTerraform(struct!.raidLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsworksPhpAppLayerEbsVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OpsworksPhpAppLayerEbsVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._numberOfDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDisks = this._numberOfDisks;
    }
    if (this._raidLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidLevel = this._raidLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksPhpAppLayerEbsVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._iops = undefined;
      this._mountPoint = undefined;
      this._numberOfDisks = undefined;
      this._raidLevel = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._iops = value.iops;
      this._mountPoint = value.mountPoint;
      this._numberOfDisks = value.numberOfDisks;
      this._raidLevel = value.raidLevel;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // number_of_disks - computed: false, optional: false, required: true
  private _numberOfDisks?: number; 
  public get numberOfDisks() {
    return this.getNumberAttribute('number_of_disks');
  }
  public set numberOfDisks(value: number) {
    this._numberOfDisks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDisksInput() {
    return this._numberOfDisks;
  }

  // raid_level - computed: false, optional: true, required: false
  private _raidLevel?: string; 
  public get raidLevel() {
    return this.getStringAttribute('raid_level');
  }
  public set raidLevel(value: string) {
    this._raidLevel = value;
  }
  public resetRaidLevel() {
    this._raidLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidLevelInput() {
    return this._raidLevel;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class OpsworksPhpAppLayerEbsVolumeList extends cdktf.ComplexList {
  public internalValue? : OpsworksPhpAppLayerEbsVolume[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OpsworksPhpAppLayerEbsVolumeOutputReference {
    return new OpsworksPhpAppLayerEbsVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#alarms OpsworksPhpAppLayer#alarms}
  */
  readonly alarms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#cpu_threshold OpsworksPhpAppLayer#cpu_threshold}
  */
  readonly cpuThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#ignore_metrics_time OpsworksPhpAppLayer#ignore_metrics_time}
  */
  readonly ignoreMetricsTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#instance_count OpsworksPhpAppLayer#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#load_threshold OpsworksPhpAppLayer#load_threshold}
  */
  readonly loadThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#memory_threshold OpsworksPhpAppLayer#memory_threshold}
  */
  readonly memoryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#thresholds_wait_time OpsworksPhpAppLayer#thresholds_wait_time}
  */
  readonly thresholdsWaitTime?: number;
}

export function opsworksPhpAppLayerLoadBasedAutoScalingDownscalingToTerraform(struct?: OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference | OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarms),
    cpu_threshold: cdktf.numberToTerraform(struct!.cpuThreshold),
    ignore_metrics_time: cdktf.numberToTerraform(struct!.ignoreMetricsTime),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    load_threshold: cdktf.numberToTerraform(struct!.loadThreshold),
    memory_threshold: cdktf.numberToTerraform(struct!.memoryThreshold),
    thresholds_wait_time: cdktf.numberToTerraform(struct!.thresholdsWaitTime),
  }
}


export function opsworksPhpAppLayerLoadBasedAutoScalingDownscalingToHclTerraform(struct?: OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference | OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alarms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_metrics_time: {
      value: cdktf.numberToHclTerraform(struct!.ignoreMetricsTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_threshold: {
      value: cdktf.numberToHclTerraform(struct!.loadThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memoryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thresholds_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.thresholdsWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms;
    }
    if (this._cpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuThreshold = this._cpuThreshold;
    }
    if (this._ignoreMetricsTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMetricsTime = this._ignoreMetricsTime;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._loadThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadThreshold = this._loadThreshold;
    }
    if (this._memoryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryThreshold = this._memoryThreshold;
    }
    if (this._thresholdsWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdsWaitTime = this._thresholdsWaitTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarms = undefined;
      this._cpuThreshold = undefined;
      this._ignoreMetricsTime = undefined;
      this._instanceCount = undefined;
      this._loadThreshold = undefined;
      this._memoryThreshold = undefined;
      this._thresholdsWaitTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarms = value.alarms;
      this._cpuThreshold = value.cpuThreshold;
      this._ignoreMetricsTime = value.ignoreMetricsTime;
      this._instanceCount = value.instanceCount;
      this._loadThreshold = value.loadThreshold;
      this._memoryThreshold = value.memoryThreshold;
      this._thresholdsWaitTime = value.thresholdsWaitTime;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms?: string[]; 
  public get alarms() {
    return this.getListAttribute('alarms');
  }
  public set alarms(value: string[]) {
    this._alarms = value;
  }
  public resetAlarms() {
    this._alarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms;
  }

  // cpu_threshold - computed: false, optional: true, required: false
  private _cpuThreshold?: number; 
  public get cpuThreshold() {
    return this.getNumberAttribute('cpu_threshold');
  }
  public set cpuThreshold(value: number) {
    this._cpuThreshold = value;
  }
  public resetCpuThreshold() {
    this._cpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdInput() {
    return this._cpuThreshold;
  }

  // ignore_metrics_time - computed: false, optional: true, required: false
  private _ignoreMetricsTime?: number; 
  public get ignoreMetricsTime() {
    return this.getNumberAttribute('ignore_metrics_time');
  }
  public set ignoreMetricsTime(value: number) {
    this._ignoreMetricsTime = value;
  }
  public resetIgnoreMetricsTime() {
    this._ignoreMetricsTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMetricsTimeInput() {
    return this._ignoreMetricsTime;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // load_threshold - computed: false, optional: true, required: false
  private _loadThreshold?: number; 
  public get loadThreshold() {
    return this.getNumberAttribute('load_threshold');
  }
  public set loadThreshold(value: number) {
    this._loadThreshold = value;
  }
  public resetLoadThreshold() {
    this._loadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadThresholdInput() {
    return this._loadThreshold;
  }

  // memory_threshold - computed: false, optional: true, required: false
  private _memoryThreshold?: number; 
  public get memoryThreshold() {
    return this.getNumberAttribute('memory_threshold');
  }
  public set memoryThreshold(value: number) {
    this._memoryThreshold = value;
  }
  public resetMemoryThreshold() {
    this._memoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryThresholdInput() {
    return this._memoryThreshold;
  }

  // thresholds_wait_time - computed: false, optional: true, required: false
  private _thresholdsWaitTime?: number; 
  public get thresholdsWaitTime() {
    return this.getNumberAttribute('thresholds_wait_time');
  }
  public set thresholdsWaitTime(value: number) {
    this._thresholdsWaitTime = value;
  }
  public resetThresholdsWaitTime() {
    this._thresholdsWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsWaitTimeInput() {
    return this._thresholdsWaitTime;
  }
}
export interface OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#alarms OpsworksPhpAppLayer#alarms}
  */
  readonly alarms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#cpu_threshold OpsworksPhpAppLayer#cpu_threshold}
  */
  readonly cpuThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#ignore_metrics_time OpsworksPhpAppLayer#ignore_metrics_time}
  */
  readonly ignoreMetricsTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#instance_count OpsworksPhpAppLayer#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#load_threshold OpsworksPhpAppLayer#load_threshold}
  */
  readonly loadThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#memory_threshold OpsworksPhpAppLayer#memory_threshold}
  */
  readonly memoryThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#thresholds_wait_time OpsworksPhpAppLayer#thresholds_wait_time}
  */
  readonly thresholdsWaitTime?: number;
}

export function opsworksPhpAppLayerLoadBasedAutoScalingUpscalingToTerraform(struct?: OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference | OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarms),
    cpu_threshold: cdktf.numberToTerraform(struct!.cpuThreshold),
    ignore_metrics_time: cdktf.numberToTerraform(struct!.ignoreMetricsTime),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    load_threshold: cdktf.numberToTerraform(struct!.loadThreshold),
    memory_threshold: cdktf.numberToTerraform(struct!.memoryThreshold),
    thresholds_wait_time: cdktf.numberToTerraform(struct!.thresholdsWaitTime),
  }
}


export function opsworksPhpAppLayerLoadBasedAutoScalingUpscalingToHclTerraform(struct?: OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference | OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alarms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_metrics_time: {
      value: cdktf.numberToHclTerraform(struct!.ignoreMetricsTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_threshold: {
      value: cdktf.numberToHclTerraform(struct!.loadThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memoryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thresholds_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.thresholdsWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms;
    }
    if (this._cpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuThreshold = this._cpuThreshold;
    }
    if (this._ignoreMetricsTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMetricsTime = this._ignoreMetricsTime;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._loadThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadThreshold = this._loadThreshold;
    }
    if (this._memoryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryThreshold = this._memoryThreshold;
    }
    if (this._thresholdsWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdsWaitTime = this._thresholdsWaitTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarms = undefined;
      this._cpuThreshold = undefined;
      this._ignoreMetricsTime = undefined;
      this._instanceCount = undefined;
      this._loadThreshold = undefined;
      this._memoryThreshold = undefined;
      this._thresholdsWaitTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarms = value.alarms;
      this._cpuThreshold = value.cpuThreshold;
      this._ignoreMetricsTime = value.ignoreMetricsTime;
      this._instanceCount = value.instanceCount;
      this._loadThreshold = value.loadThreshold;
      this._memoryThreshold = value.memoryThreshold;
      this._thresholdsWaitTime = value.thresholdsWaitTime;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms?: string[]; 
  public get alarms() {
    return this.getListAttribute('alarms');
  }
  public set alarms(value: string[]) {
    this._alarms = value;
  }
  public resetAlarms() {
    this._alarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms;
  }

  // cpu_threshold - computed: false, optional: true, required: false
  private _cpuThreshold?: number; 
  public get cpuThreshold() {
    return this.getNumberAttribute('cpu_threshold');
  }
  public set cpuThreshold(value: number) {
    this._cpuThreshold = value;
  }
  public resetCpuThreshold() {
    this._cpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdInput() {
    return this._cpuThreshold;
  }

  // ignore_metrics_time - computed: false, optional: true, required: false
  private _ignoreMetricsTime?: number; 
  public get ignoreMetricsTime() {
    return this.getNumberAttribute('ignore_metrics_time');
  }
  public set ignoreMetricsTime(value: number) {
    this._ignoreMetricsTime = value;
  }
  public resetIgnoreMetricsTime() {
    this._ignoreMetricsTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMetricsTimeInput() {
    return this._ignoreMetricsTime;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // load_threshold - computed: false, optional: true, required: false
  private _loadThreshold?: number; 
  public get loadThreshold() {
    return this.getNumberAttribute('load_threshold');
  }
  public set loadThreshold(value: number) {
    this._loadThreshold = value;
  }
  public resetLoadThreshold() {
    this._loadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadThresholdInput() {
    return this._loadThreshold;
  }

  // memory_threshold - computed: false, optional: true, required: false
  private _memoryThreshold?: number; 
  public get memoryThreshold() {
    return this.getNumberAttribute('memory_threshold');
  }
  public set memoryThreshold(value: number) {
    this._memoryThreshold = value;
  }
  public resetMemoryThreshold() {
    this._memoryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryThresholdInput() {
    return this._memoryThreshold;
  }

  // thresholds_wait_time - computed: false, optional: true, required: false
  private _thresholdsWaitTime?: number; 
  public get thresholdsWaitTime() {
    return this.getNumberAttribute('thresholds_wait_time');
  }
  public set thresholdsWaitTime(value: number) {
    this._thresholdsWaitTime = value;
  }
  public resetThresholdsWaitTime() {
    this._thresholdsWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsWaitTimeInput() {
    return this._thresholdsWaitTime;
  }
}
export interface OpsworksPhpAppLayerLoadBasedAutoScaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#enable OpsworksPhpAppLayer#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * downscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#downscaling OpsworksPhpAppLayer#downscaling}
  */
  readonly downscaling?: OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling;
  /**
  * upscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#upscaling OpsworksPhpAppLayer#upscaling}
  */
  readonly upscaling?: OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling;
}

export function opsworksPhpAppLayerLoadBasedAutoScalingToTerraform(struct?: OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference | OpsworksPhpAppLayerLoadBasedAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    downscaling: opsworksPhpAppLayerLoadBasedAutoScalingDownscalingToTerraform(struct!.downscaling),
    upscaling: opsworksPhpAppLayerLoadBasedAutoScalingUpscalingToTerraform(struct!.upscaling),
  }
}


export function opsworksPhpAppLayerLoadBasedAutoScalingToHclTerraform(struct?: OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference | OpsworksPhpAppLayerLoadBasedAutoScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    downscaling: {
      value: opsworksPhpAppLayerLoadBasedAutoScalingDownscalingToHclTerraform(struct!.downscaling),
      isBlock: true,
      type: "list",
      storageClassType: "OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingList",
    },
    upscaling: {
      value: opsworksPhpAppLayerLoadBasedAutoScalingUpscalingToHclTerraform(struct!.upscaling),
      isBlock: true,
      type: "list",
      storageClassType: "OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsworksPhpAppLayerLoadBasedAutoScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._downscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downscaling = this._downscaling?.internalValue;
    }
    if (this._upscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upscaling = this._upscaling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsworksPhpAppLayerLoadBasedAutoScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._downscaling.internalValue = undefined;
      this._upscaling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._downscaling.internalValue = value.downscaling;
      this._upscaling.internalValue = value.upscaling;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // downscaling - computed: false, optional: true, required: false
  private _downscaling = new OpsworksPhpAppLayerLoadBasedAutoScalingDownscalingOutputReference(this, "downscaling");
  public get downscaling() {
    return this._downscaling;
  }
  public putDownscaling(value: OpsworksPhpAppLayerLoadBasedAutoScalingDownscaling) {
    this._downscaling.internalValue = value;
  }
  public resetDownscaling() {
    this._downscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downscalingInput() {
    return this._downscaling.internalValue;
  }

  // upscaling - computed: false, optional: true, required: false
  private _upscaling = new OpsworksPhpAppLayerLoadBasedAutoScalingUpscalingOutputReference(this, "upscaling");
  public get upscaling() {
    return this._upscaling;
  }
  public putUpscaling(value: OpsworksPhpAppLayerLoadBasedAutoScalingUpscaling) {
    this._upscaling.internalValue = value;
  }
  public resetUpscaling() {
    this._upscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upscalingInput() {
    return this._upscaling.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer aws_opsworks_php_app_layer}
*/
export class OpsworksPhpAppLayer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opsworks_php_app_layer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpsworksPhpAppLayer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpsworksPhpAppLayer to import
  * @param importFromId The id of the existing OpsworksPhpAppLayer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpsworksPhpAppLayer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_opsworks_php_app_layer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/opsworks_php_app_layer aws_opsworks_php_app_layer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksPhpAppLayerConfig
  */
  public constructor(scope: Construct, id: string, config: OpsworksPhpAppLayerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_php_app_layer',
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
    this._autoAssignElasticIps = config.autoAssignElasticIps;
    this._autoAssignPublicIps = config.autoAssignPublicIps;
    this._autoHealing = config.autoHealing;
    this._customConfigureRecipes = config.customConfigureRecipes;
    this._customDeployRecipes = config.customDeployRecipes;
    this._customInstanceProfileArn = config.customInstanceProfileArn;
    this._customJson = config.customJson;
    this._customSecurityGroupIds = config.customSecurityGroupIds;
    this._customSetupRecipes = config.customSetupRecipes;
    this._customShutdownRecipes = config.customShutdownRecipes;
    this._customUndeployRecipes = config.customUndeployRecipes;
    this._drainElbOnShutdown = config.drainElbOnShutdown;
    this._elasticLoadBalancer = config.elasticLoadBalancer;
    this._id = config.id;
    this._installUpdatesOnBoot = config.installUpdatesOnBoot;
    this._instanceShutdownTimeout = config.instanceShutdownTimeout;
    this._name = config.name;
    this._stackId = config.stackId;
    this._systemPackages = config.systemPackages;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
    this._cloudwatchConfiguration.internalValue = config.cloudwatchConfiguration;
    this._ebsVolume.internalValue = config.ebsVolume;
    this._loadBasedAutoScaling.internalValue = config.loadBasedAutoScaling;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_assign_elastic_ips - computed: false, optional: true, required: false
  private _autoAssignElasticIps?: boolean | cdktf.IResolvable; 
  public get autoAssignElasticIps() {
    return this.getBooleanAttribute('auto_assign_elastic_ips');
  }
  public set autoAssignElasticIps(value: boolean | cdktf.IResolvable) {
    this._autoAssignElasticIps = value;
  }
  public resetAutoAssignElasticIps() {
    this._autoAssignElasticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignElasticIpsInput() {
    return this._autoAssignElasticIps;
  }

  // auto_assign_public_ips - computed: false, optional: true, required: false
  private _autoAssignPublicIps?: boolean | cdktf.IResolvable; 
  public get autoAssignPublicIps() {
    return this.getBooleanAttribute('auto_assign_public_ips');
  }
  public set autoAssignPublicIps(value: boolean | cdktf.IResolvable) {
    this._autoAssignPublicIps = value;
  }
  public resetAutoAssignPublicIps() {
    this._autoAssignPublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignPublicIpsInput() {
    return this._autoAssignPublicIps;
  }

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean | cdktf.IResolvable; 
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable) {
    this._autoHealing = value;
  }
  public resetAutoHealing() {
    this._autoHealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing;
  }

  // custom_configure_recipes - computed: false, optional: true, required: false
  private _customConfigureRecipes?: string[]; 
  public get customConfigureRecipes() {
    return this.getListAttribute('custom_configure_recipes');
  }
  public set customConfigureRecipes(value: string[]) {
    this._customConfigureRecipes = value;
  }
  public resetCustomConfigureRecipes() {
    this._customConfigureRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigureRecipesInput() {
    return this._customConfigureRecipes;
  }

  // custom_deploy_recipes - computed: false, optional: true, required: false
  private _customDeployRecipes?: string[]; 
  public get customDeployRecipes() {
    return this.getListAttribute('custom_deploy_recipes');
  }
  public set customDeployRecipes(value: string[]) {
    this._customDeployRecipes = value;
  }
  public resetCustomDeployRecipes() {
    this._customDeployRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDeployRecipesInput() {
    return this._customDeployRecipes;
  }

  // custom_instance_profile_arn - computed: false, optional: true, required: false
  private _customInstanceProfileArn?: string; 
  public get customInstanceProfileArn() {
    return this.getStringAttribute('custom_instance_profile_arn');
  }
  public set customInstanceProfileArn(value: string) {
    this._customInstanceProfileArn = value;
  }
  public resetCustomInstanceProfileArn() {
    this._customInstanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstanceProfileArnInput() {
    return this._customInstanceProfileArn;
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string; 
  public get customJson() {
    return this.getStringAttribute('custom_json');
  }
  public set customJson(value: string) {
    this._customJson = value;
  }
  public resetCustomJson() {
    this._customJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJsonInput() {
    return this._customJson;
  }

  // custom_security_group_ids - computed: false, optional: true, required: false
  private _customSecurityGroupIds?: string[]; 
  public get customSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_security_group_ids'));
  }
  public set customSecurityGroupIds(value: string[]) {
    this._customSecurityGroupIds = value;
  }
  public resetCustomSecurityGroupIds() {
    this._customSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityGroupIdsInput() {
    return this._customSecurityGroupIds;
  }

  // custom_setup_recipes - computed: false, optional: true, required: false
  private _customSetupRecipes?: string[]; 
  public get customSetupRecipes() {
    return this.getListAttribute('custom_setup_recipes');
  }
  public set customSetupRecipes(value: string[]) {
    this._customSetupRecipes = value;
  }
  public resetCustomSetupRecipes() {
    this._customSetupRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSetupRecipesInput() {
    return this._customSetupRecipes;
  }

  // custom_shutdown_recipes - computed: false, optional: true, required: false
  private _customShutdownRecipes?: string[]; 
  public get customShutdownRecipes() {
    return this.getListAttribute('custom_shutdown_recipes');
  }
  public set customShutdownRecipes(value: string[]) {
    this._customShutdownRecipes = value;
  }
  public resetCustomShutdownRecipes() {
    this._customShutdownRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customShutdownRecipesInput() {
    return this._customShutdownRecipes;
  }

  // custom_undeploy_recipes - computed: false, optional: true, required: false
  private _customUndeployRecipes?: string[]; 
  public get customUndeployRecipes() {
    return this.getListAttribute('custom_undeploy_recipes');
  }
  public set customUndeployRecipes(value: string[]) {
    this._customUndeployRecipes = value;
  }
  public resetCustomUndeployRecipes() {
    this._customUndeployRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUndeployRecipesInput() {
    return this._customUndeployRecipes;
  }

  // drain_elb_on_shutdown - computed: false, optional: true, required: false
  private _drainElbOnShutdown?: boolean | cdktf.IResolvable; 
  public get drainElbOnShutdown() {
    return this.getBooleanAttribute('drain_elb_on_shutdown');
  }
  public set drainElbOnShutdown(value: boolean | cdktf.IResolvable) {
    this._drainElbOnShutdown = value;
  }
  public resetDrainElbOnShutdown() {
    this._drainElbOnShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainElbOnShutdownInput() {
    return this._drainElbOnShutdown;
  }

  // elastic_load_balancer - computed: false, optional: true, required: false
  private _elasticLoadBalancer?: string; 
  public get elasticLoadBalancer() {
    return this.getStringAttribute('elastic_load_balancer');
  }
  public set elasticLoadBalancer(value: string) {
    this._elasticLoadBalancer = value;
  }
  public resetElasticLoadBalancer() {
    this._elasticLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLoadBalancerInput() {
    return this._elasticLoadBalancer;
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

  // install_updates_on_boot - computed: false, optional: true, required: false
  private _installUpdatesOnBoot?: boolean | cdktf.IResolvable; 
  public get installUpdatesOnBoot() {
    return this.getBooleanAttribute('install_updates_on_boot');
  }
  public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable) {
    this._installUpdatesOnBoot = value;
  }
  public resetInstallUpdatesOnBoot() {
    this._installUpdatesOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installUpdatesOnBootInput() {
    return this._installUpdatesOnBoot;
  }

  // instance_shutdown_timeout - computed: false, optional: true, required: false
  private _instanceShutdownTimeout?: number; 
  public get instanceShutdownTimeout() {
    return this.getNumberAttribute('instance_shutdown_timeout');
  }
  public set instanceShutdownTimeout(value: number) {
    this._instanceShutdownTimeout = value;
  }
  public resetInstanceShutdownTimeout() {
    this._instanceShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShutdownTimeoutInput() {
    return this._instanceShutdownTimeout;
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

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // system_packages - computed: false, optional: true, required: false
  private _systemPackages?: string[]; 
  public get systemPackages() {
    return cdktf.Fn.tolist(this.getListAttribute('system_packages'));
  }
  public set systemPackages(value: string[]) {
    this._systemPackages = value;
  }
  public resetSystemPackages() {
    this._systemPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPackagesInput() {
    return this._systemPackages;
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

  // use_ebs_optimized_instances - computed: false, optional: true, required: false
  private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable; 
  public get useEbsOptimizedInstances() {
    return this.getBooleanAttribute('use_ebs_optimized_instances');
  }
  public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable) {
    this._useEbsOptimizedInstances = value;
  }
  public resetUseEbsOptimizedInstances() {
    this._useEbsOptimizedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEbsOptimizedInstancesInput() {
    return this._useEbsOptimizedInstances;
  }

  // cloudwatch_configuration - computed: false, optional: true, required: false
  private _cloudwatchConfiguration = new OpsworksPhpAppLayerCloudwatchConfigurationOutputReference(this, "cloudwatch_configuration");
  public get cloudwatchConfiguration() {
    return this._cloudwatchConfiguration;
  }
  public putCloudwatchConfiguration(value: OpsworksPhpAppLayerCloudwatchConfiguration) {
    this._cloudwatchConfiguration.internalValue = value;
  }
  public resetCloudwatchConfiguration() {
    this._cloudwatchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchConfigurationInput() {
    return this._cloudwatchConfiguration.internalValue;
  }

  // ebs_volume - computed: false, optional: true, required: false
  private _ebsVolume = new OpsworksPhpAppLayerEbsVolumeList(this, "ebs_volume", true);
  public get ebsVolume() {
    return this._ebsVolume;
  }
  public putEbsVolume(value: OpsworksPhpAppLayerEbsVolume[] | cdktf.IResolvable) {
    this._ebsVolume.internalValue = value;
  }
  public resetEbsVolume() {
    this._ebsVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeInput() {
    return this._ebsVolume.internalValue;
  }

  // load_based_auto_scaling - computed: false, optional: true, required: false
  private _loadBasedAutoScaling = new OpsworksPhpAppLayerLoadBasedAutoScalingOutputReference(this, "load_based_auto_scaling");
  public get loadBasedAutoScaling() {
    return this._loadBasedAutoScaling;
  }
  public putLoadBasedAutoScaling(value: OpsworksPhpAppLayerLoadBasedAutoScaling) {
    this._loadBasedAutoScaling.internalValue = value;
  }
  public resetLoadBasedAutoScaling() {
    this._loadBasedAutoScaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBasedAutoScalingInput() {
    return this._loadBasedAutoScaling.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
      auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
      auto_healing: cdktf.booleanToTerraform(this._autoHealing),
      custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customConfigureRecipes),
      custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customDeployRecipes),
      custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
      custom_json: cdktf.stringToTerraform(this._customJson),
      custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSecurityGroupIds),
      custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customSetupRecipes),
      custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customShutdownRecipes),
      custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customUndeployRecipes),
      drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
      elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
      id: cdktf.stringToTerraform(this._id),
      install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
      instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
      name: cdktf.stringToTerraform(this._name),
      stack_id: cdktf.stringToTerraform(this._stackId),
      system_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemPackages),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
      cloudwatch_configuration: opsworksPhpAppLayerCloudwatchConfigurationToTerraform(this._cloudwatchConfiguration.internalValue),
      ebs_volume: cdktf.listMapper(opsworksPhpAppLayerEbsVolumeToTerraform, true)(this._ebsVolume.internalValue),
      load_based_auto_scaling: opsworksPhpAppLayerLoadBasedAutoScalingToTerraform(this._loadBasedAutoScaling.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_assign_elastic_ips: {
        value: cdktf.booleanToHclTerraform(this._autoAssignElasticIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_assign_public_ips: {
        value: cdktf.booleanToHclTerraform(this._autoAssignPublicIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_healing: {
        value: cdktf.booleanToHclTerraform(this._autoHealing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_configure_recipes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customConfigureRecipes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_deploy_recipes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customDeployRecipes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_instance_profile_arn: {
        value: cdktf.stringToHclTerraform(this._customInstanceProfileArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_json: {
        value: cdktf.stringToHclTerraform(this._customJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_setup_recipes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customSetupRecipes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_shutdown_recipes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customShutdownRecipes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_undeploy_recipes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customUndeployRecipes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      drain_elb_on_shutdown: {
        value: cdktf.booleanToHclTerraform(this._drainElbOnShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      elastic_load_balancer: {
        value: cdktf.stringToHclTerraform(this._elasticLoadBalancer),
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
      install_updates_on_boot: {
        value: cdktf.booleanToHclTerraform(this._installUpdatesOnBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_shutdown_timeout: {
        value: cdktf.numberToHclTerraform(this._instanceShutdownTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemPackages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      use_ebs_optimized_instances: {
        value: cdktf.booleanToHclTerraform(this._useEbsOptimizedInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloudwatch_configuration: {
        value: opsworksPhpAppLayerCloudwatchConfigurationToHclTerraform(this._cloudwatchConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpsworksPhpAppLayerCloudwatchConfigurationList",
      },
      ebs_volume: {
        value: cdktf.listMapperHcl(opsworksPhpAppLayerEbsVolumeToHclTerraform, true)(this._ebsVolume.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpsworksPhpAppLayerEbsVolumeList",
      },
      load_based_auto_scaling: {
        value: opsworksPhpAppLayerLoadBasedAutoScalingToHclTerraform(this._loadBasedAutoScaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpsworksPhpAppLayerLoadBasedAutoScalingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
