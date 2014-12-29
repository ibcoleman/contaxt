/**
 * Created by icoleman on 12/28/2014.
 */

var Dispatcher = require('flux').Dispatcher;
var PayloadSources = require('HotelConstants').PayloadSources;


var HotelDispatcher = assign(new Dispatcher(), {
    handleHelloAction: function(action) {
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
});

module.exports = HotelDispatcher;
