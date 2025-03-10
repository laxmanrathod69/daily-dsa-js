class DisjointSet {
  constructor(n) {
    this.parent = Array(n)
      .fill(0)
      .map((_, i) => i);
    this.size = Array(n).fill(1);
  }

  find(x) {
    if (this.parent[x] === x) return x;
    return (this.parent[x] = this.find(this.parent[x]));
  }

  union(u, v) {
    const parentU = this.find(u);
    const parentV = this.find(v);
    if (parentU === parentV) return;
    if (this.size[parentU] < this.size[parentV]) {
      this.parent[parentU] = parentV;
      this.size[parentV] += this.size[parentU];
    } else {
      this.parent[parentV] = parentU;
      this.size[parentU] += this.size[parentV];
    }
  }
}

/**
 * @param {number[][]} adj
 * @param {number} v
 * @param {number} e
 * @returns {number}
 */

class Solution {
  spanningTree(v, adj) {
    const ds = new DisjointSet(v);
    const edges = [];

    for (let u = 0; u < v; u++) {
      for (let [vNode, wgt] of adj[u]) {
        edges.push([wgt, u, vNode]);
      }
    }

    edges.sort((a, b) => a[0] - b[0]);

    let sum = 0;

    for (const [wgt, u, vNode] of edges) {
      if (ds.find(u) !== ds.find(vNode)) {
        sum += wgt;
        ds.union(u, vNode);
      }
    }

    return sum;
  }
}

const mst = new Solution();

const adj = [
  [
    [1, 5],
    [2, 1],
  ],
  [
    [0, 5],
    [2, 3],
  ],
  [
    [0, 1],
    [1, 3],
  ],
];

console.log(mst.spanningTree(3, adj));
