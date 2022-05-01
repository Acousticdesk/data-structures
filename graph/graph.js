class Graph {
  visitedVertexes = [];

  BST(vertex) {
    const adjacentVertexes = Object.values(vertex.edges);

    adjacentVertexes.forEach((adjacentVertex) => this.BST(adjacentVertex));
  }
}

module.exports = { Graph }
