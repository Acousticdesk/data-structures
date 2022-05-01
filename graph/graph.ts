import { Queue } from '../queue';
import { GraphLogger } from './graph-logger';
import { IVertex } from './vertex.interface';

export class Graph {
  visitedVertexes: { [key: string]: boolean } = {};
  bstQueue = new Queue<IVertex>();

  BST(vertex: IVertex) {
    GraphLogger.logBSTInit(vertex.name);

    this.bstQueue.enqueue(vertex);

    while (this.bstQueue.peek()) {
      const nextVertex = this.bstQueue.dequeue() as IVertex;

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
