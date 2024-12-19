class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  // Add a node to the end of the list
  push(data) {
    const newNode = new Node(data);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Pop a node from the end of the list
  pop() {
    if (!this.head) {
      return null;
    }
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp = null;
    this.length--;
    return temp;
  }

  // Unshift node to the begining of the list
  unshift(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.length++;
      return newNode;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return newNode;
  }

  // Shift node from the begining of list
  shift() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    this.head = this.head.next;
    this.head.prev = null;
    temp = null;
    this.length--;
  }

  // Reverse the list
  reverse() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.push(20);
doublyLinkedList.push(30);
// doublyLinkedList.pop();
// doublyLinkedList.unshift(0);
// doublyLinkedList.shift();
doublyLinkedList.reverse();
console.log(doublyLinkedList);
