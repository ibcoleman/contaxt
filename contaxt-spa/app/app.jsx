var MyPanel = require('scripts/mainUI').MyPanel;
var MyComponent = require('scripts/mainUI').MyComponent;

$(document).ready(function() {
    /** @jsx React.DOM */
    React.render(<MyComponent />, document.getElementById('example'));
    React.render(<MyPanel />, document.getElementById('alertnode'));
});
