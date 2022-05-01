// todo akicha: check about Doubly Linked Lists

class Node {
  constructor(data, nextItem) {
    this.data = data;
    this.nextItem = nextItem;
  }
}

class LinkedList {
  constructor(node) {
    this.firstNode = node;
  }

  read(index) {
    let node = this.firstNode;
    let currentIndex = 0;

    while (node && currentIndex < index) {
      node = node.nextItem;
      currentIndex += 1;
    }

    return node;
  }

  find(value) {
    let node = this.firstNode;

    do {
      if (node.data === value) {
        return node;
      }

      node = node.nextItem;
    } while (node)
  }

  insert(node, index) {
    const nodeAtIndex = this.read(index);
    const nodeAtIndexPrior = this.read(index - 1);

    if (!nodeAtIndex) {
      return;
    }

    node.nextItem = nodeAtIndex;
    nodeAtIndexPrior.nextItem = node;
  }

  delete(index) {
    const nodeBeforeIndex = this.read(index - 1);
    const nodeAfterIndex = this.read(index + 1);

    nodeBeforeIndex.nextItem = nodeAfterIndex;
  }

  traverse() {
    let node = this.firstNode;

    while (node) {
      console.log(node);
      node = node.nextItem;
    }
  }

  reverse() {
    let node = this.firstNode;
    let nodes = {};
    let currentIndex = 0;
    let total = 0;

    while (node) {
      nodes[currentIndex] = node;
      node = node.nextItem;

      if (!node) {
        break;
      }

      currentIndex += 1;
      total += 1;
    }

    let nextNode = nodes[currentIndex];

    while (nextNode) {
      nextNode.nextItem = nodes[currentIndex - 1];
      nextNode = nodes[currentIndex - 1];

      currentIndex -= 1;
    }

    this.firstNode = nodes[total];
  }
}

const thirdNode = new Node(3);
const twoAndHalfNode = new Node(2.5);
const secondNode = new Node(2, thirdNode);
const firstNode = new Node(1, secondNode);

const linkedList = new LinkedList(firstNode);

linkedList.insert(twoAndHalfNode, 2)

linkedList.delete(2);

linkedList.traverse();

linkedList.reverse();

linkedList.traverse();
