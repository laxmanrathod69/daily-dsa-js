/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

// min heap
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

const countPaths = (n, roads) => {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, time] of roads) {
    graph[u].push([time, v]);
    graph[v].push([time, u]);
  }

  const src = 0;
  const mod = 10 ** 9 + 7;

  const dist = Array(n).fill(Infinity);
  dist[src] = 0;

  const minHeap = new MinHeap();
  minHeap.insert([0, src]); // [time, node]

  const ways = Array(n).fill(0);
  ways[src] = 1;

  while (minHeap.size() > 0) {
    const [time, city] = minHeap.remove();

    if (time > dist[city]) continue; // skip outdated entries in min-heap

    for (const [newTime, nextCity] of graph[city]) {
      const newTimeToReachNextCity = time + newTime;

      // If a new way is found to reach nextCity
      if (newTimeToReachNextCity < dist[nextCity]) {
        dist[nextCity] = newTimeToReachNextCity;
        ways[nextCity] = ways[city];
        minHeap.insert([newTimeToReachNextCity, nextCity]);

        // If an existing way is found to reach nextCity
      } else if (newTimeToReachNextCity === dist[nextCity]) {
        ways[nextCity] = (ways[nextCity] + ways[city]) % mod;
      }
    }
  }
  return ways[n - 1] % mod;
};

const roads = [
  [0, 6, 7],
  [0, 1, 2],
  [1, 2, 3],
  [1, 3, 3],
  [6, 3, 3],
  [3, 5, 1],
  [6, 5, 1],
  [2, 5, 1],
  [0, 4, 5],
  [4, 6, 2],
];
const n = 7;
console.log(countPaths(n, roads)); // Output: 4

/*Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
The four ways to get there in 7 minutes are:
- 0 ➝ 6
- 0 ➝ 4 ➝ 6
- 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
- 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6*/
