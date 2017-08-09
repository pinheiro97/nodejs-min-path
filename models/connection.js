module.exports = class Connection {
    constructor(values){
        var defaults = {
            source : 0,
            destination : 0,
            cost : 0.00
        }

        Object.assign(this, defaults, values);
    }
}