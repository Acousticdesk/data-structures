class Queue {
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

module.exports = {
  Queue,
}
