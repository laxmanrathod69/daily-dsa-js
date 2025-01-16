class Solution {
  // Helper method to implement a simple min-heap
  _heapify(queue) {
    let index = queue.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (queue[parentIndex][1] > queue[index][1]) {
        // Swap
        [queue[parentIndex], queue[index]] = [queue[index], queue[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  _pop(queue) {
    const minNode = queue[0];
    const lastNode = queue.pop();
    if (queue.length > 0) {
      queue[0] = lastNode;
      this._siftDown(queue, 0);
    }
    return minNode;
  }

  _siftDown(queue, index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftChildIndex < queue.length &&
      queue[leftChildIndex][1] < queue[smallest][1]
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < queue.length &&
      queue[rightChildIndex][1] < queue[smallest][1]
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [queue[smallest], queue[index]] = [queue[index], queue[smallest]];
      this._siftDown(queue, smallest);
    }
  }

  // Main Dijkstra's Algorithm with Min-Heap
  dijkstra(adj, src) {
    const n = adj.length;
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    const minHeap = [[src, 0]]; // Priority Queue: [vertex, distance]

    while (minHeap.length > 0) {
      const [u, uDist] = this._pop(minHeap); // Extract the node with the smallest distance

      // If the distance is already updated to a smaller one, skip processing
      if (uDist > dist[u]) continue;

      // Process all neighbors of the current node
      for (let [v, weight] of adj[u]) {
        const newDist = uDist + weight;
        if (newDist < dist[v]) {
          dist[v] = newDist;
          minHeap.push([v, newDist]);
          this._heapify(minHeap); // Re-heapify after adding a new element
        }
      }
    }

    return dist;
  }
}

// Test case 1
const adj1 = [[[1, 9]], [[0, 9]]];
const src1 = 0;

const sol = new Solution();
console.log(sol.dijkstra(adj1, src1)); // Output: [0, 9]

// Test case 2
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
console.log(sol.dijkstra(adj2, src2)); // Output: [4, 3, 0]
