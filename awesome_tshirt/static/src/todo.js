/** @odoo-module **/

import { registry } from "@web/core/registry";

const { Component, useState } = owl;

export class Todo extends Component {
    static props = {
        todo: {
          type: Object,
          shape: {
            id: Number,
            description: String,
            done: Boolean,
          }
        }
    }
}
Todo.template = "awesome_tshirt.todo";