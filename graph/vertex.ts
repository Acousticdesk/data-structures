import { IVertex } from './vertex.interface';
import { Utils } from './utils';

const utils = new Utils();

// todo use bridge? pattern
export class Vertex {
  edges: { [key: string]: IVertex } = {};
  name: string | null;

  constructor(name = null) {
    this.name = name;
  }

  addEdge(vertex: IVertex) {
    this.edges[utils.generateUniqueId()] = vertex;

    return this;
  }

  removeEdge(name: string) {
    delete this.edges[name];

    return this;
  }
}
