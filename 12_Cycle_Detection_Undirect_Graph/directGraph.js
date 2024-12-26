// Direct Graph: Cycyle detection
class Graph {
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

  // Directed: BFS Cycle Detection
  BFSCycleDetection(start) {
    if (!this.adjacencyList[start]) {
      return false;
    }
    const queue = [start];
    const visited = new Set();
    const parent = {};
    visited.add(start);
    while (queue.length) {
      let current = queue.shift();
      for (let neighbor of this.adjacencyList[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
          parent[neighbor] = current;
        } else if (neighbor !== parent[current]) {
          return true;
        }
      }
    }
    return false;
  }

  // Directed: DFS Cycle detection
  DFSCycleDetection(start) {
    if (!start) {
      return undefined;
    }
    const stack = [start];
    const visited = new Set();
    const parent = {};
    visited.add(start);
    while (stack.length) {
      let current = stack.pop();
      for (let neighbor of this.adjacencyList[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
          parent[neighbor] = current;
        } else if (neighbor !== parent[current]) {
          return true;
        }
      }
    }
    return false;
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(6);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 6);
graph.addEdge(6, 2);
graph.addEdge(3, 4);
graph.addEdge(4, 6);
console.log(graph);
console.log(graph.BFSCycleDetection(1));
console.log(graph.DFSCycleDetection(1));
