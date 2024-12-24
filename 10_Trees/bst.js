// Binay Search Tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Insert Method
  insert(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let tempRoot = this.root;
    while (true) {
      if (newNode.data === tempRoot.data) {
        return undefined;
      }
      if (newNode.data < tempRoot.data) {
        if (!tempRoot.left) {
          tempRoot.left = newNode;
          return this;
        } else {
          tempRoot = tempRoot.left;
        }
      } else {
        if (!tempRoot.right) {
          tempRoot.right = newNode;
          return this;
        } else {
          tempRoot = tempRoot.right;
        }
      }
    }
  }

  // Includes Method
  includes(data) {
    if (!this.root) {
      return false;
    }
    let tempRoot = this.root;
    while (tempRoot) {
      if (data < tempRoot.data) {
        tempRoot = tempRoot.left;
      } else if (data > tempRoot.data) {
        tempRoot = tempRoot.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // BFS traversal
  bfs() {
    if (!this.root) {
      return undefined;
    }
    let current = this.root;
    let queue = [];
    let data = [];
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      data.push(current.data);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return data;
  }

  // DFS PreOrder Traversal
  dfsPreOrder(node = this.root, data = []) {
    if (!node) {
      return data;
    }
    data.push(node.data);
    if (node.left) {
      this.dfsPreOrder(node.left, data);
    }
    if (node.right) {
      this.dfsPreOrder(node.right, data);
    }
    return data;
  }

  // DFS PostOrder Traversal
  dfsPostOrder(node = this.root, data = []) {
    if (!node) {
      return data;
    }
    if (node.left) {
      this.dfsPostOrder(node.left, data);
    }
    if (node.right) {
      this.dfsPostOrder(node.right, data);
    }
    data.push(node.data);
    return data;
  }

  // DFS InOrder Traversal
  dfsInOrder(node = this.root, data = []) {
    if (!node) {
      return data;
    }
    if (node.left) {
      this.dfsInOrder(node.left, data);
    }
    data.push(node.data);
    if (node.right) {
      this.dfsInOrder(node.right, data);
    }
    return data;
  }
}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
tree.insert(4);
// console.log(tree.includes(5));
// console.log(tree.bfs());
// console.log(tree.dfsPreOrder(this.root, []));
// console.log(tree.dfsPostOrder(this.root, []));
console.log(tree.dfsInOrder(this.root, []));
