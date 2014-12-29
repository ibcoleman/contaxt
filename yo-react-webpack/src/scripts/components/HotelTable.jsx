/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Table = require('react-bootstrap/Table');

require('../../styles/HotelTable.sass');



var HotelTable = React.createClass({
  render: function () {
    return (
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr className="active">
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr className="warning">
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr className="danger">
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td></td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
      );
  }
});

module.exports = HotelTable;


