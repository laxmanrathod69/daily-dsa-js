/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const newAdj = (graph) => {
    const inDegree = new Array(graph.length).fill(0);
    const reversedAdj = Array.from({ length: graph.length }, () => []);

    graph.forEach((neighbors, node) => {
      neighbors.forEach((neighbor) => {
        reversedAdj[neighbor].push(node);
        inDegree[node]++;
      });
    });

    return { reversedAdj, inDegree };
  };

  // Fine Safe Nodes using BFS, Topological Sort
  const queue = [];
  const safeNodes = [];
  const { reversedAdj, inDegree } = newAdj(graph);

  // Add nodes with 0 in-degree to queue
  inDegree.forEach((degree, node) => {
    if (degree === 0) queue.push(node);
  });

  while (queue.length) {
    const node = queue.shift();
    safeNodes.push(node);

    reversedAdj[node].forEach((neighbor) => {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    });
  }

  return safeNodes.sort((a, b) => a - b);
};

const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
console.log(eventualSafeNodes(graph));
