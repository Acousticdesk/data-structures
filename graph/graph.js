const { Queue } = require('../queue');
const { GraphLogger } = require('./graph-logger');

class Graph {
  visitedVertexes = {};
  bstQueue = new Queue();

  BST(vertex) {
    GraphLogger.logBSTInit(vertex.name);

    this.bstQueue.enqueue(vertex);

    while (this.bstQueue.peek()) {
      const nextVertex = this.bstQueue.dequeue();

      if (this.visitedVertexes[nextVertex.name]) {
        continue;
      }

      this.visitedVertexes[nextVertex.name] = true;

      const nextVertexAdjacentVertexes = Object.values(nextVertex.edges);

      GraphLogger.logBSTTick(nextVertex.name);

      nextVertexAdjacentVertexes.forEach((adjacentVertex) => this.bstQueue.enqueue(adjacentVertex));
    }

    this.visitedVertexes = {};
  }
}

module.exports = { Graph }
