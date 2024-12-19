// Create a simple singly linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    if (!data) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  // Push a new node to the end of the linked list
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // Pop the last node from the linked list
  pop() {
    if (!this.head) {
      return null;
    }
    let prev = this.head;
    let curr = this.head;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  // Unshift a new node to the beginning of the linked list
  unshift(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Shift the first node from the linked list
  shift() {
    if (!this.head) {
      return;
    }
    let curr = this.head;
    this.head = this.head.next;
    curr.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return;
    }
  }

  // Get the first node
  getFirst() {
    return this.head;
  }

  // Get the last node
  getLast() {
    return this.tail;
  }

  // Get the node at a specific index
  get(index) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (count === index) {
        return curr;
      }
      count++;
      curr = curr.next;
    }
    return null;
  }

  // Set the value of a node at a specific index
  set(index, data) {
    let currIndex = this.get(index);
    if (currIndex) {
      currIndex.data = data;
      return true;
    }
    return false;
  }

  // Insert a new node at a specific index
  insert(index, data) {
    if (index === 0) {
      this.unshift(data);
      return;
    }
    if (index === this.length - 1) {
      this.push(data);
      return;
    }
    const newNode = new Node(data);
    const prev = this.get(index - 1);
    const temp = prev.next;
    newNode.next = temp;
    prev.next = newNode;
    this.length++;
  }

  // Size of the linked list
  size() {
    // return this.length;
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  // Clear method
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(20);
myLinkedList.push(30);
myLinkedList.push(40);
// myLinkedList.pop();
// myLinkedList.unshift(30);
// myLinkedList.unshift(40);
// myLinkedList.shift();
// console.log(myLinkedList.getFirst());
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.get(0));
// myLinkedList.set(1, 60);
// myLinkedList.insert(1, 200);
console.log(myLinkedList.size());
console.log(myLinkedList.clear());
