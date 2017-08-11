'use strict';

module.exports = class Connection {
    constructor(values){
        var defaults = {
            _id : new Date().getTime(),
            source : 0,
            destination : 0,
            cost : 0.00
        }

        Object.assign(this, defaults, values);
    }

    //Create a Connection object and append to the Connection collection
    //Params:
    //  values -> JSON with Connection values
    setValues(values){
        Object.assign(this, values);
    }
}