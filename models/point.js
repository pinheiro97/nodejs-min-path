module.exports = class Point {
    constructor(values){
        var defaults = {
            _id : "",
            name : "",
            _coord_x : 0.00,
            _coord_y : 0.00
        }

        Object.assign(this, defaults, values);
    }
}