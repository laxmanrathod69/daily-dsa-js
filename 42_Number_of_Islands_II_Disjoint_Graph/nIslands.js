class DisjointSet {
  constructor(n) {
    this.parent = Array(n)
      .fill(0)
      .map((_, i) => i);
    this.size = Array(n).fill(1);
  }

  find(x) {
    if (this.parent[x] === x) return x;
    return (this.parent[x] = this.find(this.parent[x])); // Path compression
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
 * @param {string[][]} grid
 * @return {number}
 */

const numIslands = (grid) => {
  if (!grid || grid.length === 0) return 0;

  const n = grid.length;
  const m = grid[0].length;
  const ds = new DisjointSet(n * m);
  let countIslands = 0;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const isValidCell = (x, y) => x >= 0 && y >= 0 && x < n && y < m;

  // Count initial number of islands
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        countIslands++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        const currentNode = i * m + j;

        for (const [dx, dy] of directions) {
          const x = i + dx;
          const y = j + dy;

          if (isValidCell(x, y) && grid[x][y] === "1") {
            const adjNode = x * m + y;

            if (ds.find(currentNode) !== ds.find(adjNode)) {
              countIslands--;
              ds.union(currentNode, adjNode);
            }
          }
        }
      }
    }
  }

  return countIslands;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid)); // output: 1
