const shortestPath = (adj, src) => {
  const n = adj.length;
  const distance = Array(n).fill(-1); // Initialize distances to -1
  const queue = [src];

  distance[src] = 0; // Distance to source is 0

  while (queue.length) {
    const node = queue.shift();

    for (const neighbour of adj[node]) {
      if (distance[neighbour] === -1) {
        distance[neighbour] = distance[node] + 1; // Update distance of neighbour
        queue.push(neighbour);
      }
    }
  }

  return distance;
};

const adj = [
  [1, 3],
  [0, 2],
  [1, 6],
  [0, 4],
  [3, 5],
  [4, 6],
  [2, 5, 7, 8],
  [6, 8],
  [7, 6],
];

console.log(shortestPath(adj, 0)); // Output: [0 1 2 1 2 3 3 4 4]
