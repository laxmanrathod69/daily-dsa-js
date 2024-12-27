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
  DFSHasCycle() {
    const visited = new Set();
    const recStack = new Set();
    const dfs = (vrtx) => {
      visited.add(vrtx);
      recStack.add(vrtx);
      for (const neighbour of this.adjacencyList[vrtx]) {
        if (!visited.has(neighbour)) {
          if (dfs(neighbour)) {
            return true;
          }
        } else if (recStack.has(neighbour)) {
          return true;
        }
      }
      recStack.delete(vrtx);
      return false;
    };

    // Check from each vertex (for disconnected components)
    for (const vertext in this.adjacencyList) {
      if (!visited.has(vertext)) {
        if (dfs(vertext)) {
          return true;
        }
      }
    }
    return false;
  }
}

const graph = new Graph();
[1, 2, 3, 4].forEach((vrtx) => graph.addVertex(vrtx));
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 1);
console.log(graph);
// console.log(graph.BFSCycleDetection(1));
console.log(graph.DFSHasCycle());
