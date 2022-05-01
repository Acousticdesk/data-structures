class Node {
  constructor(data, leftChild, rightChild) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

const findSuccessor = (node) => {
  let currentNode = node.rightChild;

  while (currentNode) {
    if (currentNode.leftChild) {
      currentNode = currentNode.leftChild;
    } else {
      return currentNode;
    }
  }
}

class BinarySearchTree {
  search(value) {
    let node = this.root;

    while (node) {
      if (node.data === value) {
        return node;
      }

      if (node.data > value) {
        node = node.leftChild;
      } else if (node.data < value) {
        node = node.rightChild;
      }
    }
  }

  insert(value) {
    const createdNode = new Node(value);

    if (!this.root) {
      this.root = createdNode;

      return;
    }

    let node = this.root;

    while (node) {
      if (node.data > value) {
        if (!node.leftChild) {
          node.leftChild = createdNode;

          return;
        }

        node = node.leftChild;
      }

      if (node.data < value) {
        if (!node.rightChild) {
          node.rightChild = createdNode;

          return;
        }

        node = node.rightChild;
      }
    }
  }

  delete(valueToDelete, node, parent, childDirection) {
    if (!node) {
      return;
    }

    if (valueToDelete < node.data) {
      this.delete(valueToDelete, node.leftChild, node, 'leftChild');
    }

    if (valueToDelete > node.data) {
      this.delete(valueToDelete, node.rightChild, node, 'rightChild');
    }

    if (valueToDelete === node.data) {
      if (!node.leftChild && !node.rightChild) {
        parent[childDirection] = undefined;
      }

      if (!node.leftChild && node.rightChild) {
        parent[childDirection] = node.rightChild;
      }

      if (node.leftChild && !node.rightChild) {
        parent[childDirection] = node.leftChild
      }

      if (node.leftChild && node.rightChild) {
        const successor = findSuccessor(node);

        if (successor.rightChild) {
          parent[childDirection] = successor.rightChild;
          return;
        }

        parent[childDirection] = successor;
      }
    }
  }

  traverse(node) {
    let currentNode = node;

    if (!currentNode) {
      currentNode = this.root;
    }

    if (currentNode.leftChild) {
      this.traverse(currentNode.leftChild);
    }

    console.log(currentNode.data)

    if (currentNode.rightChild) {
      this.traverse(currentNode.rightChild);
    }
  }

  getNodeLevel(value) {
    let currentNode = this.root;
    let currentDepth = 1;

    while (currentNode) {
      if (currentNode.data === value) {
        return currentDepth;
      }

      if (value < currentNode.data) {
        currentNode = currentNode.leftChild;
        currentDepth += 1;
      }

      if (value > currentNode.data) {
        currentNode = currentNode.rightChild;
        currentDepth += 1;
      }
    }

    return -1;
  }

  levelsTotal(n) {
    return Math.floor(Math.log2(n)) + 1;
  }

  traverseOrder(node) {
    if (!node) {
      return;
    }

    const numItemsOnLevel = (level) => {
      if (level === 1) {
        return 1;
      }

      return level * numItemsOnLevel(level - 1);
    }

    const queue = [node];
    let currentNode;
    let log = '';
    let lastLevel = 0;

    while (queue.length > 0) {
      currentNode = queue.shift();

      if (!currentNode) {
        continue;
      }

      const currentNodeLevel = this.getNodeLevel(currentNode.data);

      if (currentNodeLevel !== lastLevel) {
        lastLevel = currentNodeLevel;
        log += '\n';
      }

      log += currentNode.data + ' ';

      if (currentNode.leftChild) {
        queue.push(currentNode.leftChild);
      }

      if (currentNode.rightChild) {
        queue.push(currentNode.rightChild);
      }
    }

    const logsArray = log.split('\n');

    for (let i = logsArray.length - 1; i > 0; i -= 1) {
      if (logsArray[i - 1]) {
        const spacesAmount = Math.floor((logsArray[i].length - logsArray[i - 1].length) / 2);
        const spaces = new Array(Math.max(spacesAmount, 0)).fill(' ').join('');
        logsArray[i - 1] = `${spaces}${logsArray[i - 1]}${spaces}`;
      }
    }

    console.log(logsArray.join('\n'));
  }
}


const binarySearchTree = new BinarySearchTree();

const twentyFive = new Node(25);
const sixty = new Node(60);
const fifty = new Node(50, twentyFive, sixty);
const hundredTen = new Node(110);
const hundred = new Node(100, fifty, hundredTen);
const hundredFifty = new Node(150);

binarySearchTree.root = new Node(120, hundred, hundredFifty);

const binarySearchTreeEmpty = new BinarySearchTree();

binarySearchTreeEmpty.insert(100);
binarySearchTreeEmpty.insert(50);
binarySearchTreeEmpty.insert(120);
binarySearchTreeEmpty.insert(18);
binarySearchTreeEmpty.insert(123);
binarySearchTreeEmpty.insert(63);
// binarySearchTreeEmpty.insert(61);
binarySearchTreeEmpty.insert(65);
binarySearchTreeEmpty.insert(68);

binarySearchTreeEmpty.delete(63, binarySearchTreeEmpty.root);

binarySearchTreeEmpty.traverseOrder(binarySearchTreeEmpty.root);
