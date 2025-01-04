// 785. Is Graph Bipartite?
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = (graph) => {
  const n = graph.length;
  const colors = Array(n).fill(-1);

  const bfs = (start) => {
    const queue = [start];
    colors[start] = 0;

    while (queue.length) {
      const node = queue.shift();
      for (const neighbour of graph[node]) {
        if (colors[neighbour] === -1) {
          colors[neighbour] = 1 - colors[node]; // Assign the opposite color
          queue.push(neighbour);
        } else if (colors[neighbour] === colors[node]) {
          return false;
        }
      }
    }

    return true;
  };

  // Check all disconnected components
  for (let i = 0; i < n; i++) {
    if (colors[i] === -1) {
      if (!bfs(i)) {
        return false;
      }
    }
  }

  return true;
};

// Example usage:
const graph1 = [
  [1, 3],
  [0, 2],
  [1, 3],
  [0, 2],
];
console.log(isBipartite(graph1)); // Output: true
