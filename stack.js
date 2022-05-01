export default class Stack {
  constructor(data) {
    this.data = data;
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    return this.data.pop();
  }

  read() {
    return this.data[this.data.length - 1];
  }
}

const stack = new Stack([1, 2, 3, 4, 5]);
