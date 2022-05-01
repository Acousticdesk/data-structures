const { Utils } = require('./utils');

const utils = new Utils();

// todo use bridge? pattern
class Vertex {
  edges = {};

  constructor(name = null) {
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
