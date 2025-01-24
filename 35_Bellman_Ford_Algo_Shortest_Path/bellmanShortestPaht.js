/**
 * Function to implement Bellman Ford
 * @param {number} V
 * @param {number[][]} edges
 * @param {number} src
 * @returns {number[]}
 */

class Solution {
  bellmanFord(V, edges, src) {
    const dist = Array(V).fill(Infinity);
    dist[src] = 0;

    // edge relaxation
    for (let i = 0; i < V - 1; i++) {
      for (const [vertex, edge, weight] of edges) {
        if (dist[vertex] !== Infinity && dist[vertex] + weight < dist[edge]) {
          dist[edge] = dist[vertex] + weight;
        }
      }
    }

    // check for negative cycle
    for (const [vrtx, edge, wgt] of edges) {
      if (dist[vrtx] !== Infinity && dist[vrtx] + wgt < dist[edge]) {
        return [-1];
      }
    }
    // Replace Infinity with 10^8 for unreachable vertices
    return dist.map((d) => (d === Infinity ? 10 ** 8 : d));
  }
}

const bellmanFord = new Solution();

const edges = [[0, 1, 9]];
console.log(bellmanFord.bellmanFord(2, edges, 0)); // Output: [0, 9]
// Explanation: Shortest distance of all nodes from source is printed.
