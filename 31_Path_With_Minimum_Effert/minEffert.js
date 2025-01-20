class MinHeap {
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
      this._heap[index][0] < this._heap[this.getParentIndex(index)][0]
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
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.size() &&
        this._heap[this.getRightChildIndex(index)][0] <
          this._heap[smallerChildIndex][0]
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this._heap[index][0] < this._heap[smallerChildIndex][0]) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

class Solution {
  /**
   * @param {number} rows
   * @param {number} columns
   * @param {number[][]} heights
   * @returns {number}
   */
  MinimumEffort(rows, columns, heights) {
    const n = rows;
    const m = columns;
    const dist = Array.from({ length: n }, () => Array(m).fill(Infinity));

    const minHeap = new MinHeap();
    dist[0][0] = 0;
    minHeap.insert([0, 0, 0]); // [maxDiff, row, col]

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    while (minHeap.size() > 0) {
      const [effort, row, col] = minHeap.remove();

      if (row === n - 1 && col === m - 1) return effort;

      for (const [drow, dcol] of directions) {
        const newRow = row + drow;
        const newCol = col + dcol;

        if (newRow >= 0 && newCol >= 0 && newRow < n && newCol < m) {
          const newDiff = Math.max(
            effort,
            Math.abs(heights[row][col] - heights[newRow][newCol])
          );

          // Only push to the heap if the new effort is smaller
          if (newDiff < dist[newRow][newCol]) {
            dist[newRow][newCol] = newDiff;
            minHeap.insert([newDiff, newRow, newCol]);
          }
        }
      }
    }

    return 0;
  }
}

const solution = new Solution();
const heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];
console.log(solution.MinimumEffort(3, 3, heights)); // Output: 2
