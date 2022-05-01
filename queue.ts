export class Queue<T> {
  data: T[];

  constructor(data: T[] = []) {
    this.data = data;
  }

  enqueue(item: T) {
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
