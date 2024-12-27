class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add Vertices (node)
  addVertex(vrtx) {
    if (this.adjacencyList[vrtx]) {
      return false;
    }
    this.adjacencyList[vrtx] = [];
    return true;
  }

  // Add Edges (connections to each other)
  addEdge(vrtx1, vrtx2) {
    if (this.adjacencyList[vrtx1] && this.adjacencyList[vrtx2]) {
      this.adjacencyList[vrtx1].push(vrtx2);
      this.adjacencyList[vrtx2].push(vrtx1);
      return true;
    }
    return false;
  }

  // Remove Edges
  deleteEdge(vrtx1, vrtx2) {
    if (this.adjacencyList[vrtx1] && this.adjacencyList[vrtx2]) {
      this.adjacencyList[vrtx1] = this.adjacencyList[vrtx1].filter(
        (value) => value !== vrtx2
      );
      this.adjacencyList[vrtx2] = this.adjacencyList[vrtx2].filter(
        (value) => value !== vrtx1
      );
      return true;
    }
    return false;
  }

  // Remove Vertices
  deleteVertex(vrtx) {
    if (!this.adjacencyList) {
      return this.adjacencyList;
    }
    if (!this.adjacencyList[vrtx]) {
      return false;
    }
    for (let naighboar of this.adjacencyList[vrtx]) {
      this.adjacencyList[naighboar] = this.adjacencyList[naighboar].filter(
        (value) => value !== vrtx
      );
    }
    delete this.adjacencyList[vrtx];
    return true;
  }

  // BFS Traversal
  bfs(start) {
    let queue = [start];
    let visited = new Set();
    let result = [];
    visited.add(start);
    while (queue.length) {
      let vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  // DFS Traversal
  dfsRecursive(start) {
    if (!this.adjacencyList[start]) {
      return [];
    }
    const visited = new Set();
    const result = [];
    const dfs = (vrtx) => {
      visited.add(vrtx);
      result.push(vrtx);
      for (const neighbour of this.adjacencyList[vrtx]) {
        if (!visited.has(neighbour)) {
          dfs(neighbour);
        }
      }
    };
    dfs(start);
    return result;
  }
}

const graph = new Graph();
["A", "B", "C", "D", "E"].forEach((vrtx) => graph.addVertex(vrtx));

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log(graph.bfs("A"));
console.log(graph);
console.log(graph.dfsRecursive("A")); // [ 'A', 'B', 'D', 'C', 'E' ]
