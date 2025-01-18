class MaxHeap {
  constructor() {
    this._heap = [];
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  swap(index1, index2) {
    [this._heap[index1], this._heap[index2]] = [
      this._heap[index2],
      this._heap[index1],
    ];
  }
  peek() {
    return this._heap[0];
  }
  size() {
    return this._heap.length;
  }
  // Inserting a value
  insert(value) {
    this._heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this._heap.length - 1;
    while (
      index > 0 &&
      this._heap[index] > this._heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  // Removing the Root Element
  remove() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this._heap.pop();

    const root = this._heap[0];
    this._heap[0] = this._heap.pop();
    this.bubbleDown();
    return root;
  }

  bubbleDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.size()) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.size() &&
        this._heap[this.getRightChildIndex(index)] >
          this._heap[largerChildIndex]
      ) {
        largerChildIndex = this.getRightChildIndex(index);
      }

      if (this._heap[index] > this._heap[largerChildIndex]) break;

      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(3);

console.log(maxHeap.peek()); // Output: 20
console.log(maxHeap.remove()); // Output: 20
console.log(maxHeap.peek()); // Output: 10
