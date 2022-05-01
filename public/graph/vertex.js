"use strict";
const { Utils } = require('./utils');
const utils = new Utils();
// todo use bridge? pattern
class Vertex {
    constructor(name = null) {
        this.edges = {};
        this.name = name;
    }
    addEdge(vertex) {
        this.edges[utils.generateUniqueId()] = vertex;
        return this;
    }
    removeEdge(name) {
        delete this.edges[name];
        return this;
    }
}
module.exports = { Vertex };
