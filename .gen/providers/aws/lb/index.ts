// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}
  */
  readonly customerOwnedIpv4Pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#desync_mitigation_mode Lb#desync_mitigation_mode}
  */
  readonly desyncMitigationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#drop_invalid_header_fields Lb#drop_invalid_header_fields}
  */
  readonly dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}
  */
  readonly enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#enable_deletion_protection Lb#enable_deletion_protection}
  */
  readonly enableDeletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#enable_http2 Lb#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#enable_tls_version_and_cipher_suite_headers Lb#enable_tls_version_and_cipher_suite_headers}
  */
  readonly enableTlsVersionAndCipherSuiteHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#enable_waf_fail_open Lb#enable_waf_fail_open}
  */
  readonly enableWafFailOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#enable_xff_client_port Lb#enable_xff_client_port}
  */
  readonly enableXffClientPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#id Lb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#idle_timeout Lb#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#internal Lb#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#ip_address_type Lb#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#load_balancer_type Lb#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#name Lb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#name_prefix Lb#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#preserve_host_header Lb#preserve_host_header}
  */
  readonly preserveHostHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#security_groups Lb#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#subnets Lb#subnets}
  */
  readonly subnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#tags Lb#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#tags_all Lb#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#xff_header_processing_mode Lb#xff_header_processing_mode}
  */
  readonly xffHeaderProcessingMode?: string;
  /**
  * access_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#access_logs Lb#access_logs}
  */
  readonly accessLogs?: LbAccessLogs;
  /**
  * subnet_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#subnet_mapping Lb#subnet_mapping}
  */
  readonly subnetMapping?: LbSubnetMapping[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#timeouts Lb#timeouts}
  */
  readonly timeouts?: LbTimeouts;
}
export interface LbAccessLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#bucket Lb#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#enabled Lb#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#prefix Lb#prefix}
  */
  readonly prefix?: string;
}

export function lbAccessLogsToTerraform(struct?: LbAccessLogsOutputReference | LbAccessLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function lbAccessLogsToHclTerraform(struct?: LbAccessLogsOutputReference | LbAccessLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbAccessLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbAccessLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbAccessLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._enabled = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._enabled = value.enabled;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface LbSubnetMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#allocation_id Lb#allocation_id}
  */
  readonly allocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#ipv6_address Lb#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#private_ipv4_address Lb#private_ipv4_address}
  */
  readonly privateIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#subnet_id Lb#subnet_id}
  */
  readonly subnetId: string;
}

export function lbSubnetMappingToTerraform(struct?: LbSubnetMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_id: cdktf.stringToTerraform(struct!.allocationId),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    private_ipv4_address: cdktf.stringToTerraform(struct!.privateIpv4Address),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function lbSubnetMappingToHclTerraform(struct?: LbSubnetMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocation_id: {
      value: cdktf.stringToHclTerraform(struct!.allocationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbSubnetMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbSubnetMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationId = this._allocationId;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._privateIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpv4Address = this._privateIpv4Address;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbSubnetMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocationId = undefined;
      this._ipv6Address = undefined;
      this._privateIpv4Address = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocationId = value.allocationId;
      this._ipv6Address = value.ipv6Address;
      this._privateIpv4Address = value.privateIpv4Address;
      this._subnetId = value.subnetId;
    }
  }

  // allocation_id - computed: false, optional: true, required: false
  private _allocationId?: string; 
  public get allocationId() {
    return this.getStringAttribute('allocation_id');
  }
  public set allocationId(value: string) {
    this._allocationId = value;
  }
  public resetAllocationId() {
    this._allocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationIdInput() {
    return this._allocationId;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // outpost_id - computed: true, optional: false, required: false
  public get outpostId() {
    return this.getStringAttribute('outpost_id');
  }

  // private_ipv4_address - computed: false, optional: true, required: false
  private _privateIpv4Address?: string; 
  public get privateIpv4Address() {
    return this.getStringAttribute('private_ipv4_address');
  }
  public set privateIpv4Address(value: string) {
    this._privateIpv4Address = value;
  }
  public resetPrivateIpv4Address() {
    this._privateIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv4AddressInput() {
    return this._privateIpv4Address;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class LbSubnetMappingList extends cdktf.ComplexList {
  public internalValue? : LbSubnetMapping[] | cdktf.IResolvable

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
  public get(index: number): LbSubnetMappingOutputReference {
    return new LbSubnetMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#create Lb#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#delete Lb#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#update Lb#update}
  */
  readonly update?: string;
}

export function lbTimeoutsToTerraform(struct?: LbTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lbTimeoutsToHclTerraform(struct?: LbTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb aws_lb}
*/
export class Lb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lb to import
  * @param importFromId The id of the existing Lb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/lb aws_lb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lb',
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
    this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
    this._desyncMitigationMode = config.desyncMitigationMode;
    this._dropInvalidHeaderFields = config.dropInvalidHeaderFields;
    this._enableCrossZoneLoadBalancing = config.enableCrossZoneLoadBalancing;
    this._enableDeletionProtection = config.enableDeletionProtection;
    this._enableHttp2 = config.enableHttp2;
    this._enableTlsVersionAndCipherSuiteHeaders = config.enableTlsVersionAndCipherSuiteHeaders;
    this._enableWafFailOpen = config.enableWafFailOpen;
    this._enableXffClientPort = config.enableXffClientPort;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._internal = config.internal;
    this._ipAddressType = config.ipAddressType;
    this._loadBalancerType = config.loadBalancerType;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._preserveHostHeader = config.preserveHostHeader;
    this._securityGroups = config.securityGroups;
    this._subnets = config.subnets;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._xffHeaderProcessingMode = config.xffHeaderProcessingMode;
    this._accessLogs.internalValue = config.accessLogs;
    this._subnetMapping.internalValue = config.subnetMapping;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_suffix - computed: true, optional: false, required: false
  public get arnSuffix() {
    return this.getStringAttribute('arn_suffix');
  }

  // customer_owned_ipv4_pool - computed: false, optional: true, required: false
  private _customerOwnedIpv4Pool?: string; 
  public get customerOwnedIpv4Pool() {
    return this.getStringAttribute('customer_owned_ipv4_pool');
  }
  public set customerOwnedIpv4Pool(value: string) {
    this._customerOwnedIpv4Pool = value;
  }
  public resetCustomerOwnedIpv4Pool() {
    this._customerOwnedIpv4Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerOwnedIpv4PoolInput() {
    return this._customerOwnedIpv4Pool;
  }

  // desync_mitigation_mode - computed: false, optional: true, required: false
  private _desyncMitigationMode?: string; 
  public get desyncMitigationMode() {
    return this.getStringAttribute('desync_mitigation_mode');
  }
  public set desyncMitigationMode(value: string) {
    this._desyncMitigationMode = value;
  }
  public resetDesyncMitigationMode() {
    this._desyncMitigationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desyncMitigationModeInput() {
    return this._desyncMitigationMode;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // drop_invalid_header_fields - computed: false, optional: true, required: false
  private _dropInvalidHeaderFields?: boolean | cdktf.IResolvable; 
  public get dropInvalidHeaderFields() {
    return this.getBooleanAttribute('drop_invalid_header_fields');
  }
  public set dropInvalidHeaderFields(value: boolean | cdktf.IResolvable) {
    this._dropInvalidHeaderFields = value;
  }
  public resetDropInvalidHeaderFields() {
    this._dropInvalidHeaderFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInvalidHeaderFieldsInput() {
    return this._dropInvalidHeaderFields;
  }

  // enable_cross_zone_load_balancing - computed: false, optional: true, required: false
  private _enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable; 
  public get enableCrossZoneLoadBalancing() {
    return this.getBooleanAttribute('enable_cross_zone_load_balancing');
  }
  public set enableCrossZoneLoadBalancing(value: boolean | cdktf.IResolvable) {
    this._enableCrossZoneLoadBalancing = value;
  }
  public resetEnableCrossZoneLoadBalancing() {
    this._enableCrossZoneLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrossZoneLoadBalancingInput() {
    return this._enableCrossZoneLoadBalancing;
  }

  // enable_deletion_protection - computed: false, optional: true, required: false
  private _enableDeletionProtection?: boolean | cdktf.IResolvable; 
  public get enableDeletionProtection() {
    return this.getBooleanAttribute('enable_deletion_protection');
  }
  public set enableDeletionProtection(value: boolean | cdktf.IResolvable) {
    this._enableDeletionProtection = value;
  }
  public resetEnableDeletionProtection() {
    this._enableDeletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeletionProtectionInput() {
    return this._enableDeletionProtection;
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }

  // enable_tls_version_and_cipher_suite_headers - computed: false, optional: true, required: false
  private _enableTlsVersionAndCipherSuiteHeaders?: boolean | cdktf.IResolvable; 
  public get enableTlsVersionAndCipherSuiteHeaders() {
    return this.getBooleanAttribute('enable_tls_version_and_cipher_suite_headers');
  }
  public set enableTlsVersionAndCipherSuiteHeaders(value: boolean | cdktf.IResolvable) {
    this._enableTlsVersionAndCipherSuiteHeaders = value;
  }
  public resetEnableTlsVersionAndCipherSuiteHeaders() {
    this._enableTlsVersionAndCipherSuiteHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsVersionAndCipherSuiteHeadersInput() {
    return this._enableTlsVersionAndCipherSuiteHeaders;
  }

  // enable_waf_fail_open - computed: false, optional: true, required: false
  private _enableWafFailOpen?: boolean | cdktf.IResolvable; 
  public get enableWafFailOpen() {
    return this.getBooleanAttribute('enable_waf_fail_open');
  }
  public set enableWafFailOpen(value: boolean | cdktf.IResolvable) {
    this._enableWafFailOpen = value;
  }
  public resetEnableWafFailOpen() {
    this._enableWafFailOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWafFailOpenInput() {
    return this._enableWafFailOpen;
  }

  // enable_xff_client_port - computed: false, optional: true, required: false
  private _enableXffClientPort?: boolean | cdktf.IResolvable; 
  public get enableXffClientPort() {
    return this.getBooleanAttribute('enable_xff_client_port');
  }
  public set enableXffClientPort(value: boolean | cdktf.IResolvable) {
    this._enableXffClientPort = value;
  }
  public resetEnableXffClientPort() {
    this._enableXffClientPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableXffClientPortInput() {
    return this._enableXffClientPort;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // preserve_host_header - computed: false, optional: true, required: false
  private _preserveHostHeader?: boolean | cdktf.IResolvable; 
  public get preserveHostHeader() {
    return this.getBooleanAttribute('preserve_host_header');
  }
  public set preserveHostHeader(value: boolean | cdktf.IResolvable) {
    this._preserveHostHeader = value;
  }
  public resetPreserveHostHeader() {
    this._preserveHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveHostHeaderInput() {
    return this._preserveHostHeader;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // xff_header_processing_mode - computed: false, optional: true, required: false
  private _xffHeaderProcessingMode?: string; 
  public get xffHeaderProcessingMode() {
    return this.getStringAttribute('xff_header_processing_mode');
  }
  public set xffHeaderProcessingMode(value: string) {
    this._xffHeaderProcessingMode = value;
  }
  public resetXffHeaderProcessingMode() {
    this._xffHeaderProcessingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffHeaderProcessingModeInput() {
    return this._xffHeaderProcessingMode;
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // access_logs - computed: false, optional: true, required: false
  private _accessLogs = new LbAccessLogsOutputReference(this, "access_logs");
  public get accessLogs() {
    return this._accessLogs;
  }
  public putAccessLogs(value: LbAccessLogs) {
    this._accessLogs.internalValue = value;
  }
  public resetAccessLogs() {
    this._accessLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogsInput() {
    return this._accessLogs.internalValue;
  }

  // subnet_mapping - computed: false, optional: true, required: false
  private _subnetMapping = new LbSubnetMappingList(this, "subnet_mapping", true);
  public get subnetMapping() {
    return this._subnetMapping;
  }
  public putSubnetMapping(value: LbSubnetMapping[] | cdktf.IResolvable) {
    this._subnetMapping.internalValue = value;
  }
  public resetSubnetMapping() {
    this._subnetMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMappingInput() {
    return this._subnetMapping.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
      desync_mitigation_mode: cdktf.stringToTerraform(this._desyncMitigationMode),
      drop_invalid_header_fields: cdktf.booleanToTerraform(this._dropInvalidHeaderFields),
      enable_cross_zone_load_balancing: cdktf.booleanToTerraform(this._enableCrossZoneLoadBalancing),
      enable_deletion_protection: cdktf.booleanToTerraform(this._enableDeletionProtection),
      enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
      enable_tls_version_and_cipher_suite_headers: cdktf.booleanToTerraform(this._enableTlsVersionAndCipherSuiteHeaders),
      enable_waf_fail_open: cdktf.booleanToTerraform(this._enableWafFailOpen),
      enable_xff_client_port: cdktf.booleanToTerraform(this._enableXffClientPort),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      internal: cdktf.booleanToTerraform(this._internal),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      preserve_host_header: cdktf.booleanToTerraform(this._preserveHostHeader),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      xff_header_processing_mode: cdktf.stringToTerraform(this._xffHeaderProcessingMode),
      access_logs: lbAccessLogsToTerraform(this._accessLogs.internalValue),
      subnet_mapping: cdktf.listMapper(lbSubnetMappingToTerraform, true)(this._subnetMapping.internalValue),
      timeouts: lbTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_owned_ipv4_pool: {
        value: cdktf.stringToHclTerraform(this._customerOwnedIpv4Pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desync_mitigation_mode: {
        value: cdktf.stringToHclTerraform(this._desyncMitigationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_invalid_header_fields: {
        value: cdktf.booleanToHclTerraform(this._dropInvalidHeaderFields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_cross_zone_load_balancing: {
        value: cdktf.booleanToHclTerraform(this._enableCrossZoneLoadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._enableDeletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_http2: {
        value: cdktf.booleanToHclTerraform(this._enableHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tls_version_and_cipher_suite_headers: {
        value: cdktf.booleanToHclTerraform(this._enableTlsVersionAndCipherSuiteHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_waf_fail_open: {
        value: cdktf.booleanToHclTerraform(this._enableWafFailOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_xff_client_port: {
        value: cdktf.booleanToHclTerraform(this._enableXffClientPort),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internal: {
        value: cdktf.booleanToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_address_type: {
        value: cdktf.stringToHclTerraform(this._ipAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_type: {
        value: cdktf.stringToHclTerraform(this._loadBalancerType),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_host_header: {
        value: cdktf.booleanToHclTerraform(this._preserveHostHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
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
      xff_header_processing_mode: {
        value: cdktf.stringToHclTerraform(this._xffHeaderProcessingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_logs: {
        value: lbAccessLogsToHclTerraform(this._accessLogs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbAccessLogsList",
      },
      subnet_mapping: {
        value: cdktf.listMapperHcl(lbSubnetMappingToHclTerraform, true)(this._subnetMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbSubnetMappingList",
      },
      timeouts: {
        value: lbTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
