const top = 0;
const parent = (i) => ((i + 1) >>> 1) - 1;
const left = (i) => (i << 1) + 1;
const right = (i) => (i + 1) << 1;

class MinPriorityQueue {
  constructor(comparator = (a, b) => a[1] < b[1]) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[top];
  }
  push(...values) {
    values.forEach((value) => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let minChild =
        right(node) < this.size() && this._greater(right(node), left(node))
          ? right(node)
          : left(node);
      this._swap(node, minChild);
      node = minChild;
    }
  }
}

class Solution {
  dijkstra(adj, src) {
    const n = adj.length;
    const dist = Array(n).fill(Infinity);

    // Min-Heap (priority queue) to get the vertex with the smallest distance
    const priorityQ = new MinPriorityQueue();

    dist[src] = 0;
    priorityQ.push([src, 0]);

    while (!priorityQ.isEmpty()) {
      const [node, nodeDist] = priorityQ.pop();

      // If the current distance is greater than the already found distance, skip it
      if (nodeDist > dist[node]) continue;

      // Explore all the adjacent nodes
      for (const [neighbour, weight] of adj[node]) {
        const newDist = nodeDist + weight;

        if (newDist < dist[neighbour]) {
          dist[neighbour] = newDist;
          priorityQ.push([neighbour, newDist]); // Add the neighbor to heap
        }
      }
    }

    return dist;
  }
}

const shortestPath = new Solution();

const runTests = () => {
  const adj1 = [[[1, 9]], [[0, 9]]];
  const src1 = 0;
  console.log("Test 1: " + shortestPath.dijkstra(adj1, src1)); // Output: [0, 9]
  const adj2 = [
    [
      [1, 1],
      [2, 6],
    ],
    [
      [2, 3],
      [0, 1],
    ],
    [
      [1, 3],
      [0, 6],
    ],
  ];

  const src2 = 2;
  console.log("Test 2: " + shortestPath.dijkstra(adj2, src2)); // Output: [4, 3, 0]
};

runTests();
