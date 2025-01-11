// Function to find shortest path in a Directed Acyclic Graph using Topological Sort
const shortestPathInDAG = (V, edges) => {
  // Build adjacency list
  const adj = Array.from({ length: V }, () => []);
  for (const [u, v, w] of edges) {
    adj[u].push([v, w]);
  }

  // Step 1: Perform Topological Sort
  const topoSort = (adj) => {
    const topo = [];
    const visited = Array(V).fill(false);

    const dfs = (node) => {
      visited[node] = true;
      for (const [neighbor] of adj[node]) {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
      topo.push(node);
    };

    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        dfs(i);
      }
    }

    return topo.reverse();
  };

  // Step 2: Initialize distances and relax edges in topological order
  const dist = Array(V).fill(Infinity);
  dist[0] = 0; // Source vertex distance is 0
  const topo = topoSort(adj);

  for (const node of topo) {
    if (dist[node] !== Infinity) {
      for (const [neighbor, weight] of adj[node]) {
        if (dist[node] + weight < dist[neighbor]) {
          dist[neighbor] = dist[node] + weight;
        }
      }
    }
  }

  // Replace Infinity with -1 for unreachable nodes
  for (let i = 0; i < V; i++) {
    if (dist[i] === Infinity) {
      dist[i] = -1;
    }
  }

  return dist;
};

const V = 6;
const edges = [
  [0, 1, 2],
  [0, 4, 1],
  [4, 5, 4],
  [4, 2, 2],
  [1, 2, 3],
  [2, 3, 6],
  [5, 3, 1],
];
console.log(shortestPathInDAG(V, edges)); // Output: [0, 2, 3, 6, 1, 5]
