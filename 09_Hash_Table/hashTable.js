// Hash Table
class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  // Hash Function
  _hashCode(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  // Hash Table Set Method
  set(key, value) {
    const index = this._hashCode(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this;
  }

  // Hash Table Get Method
  get(key) {
    const index = this._hashCode(key);
    if (!this.keyMap[index]) {
      return undefined;
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
  }

  // Hash Table get all keys
  keys() {
    const keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }

  // Hash Table get all values
  values() {
    const valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }
}

const phoneBook = new HashTable(5);
phoneBook.set("john", "555-333-444");
phoneBook.set("jane", "555-444-555");
phoneBook.set("doe", "555-555-666");
console.log(phoneBook.get("john"));
console.log(phoneBook.get("jane"));
console.log(phoneBook.get("doe"));
console.log(phoneBook.keys());
console.log(phoneBook.values());
