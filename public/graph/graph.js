"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const queue_1 = require("../queue");
const graph_logger_1 = require("./graph-logger");
class Graph {
    visitedVertexes = {};
    bstQueue = new queue_1.Queue();
    BST(vertex) {
        graph_logger_1.GraphLogger.logBSTInit(vertex.name);
        this.bstQueue.enqueue(vertex);
        while (this.bstQueue.peek()) {
            const nextVertex = this.bstQueue.dequeue();
            if (this.visitedVertexes[nextVertex.name]) {
                continue;
            }
            this.visitedVertexes[nextVertex.name] = true;
            const nextVertexAdjacentVertexes = Object.values(nextVertex.edges);
            graph_logger_1.GraphLogger.logBSTTick(nextVertex.name);
            nextVertexAdjacentVertexes.forEach((adjacentVertex) => this.bstQueue.enqueue(adjacentVertex));
        }
        this.visitedVertexes = {};
    }
}
exports.Graph = Graph;
