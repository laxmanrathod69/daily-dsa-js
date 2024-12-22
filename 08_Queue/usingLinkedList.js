// Queue using Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  // Enqueue
  enqueue(data) {
    let newNode = new Node(data);
    if (this.length === 0) {
      this.front = newNode;
      this.rear = newNode;
      this.length++;
      return this;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    this.length++;
  }

  // Dequeue
  dequeue() {
    if (this.length === 0) {
      return null;
    }
    let curr = this.front;
    this.front = this.front.next;
    curr.next = null;
    this.length--;
    if (!this.front || this.length === 0) {
      this.rear = null;
    }
    return curr;
  }

  // Challenge 1: Find minimum node
  min() {
    if (this.length === 0) {
      return null;
    }
    let curr = this.front;
    let min = curr.data;
    while (curr) {
      if (curr.data < min) {
        min = curr.data;
      }
      curr = curr.next;
    }
    return min;
  }

  // Challenge 2: Parenthices matching
  isValidParenthices(str) {
    const stack = [];
    const brackets = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    for (let char of str) {
      if (brackets[char]) {
        stack.push(char);
      } else {
        let top = stack.pop();
        if (!top || brackets[top] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  // Challenge 3: Reverse String using Stack
  reverseString(str) {
    const stack = [];
    let length = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      // stack.push(str[i]);
      stack[length] = str[i];
      length++;
    }
    return stack.join("");
  }
}

const queue = new Queue();
queue.enqueue(11);
// queue.enqueue(2);
// queue.enqueue(0);
// queue.enqueue(4);
// queue.enqueue(1);
// console.log(queue.dequeue());
// console.log(queue.min());
// console.log(queue.isValidParenthices("({[}])"));
console.log(queue.reverseString("Hello"));
console.log(queue);
