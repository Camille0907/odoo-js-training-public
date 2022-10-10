/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Counter } from "./counter";
import { Todo } from "./todo";

const { Component, useState } = owl;

class AwesomeDashboard extends Component {
    static components = { Counter, Todo };

    setup(){
        this.todos = [
            { id: 3, description: "Buy milk", done: false },
            { id: 4, description: "Buy eggs", done: true },
            { id: 5, description: "Buy avocados", done: false },
        ]
    }
}

AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
