"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    data;
    constructor(data = []) {
        this.data = data;
    }
    enqueue(item) {
        this.data.push(item);
    }
    // O(N)
    dequeue() {
        return this.data.shift();
    }
    // Check what is the standard name
    peek() {
        return this.data[0];
    }
}
exports.Queue = Queue;
