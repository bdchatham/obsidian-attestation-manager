// https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/route53_resolver_firewall_rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRoute53ResolverFirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/route53_resolver_firewall_rule_group#firewall_rule_group_id DataAwsRoute53ResolverFirewallRuleGroup#firewall_rule_group_id}
  */
  readonly firewallRuleGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/route53_resolver_firewall_rule_group#id DataAwsRoute53ResolverFirewallRuleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/route53_resolver_firewall_rule_group aws_route53_resolver_firewall_rule_group}
*/
export class DataAwsRoute53ResolverFirewallRuleGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_resolver_firewall_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRoute53ResolverFirewallRuleGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRoute53ResolverFirewallRuleGroup to import
  * @param importFromId The id of the existing DataAwsRoute53ResolverFirewallRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/route53_resolver_firewall_rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRoute53ResolverFirewallRuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_resolver_firewall_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/route53_resolver_firewall_rule_group aws_route53_resolver_firewall_rule_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRoute53ResolverFirewallRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverFirewallRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_firewall_rule_group',
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
    this._firewallRuleGroupId = config.firewallRuleGroupId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // creator_request_id - computed: true, optional: false, required: false
  public get creatorRequestId() {
    return this.getStringAttribute('creator_request_id');
  }

  // firewall_rule_group_id - computed: false, optional: false, required: true
  private _firewallRuleGroupId?: string; 
  public get firewallRuleGroupId() {
    return this.getStringAttribute('firewall_rule_group_id');
  }
  public set firewallRuleGroupId(value: string) {
    this._firewallRuleGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRuleGroupIdInput() {
    return this._firewallRuleGroupId;
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

  // modification_time - computed: true, optional: false, required: false
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // rule_count - computed: true, optional: false, required: false
  public get ruleCount() {
    return this.getNumberAttribute('rule_count');
  }

  // share_status - computed: true, optional: false, required: false
  public get shareStatus() {
    return this.getStringAttribute('share_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      firewall_rule_group_id: cdktf.stringToTerraform(this._firewallRuleGroupId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firewall_rule_group_id: {
        value: cdktf.stringToHclTerraform(this._firewallRuleGroupId),
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
