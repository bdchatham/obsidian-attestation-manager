// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2WebAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}
  */
  readonly tokenDomains?: string[];
  /**
  * captcha_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}
  */
  readonly captchaConfig?: Wafv2WebAclCaptchaConfig;
  /**
  * custom_response_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_response_body Wafv2WebAcl#custom_response_body}
  */
  readonly customResponseBody?: Wafv2WebAclCustomResponseBody[] | cdktf.IResolvable;
  /**
  * default_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#default_action Wafv2WebAcl#default_action}
  */
  readonly defaultAction: Wafv2WebAclDefaultAction;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#rule Wafv2WebAcl#rule}
  */
  readonly rule?: Wafv2WebAclRule[] | cdktf.IResolvable;
  /**
  * visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}
  */
  readonly visibilityConfig: Wafv2WebAclVisibilityConfig;
}
export interface Wafv2WebAclCaptchaConfigImmunityTimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}
  */
  readonly immunityTime?: number;
}

export function wafv2WebAclCaptchaConfigImmunityTimePropertyToTerraform(struct?: Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference | Wafv2WebAclCaptchaConfigImmunityTimeProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immunity_time: cdktf.numberToTerraform(struct!.immunityTime),
  }
}


export function wafv2WebAclCaptchaConfigImmunityTimePropertyToHclTerraform(struct?: Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference | Wafv2WebAclCaptchaConfigImmunityTimeProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immunity_time: {
      value: cdktf.numberToHclTerraform(struct!.immunityTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclCaptchaConfigImmunityTimeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTime = this._immunityTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclCaptchaConfigImmunityTimeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTime = value.immunityTime;
    }
  }

  // immunity_time - computed: false, optional: true, required: false
  private _immunityTime?: number; 
  public get immunityTime() {
    return this.getNumberAttribute('immunity_time');
  }
  public set immunityTime(value: number) {
    this._immunityTime = value;
  }
  public resetImmunityTime() {
    this._immunityTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimeInput() {
    return this._immunityTime;
  }
}
export interface Wafv2WebAclCaptchaConfig {
  /**
  * immunity_time_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}
  */
  readonly immunityTimeProperty?: Wafv2WebAclCaptchaConfigImmunityTimeProperty;
}

export function wafv2WebAclCaptchaConfigToTerraform(struct?: Wafv2WebAclCaptchaConfigOutputReference | Wafv2WebAclCaptchaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immunity_time_property: wafv2WebAclCaptchaConfigImmunityTimePropertyToTerraform(struct!.immunityTimeProperty),
  }
}


export function wafv2WebAclCaptchaConfigToHclTerraform(struct?: Wafv2WebAclCaptchaConfigOutputReference | Wafv2WebAclCaptchaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immunity_time_property: {
      value: wafv2WebAclCaptchaConfigImmunityTimePropertyToHclTerraform(struct!.immunityTimeProperty),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclCaptchaConfigImmunityTimePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclCaptchaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclCaptchaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTimeProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTimeProperty = this._immunityTimeProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclCaptchaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTimeProperty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTimeProperty.internalValue = value.immunityTimeProperty;
    }
  }

  // immunity_time_property - computed: false, optional: true, required: false
  private _immunityTimeProperty = new Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference(this, "immunity_time_property");
  public get immunityTimeProperty() {
    return this._immunityTimeProperty;
  }
  public putImmunityTimeProperty(value: Wafv2WebAclCaptchaConfigImmunityTimeProperty) {
    this._immunityTimeProperty.internalValue = value;
  }
  public resetImmunityTimeProperty() {
    this._immunityTimeProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimePropertyInput() {
    return this._immunityTimeProperty.internalValue;
  }
}
export interface Wafv2WebAclCustomResponseBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#content Wafv2WebAcl#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#content_type Wafv2WebAcl#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#key Wafv2WebAcl#key}
  */
  readonly key: string;
}

export function wafv2WebAclCustomResponseBodyToTerraform(struct?: Wafv2WebAclCustomResponseBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function wafv2WebAclCustomResponseBodyToHclTerraform(struct?: Wafv2WebAclCustomResponseBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclCustomResponseBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclCustomResponseBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclCustomResponseBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
      this._key = value.key;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class Wafv2WebAclCustomResponseBodyList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclCustomResponseBody[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclCustomResponseBodyOutputReference {
    return new Wafv2WebAclCustomResponseBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
  */
  readonly value: string;
}

export function wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclDefaultActionAllowCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
  */
  readonly insertHeader: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}

export function wafv2WebAclDefaultActionAllowCustomRequestHandlingToTerraform(struct?: Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference | Wafv2WebAclDefaultActionAllowCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_header: cdktf.listMapper(wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclDefaultActionAllowCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference | Wafv2WebAclDefaultActionAllowCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_header: {
      value: cdktf.listMapperHcl(wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclDefaultActionAllowCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclDefaultActionAllowCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface Wafv2WebAclDefaultActionAllow {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclDefaultActionAllowCustomRequestHandling;
}

export function wafv2WebAclDefaultActionAllowToTerraform(struct?: Wafv2WebAclDefaultActionAllowOutputReference | Wafv2WebAclDefaultActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_handling: wafv2WebAclDefaultActionAllowCustomRequestHandlingToTerraform(struct!.customRequestHandling),
  }
}


export function wafv2WebAclDefaultActionAllowToHclTerraform(struct?: Wafv2WebAclDefaultActionAllowOutputReference | Wafv2WebAclDefaultActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_handling: {
      value: wafv2WebAclDefaultActionAllowCustomRequestHandlingToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclDefaultActionAllowCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclDefaultActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclDefaultActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclDefaultActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclDefaultActionAllowCustomRequestHandling) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
  */
  readonly value: string;
}

export function wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderToTerraform(struct?: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderToHclTerraform(struct?: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference {
    return new Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclDefaultActionBlockCustomResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}
  */
  readonly customResponseBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}
  */
  readonly responseCode: number;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}
  */
  readonly responseHeader?: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
}

export function wafv2WebAclDefaultActionBlockCustomResponseToTerraform(struct?: Wafv2WebAclDefaultActionBlockCustomResponseOutputReference | Wafv2WebAclDefaultActionBlockCustomResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_response_body_key: cdktf.stringToTerraform(struct!.customResponseBodyKey),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    response_header: cdktf.listMapper(wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderToTerraform, true)(struct!.responseHeader),
  }
}


export function wafv2WebAclDefaultActionBlockCustomResponseToHclTerraform(struct?: Wafv2WebAclDefaultActionBlockCustomResponseOutputReference | Wafv2WebAclDefaultActionBlockCustomResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_response_body_key: {
      value: cdktf.stringToHclTerraform(struct!.customResponseBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_header: {
      value: cdktf.listMapperHcl(wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclDefaultActionBlockCustomResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclDefaultActionBlockCustomResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponseBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclDefaultActionBlockCustomResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponseBodyKey = undefined;
      this._responseCode = undefined;
      this._responseHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponseBodyKey = value.customResponseBodyKey;
      this._responseCode = value.responseCode;
      this._responseHeader.internalValue = value.responseHeader;
    }
  }

  // custom_response_body_key - computed: false, optional: true, required: false
  private _customResponseBodyKey?: string; 
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }
  public set customResponseBodyKey(value: string) {
    this._customResponseBodyKey = value;
  }
  public resetCustomResponseBodyKey() {
    this._customResponseBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyKeyInput() {
    return this._customResponseBodyKey;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList(this, "response_header", true);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }
}
export interface Wafv2WebAclDefaultActionBlock {
  /**
  * custom_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}
  */
  readonly customResponse?: Wafv2WebAclDefaultActionBlockCustomResponse;
}

export function wafv2WebAclDefaultActionBlockToTerraform(struct?: Wafv2WebAclDefaultActionBlockOutputReference | Wafv2WebAclDefaultActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_response: wafv2WebAclDefaultActionBlockCustomResponseToTerraform(struct!.customResponse),
  }
}


export function wafv2WebAclDefaultActionBlockToHclTerraform(struct?: Wafv2WebAclDefaultActionBlockOutputReference | Wafv2WebAclDefaultActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_response: {
      value: wafv2WebAclDefaultActionBlockCustomResponseToHclTerraform(struct!.customResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclDefaultActionBlockCustomResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclDefaultActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclDefaultActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponse = this._customResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclDefaultActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponse.internalValue = value.customResponse;
    }
  }

  // custom_response - computed: false, optional: true, required: false
  private _customResponse = new Wafv2WebAclDefaultActionBlockCustomResponseOutputReference(this, "custom_response");
  public get customResponse() {
    return this._customResponse;
  }
  public putCustomResponse(value: Wafv2WebAclDefaultActionBlockCustomResponse) {
    this._customResponse.internalValue = value;
  }
  public resetCustomResponse() {
    this._customResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseInput() {
    return this._customResponse.internalValue;
  }
}
export interface Wafv2WebAclDefaultAction {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}
  */
  readonly allow?: Wafv2WebAclDefaultActionAllow;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}
  */
  readonly block?: Wafv2WebAclDefaultActionBlock;
}

export function wafv2WebAclDefaultActionToTerraform(struct?: Wafv2WebAclDefaultActionOutputReference | Wafv2WebAclDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: wafv2WebAclDefaultActionAllowToTerraform(struct!.allow),
    block: wafv2WebAclDefaultActionBlockToTerraform(struct!.block),
  }
}


export function wafv2WebAclDefaultActionToHclTerraform(struct?: Wafv2WebAclDefaultActionOutputReference | Wafv2WebAclDefaultAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: wafv2WebAclDefaultActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclDefaultActionAllowList",
    },
    block: {
      value: wafv2WebAclDefaultActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclDefaultActionBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclDefaultActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclDefaultAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclDefaultAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new Wafv2WebAclDefaultActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: Wafv2WebAclDefaultActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new Wafv2WebAclDefaultActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: Wafv2WebAclDefaultActionBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }
}
export interface Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleActionAllowCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
  */
  readonly insertHeader: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleActionAllowCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionAllowCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_header: cdktf.listMapper(wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleActionAllowCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionAllowCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_header: {
      value: cdktf.listMapperHcl(wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionAllowCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionAllowCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface Wafv2WebAclRuleActionAllow {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleActionAllowCustomRequestHandling;
}

export function wafv2WebAclRuleActionAllowToTerraform(struct?: Wafv2WebAclRuleActionAllowOutputReference | Wafv2WebAclRuleActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_handling: wafv2WebAclRuleActionAllowCustomRequestHandlingToTerraform(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleActionAllowToHclTerraform(struct?: Wafv2WebAclRuleActionAllowOutputReference | Wafv2WebAclRuleActionAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_handling: {
      value: wafv2WebAclRuleActionAllowCustomRequestHandlingToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionAllowCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleActionAllowCustomRequestHandling) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface Wafv2WebAclRuleActionBlockCustomResponseResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleActionBlockCustomResponseResponseHeaderToTerraform(struct?: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleActionBlockCustomResponseResponseHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference {
    return new Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleActionBlockCustomResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}
  */
  readonly customResponseBodyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}
  */
  readonly responseCode: number;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}
  */
  readonly responseHeader?: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleActionBlockCustomResponseToTerraform(struct?: Wafv2WebAclRuleActionBlockCustomResponseOutputReference | Wafv2WebAclRuleActionBlockCustomResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_response_body_key: cdktf.stringToTerraform(struct!.customResponseBodyKey),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    response_header: cdktf.listMapper(wafv2WebAclRuleActionBlockCustomResponseResponseHeaderToTerraform, true)(struct!.responseHeader),
  }
}


export function wafv2WebAclRuleActionBlockCustomResponseToHclTerraform(struct?: Wafv2WebAclRuleActionBlockCustomResponseOutputReference | Wafv2WebAclRuleActionBlockCustomResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_response_body_key: {
      value: cdktf.stringToHclTerraform(struct!.customResponseBodyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_header: {
      value: cdktf.listMapperHcl(wafv2WebAclRuleActionBlockCustomResponseResponseHeaderToHclTerraform, true)(struct!.responseHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionBlockCustomResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionBlockCustomResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponseBodyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponseBodyKey = this._customResponseBodyKey;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeader = this._responseHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionBlockCustomResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponseBodyKey = undefined;
      this._responseCode = undefined;
      this._responseHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponseBodyKey = value.customResponseBodyKey;
      this._responseCode = value.responseCode;
      this._responseHeader.internalValue = value.responseHeader;
    }
  }

  // custom_response_body_key - computed: false, optional: true, required: false
  private _customResponseBodyKey?: string; 
  public get customResponseBodyKey() {
    return this.getStringAttribute('custom_response_body_key');
  }
  public set customResponseBodyKey(value: string) {
    this._customResponseBodyKey = value;
  }
  public resetCustomResponseBodyKey() {
    this._customResponseBodyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyKeyInput() {
    return this._customResponseBodyKey;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList(this, "response_header", true);
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }
}
export interface Wafv2WebAclRuleActionBlock {
  /**
  * custom_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}
  */
  readonly customResponse?: Wafv2WebAclRuleActionBlockCustomResponse;
}

export function wafv2WebAclRuleActionBlockToTerraform(struct?: Wafv2WebAclRuleActionBlockOutputReference | Wafv2WebAclRuleActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_response: wafv2WebAclRuleActionBlockCustomResponseToTerraform(struct!.customResponse),
  }
}


export function wafv2WebAclRuleActionBlockToHclTerraform(struct?: Wafv2WebAclRuleActionBlockOutputReference | Wafv2WebAclRuleActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_response: {
      value: wafv2WebAclRuleActionBlockCustomResponseToHclTerraform(struct!.customResponse),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionBlockCustomResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customResponse = this._customResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customResponse.internalValue = value.customResponse;
    }
  }

  // custom_response - computed: false, optional: true, required: false
  private _customResponse = new Wafv2WebAclRuleActionBlockCustomResponseOutputReference(this, "custom_response");
  public get customResponse() {
    return this._customResponse;
  }
  public putCustomResponse(value: Wafv2WebAclRuleActionBlockCustomResponse) {
    this._customResponse.internalValue = value;
  }
  public resetCustomResponse() {
    this._customResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseInput() {
    return this._customResponse.internalValue;
  }
}
export interface Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleActionCaptchaCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
  */
  readonly insertHeader: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleActionCaptchaCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionCaptchaCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_header: cdktf.listMapper(wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleActionCaptchaCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionCaptchaCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_header: {
      value: cdktf.listMapperHcl(wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionCaptchaCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionCaptchaCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface Wafv2WebAclRuleActionCaptcha {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleActionCaptchaCustomRequestHandling;
}

export function wafv2WebAclRuleActionCaptchaToTerraform(struct?: Wafv2WebAclRuleActionCaptchaOutputReference | Wafv2WebAclRuleActionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_handling: wafv2WebAclRuleActionCaptchaCustomRequestHandlingToTerraform(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleActionCaptchaToHclTerraform(struct?: Wafv2WebAclRuleActionCaptchaOutputReference | Wafv2WebAclRuleActionCaptcha): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_handling: {
      value: wafv2WebAclRuleActionCaptchaCustomRequestHandlingToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionCaptchaCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionCaptchaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionCaptcha | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionCaptcha | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleActionCaptchaCustomRequestHandling) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleActionChallengeCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
  */
  readonly insertHeader: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleActionChallengeCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionChallengeCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_header: cdktf.listMapper(wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleActionChallengeCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionChallengeCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_header: {
      value: cdktf.listMapperHcl(wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionChallengeCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionChallengeCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface Wafv2WebAclRuleActionChallenge {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleActionChallengeCustomRequestHandling;
}

export function wafv2WebAclRuleActionChallengeToTerraform(struct?: Wafv2WebAclRuleActionChallengeOutputReference | Wafv2WebAclRuleActionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_handling: wafv2WebAclRuleActionChallengeCustomRequestHandlingToTerraform(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleActionChallengeToHclTerraform(struct?: Wafv2WebAclRuleActionChallengeOutputReference | Wafv2WebAclRuleActionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_handling: {
      value: wafv2WebAclRuleActionChallengeCustomRequestHandlingToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionChallengeCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleActionChallengeCustomRequestHandling) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
  */
  readonly value: string;
}

export function wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference {
    return new Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleActionCountCustomRequestHandling {
  /**
  * insert_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
  */
  readonly insertHeader: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleActionCountCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionCountCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_header: cdktf.listMapper(wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderToTerraform, true)(struct!.insertHeader),
  }
}


export function wafv2WebAclRuleActionCountCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionCountCustomRequestHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_header: {
      value: cdktf.listMapperHcl(wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderToHclTerraform, true)(struct!.insertHeader),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionCountCustomRequestHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeader = this._insertHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionCountCustomRequestHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertHeader.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertHeader.internalValue = value.insertHeader;
    }
  }

  // insert_header - computed: false, optional: false, required: true
  private _insertHeader = new Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList(this, "insert_header", true);
  public get insertHeader() {
    return this._insertHeader;
  }
  public putInsertHeader(value: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable) {
    this._insertHeader.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderInput() {
    return this._insertHeader.internalValue;
  }
}
export interface Wafv2WebAclRuleActionCount {
  /**
  * custom_request_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
  */
  readonly customRequestHandling?: Wafv2WebAclRuleActionCountCustomRequestHandling;
}

export function wafv2WebAclRuleActionCountToTerraform(struct?: Wafv2WebAclRuleActionCountOutputReference | Wafv2WebAclRuleActionCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_request_handling: wafv2WebAclRuleActionCountCustomRequestHandlingToTerraform(struct!.customRequestHandling),
  }
}


export function wafv2WebAclRuleActionCountToHclTerraform(struct?: Wafv2WebAclRuleActionCountOutputReference | Wafv2WebAclRuleActionCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_request_handling: {
      value: wafv2WebAclRuleActionCountCustomRequestHandlingToHclTerraform(struct!.customRequestHandling),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionCountCustomRequestHandlingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleActionCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRequestHandling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestHandling = this._customRequestHandling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleActionCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRequestHandling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRequestHandling.internalValue = value.customRequestHandling;
    }
  }

  // custom_request_handling - computed: false, optional: true, required: false
  private _customRequestHandling = new Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference(this, "custom_request_handling");
  public get customRequestHandling() {
    return this._customRequestHandling;
  }
  public putCustomRequestHandling(value: Wafv2WebAclRuleActionCountCustomRequestHandling) {
    this._customRequestHandling.internalValue = value;
  }
  public resetCustomRequestHandling() {
    this._customRequestHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestHandlingInput() {
    return this._customRequestHandling.internalValue;
  }
}
export interface Wafv2WebAclRuleAction {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}
  */
  readonly allow?: Wafv2WebAclRuleActionAllow;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}
  */
  readonly block?: Wafv2WebAclRuleActionBlock;
  /**
  * captcha block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#captcha Wafv2WebAcl#captcha}
  */
  readonly captcha?: Wafv2WebAclRuleActionCaptcha;
  /**
  * challenge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#challenge Wafv2WebAcl#challenge}
  */
  readonly challenge?: Wafv2WebAclRuleActionChallenge;
  /**
  * count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}
  */
  readonly count?: Wafv2WebAclRuleActionCount;
}

export function wafv2WebAclRuleActionToTerraform(struct?: Wafv2WebAclRuleActionOutputReference | Wafv2WebAclRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: wafv2WebAclRuleActionAllowToTerraform(struct!.allow),
    block: wafv2WebAclRuleActionBlockToTerraform(struct!.block),
    captcha: wafv2WebAclRuleActionCaptchaToTerraform(struct!.captcha),
    challenge: wafv2WebAclRuleActionChallengeToTerraform(struct!.challenge),
    count: wafv2WebAclRuleActionCountToTerraform(struct!.count),
  }
}


export function wafv2WebAclRuleActionToHclTerraform(struct?: Wafv2WebAclRuleActionOutputReference | Wafv2WebAclRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: wafv2WebAclRuleActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionAllowList",
    },
    block: {
      value: wafv2WebAclRuleActionBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionBlockList",
    },
    captcha: {
      value: wafv2WebAclRuleActionCaptchaToHclTerraform(struct!.captcha),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionCaptchaList",
    },
    challenge: {
      value: wafv2WebAclRuleActionChallengeToHclTerraform(struct!.challenge),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionChallengeList",
    },
    count: {
      value: wafv2WebAclRuleActionCountToHclTerraform(struct!.count),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionCountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._captcha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captcha = this._captcha?.internalValue;
    }
    if (this._challenge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge?.internalValue;
    }
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
      this._block.internalValue = undefined;
      this._captcha.internalValue = undefined;
      this._challenge.internalValue = undefined;
      this._count.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
      this._block.internalValue = value.block;
      this._captcha.internalValue = value.captcha;
      this._challenge.internalValue = value.challenge;
      this._count.internalValue = value.count;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new Wafv2WebAclRuleActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: Wafv2WebAclRuleActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // block - computed: false, optional: true, required: false
  private _block = new Wafv2WebAclRuleActionBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: Wafv2WebAclRuleActionBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // captcha - computed: false, optional: true, required: false
  private _captcha = new Wafv2WebAclRuleActionCaptchaOutputReference(this, "captcha");
  public get captcha() {
    return this._captcha;
  }
  public putCaptcha(value: Wafv2WebAclRuleActionCaptcha) {
    this._captcha.internalValue = value;
  }
  public resetCaptcha() {
    this._captcha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaInput() {
    return this._captcha.internalValue;
  }

  // challenge - computed: false, optional: true, required: false
  private _challenge = new Wafv2WebAclRuleActionChallengeOutputReference(this, "challenge");
  public get challenge() {
    return this._challenge;
  }
  public putChallenge(value: Wafv2WebAclRuleActionChallenge) {
    this._challenge.internalValue = value;
  }
  public resetChallenge() {
    this._challenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge.internalValue;
  }

  // count - computed: false, optional: true, required: false
  private _count = new Wafv2WebAclRuleActionCountOutputReference(this, "count");
  public get count() {
    return this._count;
  }
  public putCount(value: Wafv2WebAclRuleActionCount) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }
}
export interface Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}
  */
  readonly immunityTime?: number;
}

export function wafv2WebAclRuleCaptchaConfigImmunityTimePropertyToTerraform(struct?: Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference | Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immunity_time: cdktf.numberToTerraform(struct!.immunityTime),
  }
}


export function wafv2WebAclRuleCaptchaConfigImmunityTimePropertyToHclTerraform(struct?: Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference | Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immunity_time: {
      value: cdktf.numberToHclTerraform(struct!.immunityTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTime = this._immunityTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTime = value.immunityTime;
    }
  }

  // immunity_time - computed: false, optional: true, required: false
  private _immunityTime?: number; 
  public get immunityTime() {
    return this.getNumberAttribute('immunity_time');
  }
  public set immunityTime(value: number) {
    this._immunityTime = value;
  }
  public resetImmunityTime() {
    this._immunityTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimeInput() {
    return this._immunityTime;
  }
}
export interface Wafv2WebAclRuleCaptchaConfig {
  /**
  * immunity_time_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}
  */
  readonly immunityTimeProperty?: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty;
}

export function wafv2WebAclRuleCaptchaConfigToTerraform(struct?: Wafv2WebAclRuleCaptchaConfigOutputReference | Wafv2WebAclRuleCaptchaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immunity_time_property: wafv2WebAclRuleCaptchaConfigImmunityTimePropertyToTerraform(struct!.immunityTimeProperty),
  }
}


export function wafv2WebAclRuleCaptchaConfigToHclTerraform(struct?: Wafv2WebAclRuleCaptchaConfigOutputReference | Wafv2WebAclRuleCaptchaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immunity_time_property: {
      value: wafv2WebAclRuleCaptchaConfigImmunityTimePropertyToHclTerraform(struct!.immunityTimeProperty),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleCaptchaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleCaptchaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immunityTimeProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.immunityTimeProperty = this._immunityTimeProperty?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleCaptchaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immunityTimeProperty.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immunityTimeProperty.internalValue = value.immunityTimeProperty;
    }
  }

  // immunity_time_property - computed: false, optional: true, required: false
  private _immunityTimeProperty = new Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference(this, "immunity_time_property");
  public get immunityTimeProperty() {
    return this._immunityTimeProperty;
  }
  public putImmunityTimeProperty(value: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty) {
    this._immunityTimeProperty.internalValue = value;
  }
  public resetImmunityTimeProperty() {
    this._immunityTimeProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immunityTimePropertyInput() {
    return this._immunityTimeProperty.internalValue;
  }
}
export interface Wafv2WebAclRuleOverrideActionCount {
}

export function wafv2WebAclRuleOverrideActionCountToTerraform(struct?: Wafv2WebAclRuleOverrideActionCountOutputReference | Wafv2WebAclRuleOverrideActionCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wafv2WebAclRuleOverrideActionCountToHclTerraform(struct?: Wafv2WebAclRuleOverrideActionCountOutputReference | Wafv2WebAclRuleOverrideActionCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleOverrideActionCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleOverrideActionCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleOverrideActionCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleOverrideActionNone {
}

export function wafv2WebAclRuleOverrideActionNoneToTerraform(struct?: Wafv2WebAclRuleOverrideActionNoneOutputReference | Wafv2WebAclRuleOverrideActionNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wafv2WebAclRuleOverrideActionNoneToHclTerraform(struct?: Wafv2WebAclRuleOverrideActionNoneOutputReference | Wafv2WebAclRuleOverrideActionNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleOverrideActionNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleOverrideActionNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleOverrideActionNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleOverrideAction {
  /**
  * count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}
  */
  readonly count?: Wafv2WebAclRuleOverrideActionCount;
  /**
  * none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#none Wafv2WebAcl#none}
  */
  readonly none?: Wafv2WebAclRuleOverrideActionNone;
}

export function wafv2WebAclRuleOverrideActionToTerraform(struct?: Wafv2WebAclRuleOverrideActionOutputReference | Wafv2WebAclRuleOverrideAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: wafv2WebAclRuleOverrideActionCountToTerraform(struct!.count),
    none: wafv2WebAclRuleOverrideActionNoneToTerraform(struct!.none),
  }
}


export function wafv2WebAclRuleOverrideActionToHclTerraform(struct?: Wafv2WebAclRuleOverrideActionOutputReference | Wafv2WebAclRuleOverrideAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: wafv2WebAclRuleOverrideActionCountToHclTerraform(struct!.count),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleOverrideActionCountList",
    },
    none: {
      value: wafv2WebAclRuleOverrideActionNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleOverrideActionNoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleOverrideActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleOverrideAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleOverrideAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count.internalValue = undefined;
      this._none.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count.internalValue = value.count;
      this._none.internalValue = value.none;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count = new Wafv2WebAclRuleOverrideActionCountOutputReference(this, "count");
  public get count() {
    return this._count;
  }
  public putCount(value: Wafv2WebAclRuleOverrideActionCount) {
    this._count.internalValue = value;
  }
  public resetCount() {
    this._count.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new Wafv2WebAclRuleOverrideActionNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: Wafv2WebAclRuleOverrideActionNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }
}
export interface Wafv2WebAclRuleRuleLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleRuleLabelToTerraform(struct?: Wafv2WebAclRuleRuleLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclRuleRuleLabelToHclTerraform(struct?: Wafv2WebAclRuleRuleLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class Wafv2WebAclRuleRuleLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleRuleLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleRuleLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class Wafv2WebAclRuleRuleLabelList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleRuleLabelOutputReference {
    return new Wafv2WebAclRuleRuleLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleVisibilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}

export function wafv2WebAclRuleVisibilityConfigToTerraform(struct?: Wafv2WebAclRuleVisibilityConfigOutputReference | Wafv2WebAclRuleVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}


export function wafv2WebAclRuleVisibilityConfigToHclTerraform(struct?: Wafv2WebAclRuleVisibilityConfigOutputReference | Wafv2WebAclRuleVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampled_requests_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sampledRequestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleVisibilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleVisibilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleVisibilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}
export interface Wafv2WebAclRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#action Wafv2WebAcl#action}
  */
  readonly action?: Wafv2WebAclRuleAction;
  /**
  * captcha_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}
  */
  readonly captchaConfig?: Wafv2WebAclRuleCaptchaConfig;
  /**
  * override_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#override_action Wafv2WebAcl#override_action}
  */
  readonly overrideAction?: Wafv2WebAclRuleOverrideAction;
  /**
  * rule_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#rule_label Wafv2WebAcl#rule_label}
  */
  readonly ruleLabel?: Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#statement Wafv2WebAcl#statement}
  */
  readonly statement?: any;
  /**
  * visibility_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}
  */
  readonly visibilityConfig: Wafv2WebAclRuleVisibilityConfig;
}

export function wafv2WebAclRuleToTerraform(struct?: Wafv2WebAclRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: wafv2WebAclRuleActionToTerraform(struct!.action),
    captcha_config: wafv2WebAclRuleCaptchaConfigToTerraform(struct!.captchaConfig),
    override_action: wafv2WebAclRuleOverrideActionToTerraform(struct!.overrideAction),
    rule_label: cdktf.listMapper(wafv2WebAclRuleRuleLabelToTerraform, true)(struct!.ruleLabel),
    statement: cdktf.anyToTerraform(struct!.statement),
    visibility_config: wafv2WebAclRuleVisibilityConfigToTerraform(struct!.visibilityConfig),
  }
}


export function wafv2WebAclRuleToHclTerraform(struct?: Wafv2WebAclRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: wafv2WebAclRuleActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleActionList",
    },
    captcha_config: {
      value: wafv2WebAclRuleCaptchaConfigToHclTerraform(struct!.captchaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleCaptchaConfigList",
    },
    override_action: {
      value: wafv2WebAclRuleOverrideActionToHclTerraform(struct!.overrideAction),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleOverrideActionList",
    },
    rule_label: {
      value: cdktf.listMapperHcl(wafv2WebAclRuleRuleLabelToHclTerraform, true)(struct!.ruleLabel),
      isBlock: true,
      type: "set",
      storageClassType: "Wafv2WebAclRuleRuleLabelList",
    },
    statement: {
      value: cdktf.anyToHclTerraform(struct!.statement),
      isBlock: false,
      type: "simple",
      storageClassType: "any",
    },
    visibility_config: {
      value: wafv2WebAclRuleVisibilityConfigToHclTerraform(struct!.visibilityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleVisibilityConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._captchaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaConfig = this._captchaConfig?.internalValue;
    }
    if (this._overrideAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideAction = this._overrideAction?.internalValue;
    }
    if (this._ruleLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleLabel = this._ruleLabel?.internalValue;
    }
    if (this._statement !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement;
    }
    if (this._visibilityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityConfig = this._visibilityConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._action.internalValue = undefined;
      this._captchaConfig.internalValue = undefined;
      this._overrideAction.internalValue = undefined;
      this._ruleLabel.internalValue = undefined;
      this._statement = undefined;
      this._visibilityConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
      this._action.internalValue = value.action;
      this._captchaConfig.internalValue = value.captchaConfig;
      this._overrideAction.internalValue = value.overrideAction;
      this._ruleLabel.internalValue = value.ruleLabel;
      this._statement = value.statement;
      this._visibilityConfig.internalValue = value.visibilityConfig;
    }
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // action - computed: false, optional: true, required: false
  private _action = new Wafv2WebAclRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: Wafv2WebAclRuleAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // captcha_config - computed: false, optional: true, required: false
  private _captchaConfig = new Wafv2WebAclRuleCaptchaConfigOutputReference(this, "captcha_config");
  public get captchaConfig() {
    return this._captchaConfig;
  }
  public putCaptchaConfig(value: Wafv2WebAclRuleCaptchaConfig) {
    this._captchaConfig.internalValue = value;
  }
  public resetCaptchaConfig() {
    this._captchaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaConfigInput() {
    return this._captchaConfig.internalValue;
  }

  // override_action - computed: false, optional: true, required: false
  private _overrideAction = new Wafv2WebAclRuleOverrideActionOutputReference(this, "override_action");
  public get overrideAction() {
    return this._overrideAction;
  }
  public putOverrideAction(value: Wafv2WebAclRuleOverrideAction) {
    this._overrideAction.internalValue = value;
  }
  public resetOverrideAction() {
    this._overrideAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideActionInput() {
    return this._overrideAction.internalValue;
  }

  // rule_label - computed: false, optional: true, required: false
  private _ruleLabel = new Wafv2WebAclRuleRuleLabelList(this, "rule_label", true);
  public get ruleLabel() {
    return this._ruleLabel;
  }
  public putRuleLabel(value: Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable) {
    this._ruleLabel.internalValue = value;
  }
  public resetRuleLabel() {
    this._ruleLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleLabelInput() {
    return this._ruleLabel.internalValue;
  }

  // statement - computed: false, optional: true, required: false
  private _statement?: any; 
  public get statement() {
    return this.interpolationForAttribute('statement');
  }
  public set statement(value: any) {
    this._statement = value;
  }
  public resetStatement() {
    this._statement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig = new Wafv2WebAclRuleVisibilityConfigOutputReference(this, "visibility_config");
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: Wafv2WebAclRuleVisibilityConfig) {
    this._visibilityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }
}

export class Wafv2WebAclRuleList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRule[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleOutputReference {
    return new Wafv2WebAclRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclVisibilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}

export function wafv2WebAclVisibilityConfigToTerraform(struct?: Wafv2WebAclVisibilityConfigOutputReference | Wafv2WebAclVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}


export function wafv2WebAclVisibilityConfigToHclTerraform(struct?: Wafv2WebAclVisibilityConfigOutputReference | Wafv2WebAclVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cloudwatchMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampled_requests_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sampledRequestsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclVisibilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclVisibilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclVisibilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl aws_wafv2_web_acl}
*/
export class Wafv2WebAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafv2_web_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafv2WebAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv2WebAcl to import
  * @param importFromId The id of the existing Wafv2WebAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv2WebAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_wafv2_web_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/resources/wafv2_web_acl aws_wafv2_web_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv2WebAclConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv2WebAclConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_web_acl',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tokenDomains = config.tokenDomains;
    this._captchaConfig.internalValue = config.captchaConfig;
    this._customResponseBody.internalValue = config.customResponseBody;
    this._defaultAction.internalValue = config.defaultAction;
    this._rule.internalValue = config.rule;
    this._visibilityConfig.internalValue = config.visibilityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // lock_token - computed: true, optional: false, required: false
  public get lockToken() {
    return this.getStringAttribute('lock_token');
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

  // token_domains - computed: false, optional: true, required: false
  private _tokenDomains?: string[]; 
  public get tokenDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('token_domains'));
  }
  public set tokenDomains(value: string[]) {
    this._tokenDomains = value;
  }
  public resetTokenDomains() {
    this._tokenDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenDomainsInput() {
    return this._tokenDomains;
  }

  // captcha_config - computed: false, optional: true, required: false
  private _captchaConfig = new Wafv2WebAclCaptchaConfigOutputReference(this, "captcha_config");
  public get captchaConfig() {
    return this._captchaConfig;
  }
  public putCaptchaConfig(value: Wafv2WebAclCaptchaConfig) {
    this._captchaConfig.internalValue = value;
  }
  public resetCaptchaConfig() {
    this._captchaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaConfigInput() {
    return this._captchaConfig.internalValue;
  }

  // custom_response_body - computed: false, optional: true, required: false
  private _customResponseBody = new Wafv2WebAclCustomResponseBodyList(this, "custom_response_body", true);
  public get customResponseBody() {
    return this._customResponseBody;
  }
  public putCustomResponseBody(value: Wafv2WebAclCustomResponseBody[] | cdktf.IResolvable) {
    this._customResponseBody.internalValue = value;
  }
  public resetCustomResponseBody() {
    this._customResponseBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResponseBodyInput() {
    return this._customResponseBody.internalValue;
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction = new Wafv2WebAclDefaultActionOutputReference(this, "default_action");
  public get defaultAction() {
    return this._defaultAction;
  }
  public putDefaultAction(value: Wafv2WebAclDefaultAction) {
    this._defaultAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new Wafv2WebAclRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: Wafv2WebAclRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig = new Wafv2WebAclVisibilityConfigOutputReference(this, "visibility_config");
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: Wafv2WebAclVisibilityConfig) {
    this._visibilityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      token_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenDomains),
      captcha_config: wafv2WebAclCaptchaConfigToTerraform(this._captchaConfig.internalValue),
      custom_response_body: cdktf.listMapper(wafv2WebAclCustomResponseBodyToTerraform, true)(this._customResponseBody.internalValue),
      default_action: wafv2WebAclDefaultActionToTerraform(this._defaultAction.internalValue),
      rule: cdktf.listMapper(wafv2WebAclRuleToTerraform, true)(this._rule.internalValue),
      visibility_config: wafv2WebAclVisibilityConfigToTerraform(this._visibilityConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
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
      token_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      captcha_config: {
        value: wafv2WebAclCaptchaConfigToHclTerraform(this._captchaConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclCaptchaConfigList",
      },
      custom_response_body: {
        value: cdktf.listMapperHcl(wafv2WebAclCustomResponseBodyToHclTerraform, true)(this._customResponseBody.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Wafv2WebAclCustomResponseBodyList",
      },
      default_action: {
        value: wafv2WebAclDefaultActionToHclTerraform(this._defaultAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclDefaultActionList",
      },
      rule: {
        value: cdktf.listMapperHcl(wafv2WebAclRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Wafv2WebAclRuleList",
      },
      visibility_config: {
        value: wafv2WebAclVisibilityConfigToHclTerraform(this._visibilityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv2WebAclVisibilityConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
