// Undirect Graph: Cycyle detection
class Graph {
  constructor() {
    this.adjacensyList = {};
  }

  // Add Vertex (node)
  addVertex(vrtx) {
    if (this.adjacensyList[vrtx]) {
      return false;
    }
    this.adjacensyList[vrtx] = [];
    return true;
  }

  // Add Edge (connectionn)
  addEdge(vrtx1, vrtx2) {
    if (!this.adjacensyList[vrtx1] && !this.adjacensyList[vrtx2]) {
      return false;
    }
    this.adjacensyList[vrtx1].push(vrtx2);
    this.adjacensyList[vrtx2].push(vrtx1);
    return true;
  }

  // Undirected: BFS Cycle Detection
  BFSCycleDetection(start) {
    const queue = [start];
    const visited = new Set();
    const parent = {};
    visited.add(start);
    while (queue.length) {
      let current = queue.shift();
      for (let neighbor of this.adjacensyList[current]) {
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

  // Undirected: DFS Cycyle Detection
  DFSCycleDetection(start) {
    const stack = [start];
    const visited = new Set();
    const parent = {};
    visited.add(start);
    while (stack.length) {
      let current = stack.pop();
      for (let neighbor of this.adjacensyList[current]) {
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
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1, 2);
graph.addEdge(2, 6);
graph.addEdge(6, 5);
graph.addEdge(5, 4);
graph.addEdge(4, 3);
graph.addEdge(3, 1);
console.log(graph);
// console.log(graph.BFSCycleDetection(0));
console.log(graph.DFSCycleDetection(1));
