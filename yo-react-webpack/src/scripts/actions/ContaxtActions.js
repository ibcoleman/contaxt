
var constants = require('../constants/ContaxtConstants');

module.exports = {

    addTodo: function(text) {
        this.dispatch(constants.ADD_TODO, {text: text});
    },

    toggleTodo: function(todo) {
        this.dispatch(constants.TOGGLE_TODO, {todo: todo});
    },

    clearTodos: function() {
        this.dispatch(constants.CLEAR_TODOS);
    }
};
