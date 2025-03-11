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

function findCircleNum(isConnected) {
  const n = isConnected.length;
  const ds = new DisjointSet(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        ds.union(i, j);
      }
    }
  }

  let provinces = 0;

  for (let i = 0; i < n; i++) {
    if (ds.find(i) === i) {
      provinces++;
    }
  }

  return provinces;
}

const isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

console.log(findCircleNum(isConnected));
