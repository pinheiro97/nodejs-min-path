'use strict';

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

    //Add one Point object to the Point collection
    //Params:
    //  point -> Point object
    addPoint(point){
        this.points.push(point);
    }    

    //Returns the ID of a point given a needle name
    //Params
    //  name -> Name to search inside Point collection
    getPointIdByName(name){
        var retId = -1;
        this.points.forEach(function(item, index){
            if(item.name == name)
                retId = item._id;
        });

        return retId;
    }

    //Returns the Point of given a needle id
    //Params
    //  id -> Id to search inside Point collection
    getPointById(id){
        var ret = null;
        this.points.forEach(function(item, index){
            if(item._id == id)
                ret = item;
        });

        return ret;
    }

    //Expected to append the list connections to Connection collection
    //Param
    //  list -> Array of Connection objects
    mergeConnectionsList(list){
        Object.assign(this.connections, list);
    }

    //Remove all connections currently in the Connection collection
    //No params
    removeAllConnections(){
        this.connections = [];
    }

    //Add one Connection object to the Connection collection
    //Params:
    //  connection -> Connection object
    addConnection(connection){
        this.connections.push(connection);
    }

    //Returns the Connection Object
    //Params
    //  idSource -> id from source point
    //  idDestination -> id from destination point
    getConnection(idSource, idDestination){
        var conn = null;
        this.connections.forEach(function(item, index){
            if(item.source == idSource && item.destination == idDestination)
                conn = item;
        });
        return conn;
    }

    djikstra(source){
        //defining variables to calculate shortest path
        var Q = [],
            dist = [],
            prev = [],
            graph = this;

        let initialize = new Promise( (resolve, reject) => {
            graph.points.forEach(function(item, index){
                dist.push({id : item._id, cost : 100000});
                prev.push({id : item._id, prev : null});
                Q.push(item);                
            });            
            resolve();
        }).then(function(){
            while(Q.length > 0){
                let minDistanceVertex = new Promise((resolve, reject) => {
                    var min = dist[0];
                    dist.forEach(function(item, index){
                        min = (item.cost < min.cost) ? item : min;
                    });
                    Q.pop(min);
                    resolve(min);
                }).then(function(min){
                    console.log(graph.getPointById(min.id).name);
                });
                //Q.pop(Q.length - 1);
            }            
        }).then(function(){
            console.log("DIST: ", dist);
            console.log("PREV: ", prev); 
        });
    }
}