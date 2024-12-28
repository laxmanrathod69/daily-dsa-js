class DirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vrtx) {
    if (this.adjacencyList[vrtx]) {
      return false;
    }
    this.adjacencyList[vrtx] = [];
    return true;
  }

  addEdge(vrtx1, vrtx2) {
    if (!this.adjacencyList[vrtx1] || !this.adjacencyList[vrtx2]) {
      return false;
    }
    this.adjacencyList[vrtx1].push(vrtx2);
    return true;
  }

  // Topological sort (DFS)
  DFSTopologicalSort() {
    if (!this.adjacencyList) {
      return undefined;
    }
    const visited = new Set();
    const stack = [];
    const dfs = (node) => {
      visited.add(node);
      if (this.adjacencyList[node]) {
        for (const neighbour of this.adjacencyList[node]) {
          if (!visited.has(neighbour)) {
            dfs(neighbour);
          }
        }
      }
      stack.push(node);
    };
    for (const vertex in this.adjacencyList) {
      if (!visited.has(vertex)) {
        dfs(vertex);
      }
    }
    return stack.reverse();
  }
}

const graph = new DirectedGraph();
[0, 1, 2, 3, 4, 5].forEach((vrtx) => graph.addVertex(vrtx));

graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 1);
graph.addEdge(4, 1);
graph.addEdge(4, 0);

console.log(graph);
console.log(graph.DFSTopologicalSort()); // [5, 4, 2, 3, 1, 0]
