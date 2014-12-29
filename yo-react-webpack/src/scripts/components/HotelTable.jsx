/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var React = require('react/addons');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var Table = require('react-bootstrap/Table');

require('../../styles/HotelTable.sass');


var HotelTable = React.createClass({
    mixins: [FluxMixin],

    propTypes: {
        hotels: React.PropTypes.array.isRequired
    },

    render: function () {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Hotel Name</th>
                        <th>Room
                            <br/>
                            Service</th>
                        <th>Address</th>
                        <th>Zip</th>
                        <th>City URL</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.hotels.map(function(hotel, i) {
                    return <tr>
                                <td>{i}</td>
                                <td>{hotel.name}</td>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td>{hotel.address}</td>
                                <td>{hotel.zip}</td>
                                <td>{hotel._links.city}</td>
                           </tr>
                })}
                </tbody>
            </Table>
        );
    }
});

module.exports = HotelTable;


