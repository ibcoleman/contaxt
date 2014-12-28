
var Fluxxor = require('fluxxor');
var ContaxtConstants = require('../constants/ContaxtConstants');



module.exports = Fluxxor.createStore({
    initialize: function() {
        this.todos = [];

        this.bindActions(
            ContaxtConstants.ADD_TODO, this.onAddTodo,
            ContaxtConstants.TOGGLE_TODO, this.onToggleTodo,
            ContaxtConstants.CLEAR_TODOS, this.onClearTodos
        );
    },

    onAddTodo: function(payload) {
        this.todos.push({text: payload.text, complete: false});
        this.emit("change");
    },

    onToggleTodo: function(payload) {
        payload.todo.complete = !payload.todo.complete;
        this.emit("change");
    },

    onClearTodos: function() {
        this.todos = this.todos.filter(function(todo) {
                return !todo.complete;
        });
        this.emit("change");
    },

    getState: function() {
        return {
            todos: this.todos
        };
    }
});
