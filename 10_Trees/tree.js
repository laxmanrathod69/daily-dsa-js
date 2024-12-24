// Simple Tree Creation
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    this.root = new Node(data);
  }

  // Left Node
  leftNode(data) {
    const newNode = new Node(data);
    this.root.left = newNode;
    return this;
  }

  // Right Node
  rightNode(data) {
    const newNode = new Node(data);
    this.root.right = newNode;
    return this;
  }
}

const tree = new Tree(1);
tree.leftNode(2);
tree.rightNode(3);
console.log(tree);
