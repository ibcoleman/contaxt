/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

require('../../styles/ToDoItem.sass');


/**
 * The TodoItem Component...
 *
 * @type {*|Function}
 */
var ToDoItem = React.createClass({
    mixins: [FluxMixin],

    propTypes: {
        todo: React.PropTypes.object.isRequired
    },

    render: function() {
        var style = {
            textDecoration: this.props.todo.complete ? "line-through" : ""
        };

        return <span style={style} onclick={this.onclick}>{this.props.todo.text}</span>
    },

    onClick: function() {
        this.getFlux().actions.toggleTodo(this.props.todo);
    }
});

module.exports = ToDoItem;


