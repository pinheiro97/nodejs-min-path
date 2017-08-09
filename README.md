# nodejs-min-path
NodeJS module to calculate minimal cost paths given N points

## Authors
1. Andre Ricardo Cintra (USP)

## How to
### Install
npm install nodejs-min-path

### Basic Sample
```javascript
var nodejs-min-path = require('nodejs-min-path');
```

## Proposal
Find shortest path given N points. Each point is an address and the costs between points are given by Google Maps API. Dijikstra's algorithm is the chosen one to be implemented (Reference 1).

## Objective
Publish a npm package so the JS developers community can easily include this in their projects under de MIT license.

## Motivation
Learn, increase and steady NodeJS knowledges and keep contact with famous and stable algorithms like Djikstra's shortest path.

## References
1. https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
1. http://www.sciencedirect.com/science/article/pii/S147466701634246X
1. http://webspace.ship.edu/pgmarr/TransMeth/Lec%201-Network%20Measurements.pdf
1. https://developers.google.com/maps/documentation/distance-matrix/intro
