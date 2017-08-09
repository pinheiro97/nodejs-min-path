module.exports = class Graph{
    //Constructor
    constructor(values) {
        var defaults = {
            fuel_price : 0.00,
            points : [],
            connections : []
        }

        Object.assign(this, defaults, values);
    }
        
    //Expected to append the list points to Point collection
    //Param
    //  list -> Array of Point objects
    mergePointsList(list){
        Object.assign(this.points, list);
    }

    //Remove all points currently in the Point collection
    //No params
    removeAllPoints(){
        this.points = [];
    }

    //Add onde Point object to the Point collection
    //Params:
    //  point -> Point object
    addPoint(point){
        this.points.push(point);
    }

    //Create a Connection object and append to the Connection collection
    //Params:
    //  idSource -> Source point of the connection
    //  idDestination -> Destination point of the connection
    //  cost -> relative cost to cross this connection from source to destination
    setConnection(idSource, idDestination, cost){
        this.connections.push({source: idSource, destination : idDestination, cost : cost});
    }

    //Returns the ID of a point given a needle name
    //Params
    //  name -> Name to search inside Point collection
    getPointIdByName(name){
        this.points.forEach(function(item, index){
            if(item.name == name)
                return item._id;
        })
    }
}