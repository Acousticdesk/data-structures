export default class Queue {
  constructor(data) {
    this.data = data;
  }

  enqueue(item) {
    this.data.push(item);
  }

  // O(N)
  dequeue() {
    return this.data.shift();
  }
}
