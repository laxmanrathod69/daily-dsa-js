// Stack using Array
class Stack {
  constructor(size) {
    this.top = Array(size);
    this.length = 0;
  }

  // isEmpty method
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
  }

  // isFull method
  isFull() {
    if (this.top.length === this.length) {
      return true;
    }
  }

  // Push method
  push(data) {
    if (this.isFull()) {
      return "Stack Overflow!";
    }
    this.top[this.length] = data;
    this.length++;
  }

  // Pop method
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow!";
    }
    let poppedElement = this.top[this.length - 1];
    this.top.splice(this.length - 1, 1);
    this.length--;
    return poppedElement;
  }

  // Stack travers
  print() {
    if (this.length === 0) {
      return null;
    }
    let length = this.length;
    while (length > 0) {
      console.log(this.top[length - 1]);
      length--;
    }
  }
}

const myStack = new Stack(5);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.pop();
myStack.pop();
myStack.print();
console.log(myStack);
