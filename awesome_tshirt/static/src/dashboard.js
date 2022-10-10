/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Counter } from "./counter";
import { Todo } from "./todo";

const { Component, useState } = owl;

class AwesomeDashboard extends Component {
    static components = { Counter, Todo };

    setup(){
        this.todo1 = { id: 3, description: "Buy milk", done: false };
        this.todo2 = { id: 3, description: "Buy eggs", done: true };
    }
}

AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
