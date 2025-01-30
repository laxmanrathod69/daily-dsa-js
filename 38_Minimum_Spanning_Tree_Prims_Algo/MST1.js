// min heap
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return root;
  }

  bubbleDown() {
    let index = 0;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (
        left < this.heap.length &&
        this.heap[left][0] < this.heap[smallest][0]
      ) {
        smallest = left;
      }
      if (
        right < this.heap.length &&
        this.heap[right][0] < this.heap[smallest][0]
      ) {
        smallest = right;
      }
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

/**
 * @param {number[][]} adj
 * @param {number} v
 * @param {number} e
 * @returns {number}
 */

const spanningTree = (v, adj) => {
  const minHeap = new MinHeap();
  const visited = new Array(v).fill(false);

  let sum = 0;
  minHeap.insert([0, 0]); // [weight, node]

  while (minHeap.size() > 0) {
    const [weight, node] = minHeap.remove();

    if (visited[node]) continue; // skip if already visited

    visited[node] = true;
    sum += weight;

    for (const [neighbour, neighbourWeight] of adj[node]) {
      if (!visited[neighbour]) {
        minHeap.insert([neighbourWeight, neighbour]);
      }
    }
  }
  return sum;
};

const v = 3;
const adj = [
  [
    [1, 5],
    [2, 1],
  ], // edges from node 0
  [
    [0, 5],
    [2, 3],
  ], // edges from node 1
  [
    [0, 1],
    [1, 3],
  ], // edges from node 2
];

console.log(spanningTree(v, adj)); // Output: 4
