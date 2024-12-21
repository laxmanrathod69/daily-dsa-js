// Stack using Linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(data) {
    this.top = new Node(data);
    this.length = 1;
  }

  // Push method
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  // Pop method
  pop() {
    if (!this.top) {
      return null;
    }
    let curr = this.top;
    this.top = this.top.next;
    curr = null;
    this.length--;
    if (this.length === 0) {
      this.top = null;
    }
    return curr;
  }

  // Stack travers
  print() {
    if (!this.top) {
      return null;
    }
    let data = [];
    let curr = this.top;
    while (curr) {
      data.push(curr.data);
      curr = curr.next;
    }
    return data;
  }
}

const myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
// myStack.pop();
console.log(myStack.print());
console.log(myStack);
