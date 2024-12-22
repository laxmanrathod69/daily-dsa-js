// Queue using Array
class Queue {
  constructor(size) {
    this.data = Array(size);
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.data.length - 1 === this.rear;
  }

  isEmpty() {
    return this.front === -1;
  }

  // Enqueue
  enqueue(data) {
    if (this.isFull()) {
      return "Cannot enqueue. Queue is full.";
    }
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
      this.data[this.rear] = data;
      return this;
    }
    this.rear++;
    this.data[this.rear] = data;
    return this;
  }

  // Dequeue
  dequeue() {
    if (this.isEmpty()) {
      return "Cannot dequeue. Queue is empty.";
    }
    let curr = this.data[this.front];
    // this.data.splice(this.front, 1);
    delete this.data[this.front];
    this.front++;
    if (this.front > this.rear) {
      this.front = -1;
      this.rear = -1;
      return;
    }
    if (this.data.length === 0) {
      this.front = -1;
      this.rear = -1;
    }
    return curr;
  }
}

const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
console.log(queue);
