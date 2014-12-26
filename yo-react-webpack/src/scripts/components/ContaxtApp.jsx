/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;



// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');


// Fluxxor demo app
// Init
var Fluxxor = require('fluxxor');
var ContaxtStore = require('../stores/ContaxtStore');
var ContaxtActions = require('../actions/ContaxtActions');
var SomeConstants = require('../constants/ContaxtConstants');
var ToDoItem = require('./ToDoItem');

var stores = {
    ContaxtStore: new ContaxtStore()
};

var flux = new Fluxxor.Flux(stores,ContaxtActions);

flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

// The application itself
var ContaxtApp = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("ContaxtStore")],

    getInitialState: function() {
        return { newTodoText: ""};
    },

    getStateFromFlux: function() {
        var flux = this.getFlux();
        return flux.store("ContaxtStore").getState();
    },

    render: function() {
        return (
            <div>
                <ul>
                {this.state.todos.map(function(todo, i) {
                    return <li key={i}><ToDoItem todo={todo} /></li>;
                })}
                </ul>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" size="30" placeholder={SomeConstants.ENTER_TODO}
                        value={this.state.newTodoText}
                        onChange={this.handleTodoTextChange} />
                    <input type="submit" value="Add Todo" />
                </form>
                <button onClick={this.clearCompletedTodos}>Clear Completed</button>
            </div>
        );
    },

    handleTodoTextChange: function(e) {
       this.setState({newTodoText: e.target.value});
    },

    onSubmitForm: function(e) {
        e.preventDefault();
        if (this.state.newTodoText.trim()) {
            this.getFlux().actions.addTodo(this.state.newTodoText);
            this.setState({newTodoText: ""});
        }
    },

    clearCompletedTodos: function(e) {
        this.getFlux().actions.clearTodos();
    }
});


React.render(<ContaxtApp flux={flux}/>, document.getElementById('content')); // jshint ignore:line

