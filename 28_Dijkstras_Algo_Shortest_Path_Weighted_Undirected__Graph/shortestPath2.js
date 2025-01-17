// Priority Queue
class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper function to swap two elements in the heap
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // Helper function to maintain the heap property
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index][0] < this.heap[parentIndex][0]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Helper function to maintain the heap property
  heapifyDown() {
    let index = 0;
    while (index * 2 + 1 < this.heap.length) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallest = index;

      if (this.heap[leftChild][0] < this.heap[smallest][0]) {
        smallest = leftChild;
      }
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild][0] < this.heap[smallest][0]
      ) {
        smallest = rightChild;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  // Enqueue an element [priority, value] into the priority queue
  enqueue(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  // Dequeue an element (the one with the smallest priority)
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    // Swap the root with the last element
    this.swap(0, this.heap.length - 1);
    const element = this.heap.pop(); // Remove the last element (the root)
    this.heapifyDown(); // Restore the heap property
    return element;
  }

  // Peek the element with the smallest priority
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Return the size of the priority queue
  size() {
    return this.heap.length;
  }
}

class Solution {
  /**
   * @param number n
   * @param number m
   * @param number[][] edges
   * @returns number[]
   */
  shortestPath(n, m, edges) {
    // Step 1: Build the graph as an adjacency list
    const graph = new Map();
    for (let i = 1; i <= n; i++) {
      graph.set(i, []);
    }

    for (const [u, v, w] of edges) {
      graph.get(u).push([v, w]);
      graph.get(v).push([u, w]);
    }

    // Step 2: Initialize Dijkstra variables
    const dist = Array(n + 1).fill(Infinity);
    const parent = Array(n + 1).fill(null);
    dist[1] = 0;

    // Min-heap
    const pq = new MinPriorityQueue();
    pq.enqueue([0, 1]);

    // Step 3: Dijkstra's Algorithm
    while (!pq.isEmpty()) {
      const [currentDist, node] = pq.dequeue();

      if (currentDist > dist[node]) continue;

      for (const [neighbour, weight] of graph.get(node)) {
        const newDist = currentDist + weight;

        if (newDist < dist[neighbour]) {
          dist[neighbour] = newDist;
          parent[neighbour] = node;
          pq.enqueue([newDist, neighbour]);
        }
      }
    }

    // Step 4: If no path exists, return [-1]
    if (dist[n] === Infinity) return [-1];

    // Step 5: Reconstruct the path from node n to node 1
    const path = [];
    for (let node = n; node !== null; node = parent[node]) {
      path.push(node);
    }
    path.reverse();

    return [dist[n], ...path];
  }
}

const graph = new Solution();
const edges = [
  [1, 2, 2],
  [2, 5, 5],
  [2, 3, 4],
  [1, 4, 1],
  [4, 3, 3],
  [3, 5, 1],
];

console.log(graph.shortestPath(5, 6, edges));
