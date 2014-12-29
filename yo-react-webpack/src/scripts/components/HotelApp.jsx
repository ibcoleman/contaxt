/**
 * @jsx React.DOM
 */

'use strict';

require('../../styles/HotelApp.sass');
require('bootstrap/dist/css/bootstrap.css');

var React = require('react/addons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

var Panel = require('react-bootstrap/Panel');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Button = require('react-bootstrap/Button');


var Fluxxor = require('fluxxor');
var HotelStore = require('../stores/HotelStore');
var HotelActions = require('../actions/HotelActions');
var Navigation = require('./Navigation');
var HotelTable = require('./HotelTable');

var stores = {
    HotelStore: new HotelStore()
};

var flux = new Fluxxor.Flux(stores, HotelActions);

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

                            <Navigation></Navigation>

                            <HotelTable></HotelTable>
                        </Col>
                    </Row>
                    <Button onClick={this.doTheThing}>Go!</Button>
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



