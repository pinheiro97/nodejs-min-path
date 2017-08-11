'use strict';

var Graph = require('./models/graph'),
	Point = require('./models/point'),
	Connection = require('./models/connection');

	var g = new Graph(),
		p1 = new Point({id: 1, name:"Mogi das Cruzes"}),
		p2 = new Point({id: 2, name:"Sao Caetano"}),
		p3 = new Point({id: 3, name:"Sao Bernardo"}),
		p4 = new Point({id: 4, name:"Campinas"}),
		p5 = new Point({id: 5, name:"Sao Paulo"}),
		c1 = new Connection({source: 1, destination: 2, cost: 125}),
		c2 = new Connection({source: 1, destination: 3, cost: 4568}),
		c3 = new Connection({source: 1, destination: 4, cost: 15}),
		c4 = new Connection({source: 1, destination: 5, cost: 1238}),
		c5 = new Connection({source: 5, destination: 2, cost: 147}),
		c6 = new Connection({source: 5, destination: 3, cost: 864}),
		c7 = new Connection({source: 5, destination: 4, cost: 5465});

	g.addPoint(p1);
	g.addPoint(p2);
	g.addPoint(p3);
	g.addPoint(p4);
	g.addPoint(p5);
	g.addConnection(c1);
	g.addConnection(c2);
	g.addConnection(c3);
	g.addConnection(c4);
	g.addConnection(c5);
	g.addConnection(c6);
	g.addConnection(c7);
	g.djikstra();

exports.help = function(){
	console.log("NodeJS Minimal Path calculation");
	console.log("More info: https://github.com/artnicbr/nodejs-min-path");
	console.log("Models");
	console.log("Graph | Point | Connection");
};
