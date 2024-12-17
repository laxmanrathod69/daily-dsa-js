// Custome Array in class format

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Custome Push() method
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // Custome Get() method
  get(index) {
    return this.data[index];
  }

  // Custome Pop() method
  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  // Custome Shift() method
  shift() {
    const firstElement = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }

  // Custome Delete() method
  delete(index) {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const newArray = new MyArray();
newArray.push("Apple");
newArray.push("Orange");
newArray.push("Banana");
newArray.push("Stawbery");
newArray.push("Grapes");
newArray.push("Mango");
console.log(newArray);

console.log(`Get: ${newArray.get(2)}`);
console.log(`Get: ${newArray.get(3)}`);

newArray.pop();
console.log(newArray);

console.log(`Shift: ${newArray.shift()}`);
console.log(newArray);

console.log(`Delete by Index: ${newArray.delete(3)}`);
console.log(newArray);
