/**
 * @jsx React.DOM
 */

'use strict';

require('../../styles/HotelApp.sass');
require('bootstrap/dist/css/bootstrap.css');

var React = require('react/addons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

var Panel = require('react-bootstrap/lib/Panel');
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Button = require('react-bootstrap/lib/Button');


var Fluxxor = require('fluxxor');
var HotelStore = require('../stores/HotelStore');
var HotelActions = require('../actions/HotelActions');
var Navigation = require('./Navigation');
var HotelTable = require('./HotelTable');
var HotelForm = require('./HotelForm');

var stores = {
    HotelStore: new HotelStore()
};

var flux = new Fluxxor.Flux(stores, HotelActions);

/**
 * Logging on dispatch
 */
flux.on("dispatch", function (type, payload) {
    if (console && console.log) {
        console.log("[Dispatch]", type, payload);
    }
});

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

/**
 *
 * @type {*|Function}
 */
var HotelApp = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("HotelStore")],

    getInitialState: function () {
        return {newHotelText: "Default value..."};
    },

    getStateFromFlux: function () {
        var flux = this.getFlux();
        return flux.store('HotelStore').getState();
    },

    render: function () {
        return (
            <Panel>
                <Grid>
                    <Row className="clearfix">
                        <Col xs={12} md={12}>
                            <Navigation />
                            <HotelForm />
                            <HotelTable hotels={this.state.hotels} />
                        </Col>
                    </Row>
                    <Button onClick={this.doTheThing}>Get All!</Button>
                </Grid>
            </Panel>
        );
    },

    doTheThing: function (e) {
        this.getFlux().actions.doTheThing(this.state.newHotelText);
        this.setState({newHotelText: "Already submitted"});
    }
});

React.render(<HotelApp flux={flux}/>, document.getElementById('hotelApp')); // jshint ignore:line



