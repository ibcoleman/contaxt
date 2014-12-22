
exports.MyComponent = React.createClass({
    render: function() {
        return <h1>Hello, World, Sweet, World!</h1>;
    }
});

var Alert = ReactBootstrap.Alert;
exports.MyPanel = React.createClass({
    render: function () {
    return <Alert bsStyle="warning">
        <strong>Holy moley!</strong>
        It's an ALERT!!1
    </Alert>;
    }
});