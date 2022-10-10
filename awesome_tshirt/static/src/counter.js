/** @odoo-module **/

import { registry } from "@web/core/registry";

const { Component, useState } = owl;

export class Counter extends Component {
    setup() {
        this.state = useState({value: 1});
    }

    increment() {
        this.state.value = this.state.value + 1;
    }
}
Counter.template = "awesome_tshirt.counter";