
var Fluxxor = require('fluxxor');
var Constants = require('../constants/HotelConstants');



module.exports = Fluxxor.createStore({
    initialize: function() {
        this.hotels = [];

        this.bindActions(
            Constants.ActionTypes.DO_THE_THING, this.doTheThing
        );
    },

    doTheThing: function(payload) {
        this.hotels.push({text: payload.text, complete: false});
        this.emit("change");
    },

    getState: function() {
        return {
            hotels: this.hotels
        };
    }
});
