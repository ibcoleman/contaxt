/**
 * Created by icoleman on 12/23/2014.
 */

var keyMirror = require('keymirror');

module.exports = {
    ActionTypes: keyMirror({
        DO_THE_THING: null,
        CALL_FOR_UPDATE: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION : null
    }),

    Messages: {
        ENTER_TODO: "Enter a Hotel"
    }
};
