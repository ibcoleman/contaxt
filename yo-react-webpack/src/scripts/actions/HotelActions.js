
var actionTypes = require('../constants/HotelConstants').ActionTypes;

module.exports = {

    doTheThing: function(text) {
        this.dispatch(actionTypes.DO_THE_THING, {text: text});
    },

    callForUpdate: function() {
        this.dispatch(actionTypes.CALL_FOR_UPDATE, {text: text});
    }
};
