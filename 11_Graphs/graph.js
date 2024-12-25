class Graph {
  constructor() {
    this.adjacensyList = {};
  }

  // Add Vertices (node)
  addVertex(vrtx) {
    if (this.adjacensyList[vrtx]) {
      return false;
    }
    this.adjacensyList[vrtx] = [];
    return true;
  }

  // Add Edges (connections to each other)
  addEdge(vrtx1, vrtx2) {
    if (this.adjacensyList[vrtx1] && this.adjacensyList[vrtx2]) {
      this.adjacensyList[vrtx1].push(vrtx2);
      this.adjacensyList[vrtx2].push(vrtx1);
      return true;
    }
    return false;
  }

  // Remove Edges
  deleteEdge(vrtx1, vrtx2) {
    if (this.adjacensyList[vrtx1] && this.adjacensyList[vrtx2]) {
      this.adjacensyList[vrtx1] = this.adjacensyList[vrtx1].filter(
        (value) => value !== vrtx2
      );
      this.adjacensyList[vrtx2] = this.adjacensyList[vrtx2].filter(
        (value) => value !== vrtx1
      );
      return true;
    }
    return false;
  }

  // Remove Vertices
  deleteVertex(vrtx) {
    if (!this.adjacensyList) {
      return this.adjacensyList;
    }
    if (!this.adjacensyList[vrtx]) {
      return false;
    }
    for (let naighboar of this.adjacensyList[vrtx]) {
      this.adjacensyList[naighboar] = this.adjacensyList[naighboar].filter(
        (value) => value !== vrtx
      );
    }
    delete this.adjacensyList[vrtx];
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
      this.adjacensyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  // DFS Traversal
  dfs(start) {
    let stack = [start];
    let visited = new Set();
    let result = [];
    visited.add(start);
    while (stack.length) {
      let vertex = stack.pop();
      result.push(vertex);
      this.adjacensyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
console.log(graph);
// console.log(graph.bfs("A"));
console.log(graph.dfs("A"));
console.log(graph);
