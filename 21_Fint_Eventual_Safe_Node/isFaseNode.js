/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const pathVisited = new Set();
  const safeCheck = new Set();
  const safeNodes = [];

  const dfs = (node) => {
    if (safeCheck.has(node)) return true;

    if (pathVisited.has(node)) return false;

    pathVisited.add(node);

    for (const neighbor of graph[node]) {
      if (!dfs(neighbor)) {
        pathVisited.delete(node);
        return false;
      }
    }

    pathVisited.delete(node);
    safeCheck.add(node);
    return true;
  };

  // Start DFS from each node in the graph
  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) {
      safeNodes.push(i);
    }
  }

  return safeNodes;
};

const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];

console.log(eventualSafeNodes(graph)); // [2,4,5,6]
