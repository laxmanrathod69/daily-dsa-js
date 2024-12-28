class TopoLogicalSortKahnsAlgo {
  constructor() {
    this.adjacencyList = {};
    this.inDegree = {};
  }

  addVertex(vrtx) {
    if (this.adjacencyList[vrtx]) {
      return false;
    }
    this.adjacencyList[vrtx] = [];
    this.inDegree[vrtx] = 0;
    return true;
  }

  addEdge(vrtx1, vrtx2) {
    if (!this.adjacencyList[vrtx1] || !this.adjacencyList[vrtx2]) {
      return false;
    }
    this.adjacencyList[vrtx1].push(vrtx2);
    this.inDegree[vrtx2]++;
    return true;
  }

  // Topological sort BFS (Kahn's algo)
  kahnTopologicalSort() {
    if (!this.adjacencyList) {
      return undefined;
    }
    const queue = [];
    const inDegree = { ...this.inDegree };
    const visited = new Set();
    const result = [];

    for (const vertex in this.adjacencyList) {
      if (!inDegree[vertex]) {
        queue.push(vertex);
      }
    }

    while (queue.length) {
      const vertex = queue.shift();
      visited.add(vertex);
      result.push(vertex);
      for (const neighbour of this.adjacencyList[vertex]) {
        inDegree[neighbour]--;
        if (!inDegree[neighbour]) {
          queue.push(neighbour);
        }
      }
    }

    // Check for cycle
    if (result.length !== Object.keys(this.adjacencyList).length) {
      return "Cycle detected";
    }
    return result;
  }
}

const graph = new TopoLogicalSortKahnsAlgo();
[0, 1, 2, 3, 4, 5].forEach((vrtx) => graph.addVertex(vrtx));
graph.addEdge(2, 3);
graph.addEdge(3, 1);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(5, 0);
graph.addEdge(5, 2);
console.log(graph);
console.log(graph.kahnTopologicalSort()); // [ '4', '5', 0, 2, 3, 1 ]
