"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vertex = void 0;
const utils_1 = require("./utils");
const utils = new utils_1.Utils();
// todo use bridge? pattern
class Vertex {
    edges = {};
    name;
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
exports.Vertex = Vertex;
