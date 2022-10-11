/** @odoo-module **/

import { registry } from "@web/core/registry";
import { BooleanField } from "@web/views/fields/boolean/boolean_field";

export class LateOrderBoolean extends BooleanField {}

LateOrderBoolean.template = "awesome_tshirt.LateOrderBoolean";

registry.category("fields").add("late_order_boolean", LateOrderBoolean);