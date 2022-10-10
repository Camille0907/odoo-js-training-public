/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Counter } from "./counter";

const { Component, useState } = owl;

class AwesomeDashboard extends Component {
    static components = { Counter };
}

AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
