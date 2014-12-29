/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

require('../../styles/HotelForm.sass');


var HotelForm = React.createClass({
    mixins: [FluxMixin],

    getInitialState: function() {
        return { countryValue: "USA" };
    },

    render: function () {

        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" name="country" value={this.state.countryValue} onChange={this.handleCountryTextChange}/>
                    <button type="submit" value="Country">Country</button>
                </form>
            </div>
        );
    },

    handleCountryTextChange: function(e) {
        this.setState({countryValue: e.target.value});
    },

    onSubmitForm: function(e) {
        e.preventDefault();
        console.log("Inside HotelForm.onSubmitForm()");
    }
});

module.exports = HotelForm;


