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
 * @param {number} rows
 * @param {number} cols
 * @param {number[][]} operators
 * @returns {number[]}
 */

const numOfIslands = (rows, cols, operators) => {
  let countIslands = 0;

  const isVisited = Array.from({ length: rows }, () => Array(cols).fill(0));
  const connectedIslands = [];
  const ds = new DisjointSet(rows * cols);

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const isValidCell = (x, y) => x >= 0 && y >= 0 && x < rows && y < cols;

  for (const [i, j] of operators) {
    if (!isVisited[i][j]) {
      isVisited[i][j] = 1;
      countIslands++;

      for (const [dx, dy] of directions) {
        const x = i + dx;
        const y = j + dy;

        if (isValidCell(x, y) && isVisited[x][y] === 1) {
          const currentNode = i * cols + j;
          const adjNode = x * cols + y;

          if (ds.find(currentNode) !== ds.find(adjNode)) {
            countIslands--;
            ds.union(currentNode, adjNode);
          }
        }
      }
    }

    connectedIslands.push(countIslands);
  }

  return connectedIslands;
};

const operators = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
];

console.log(numOfIslands(4, 5, operators)); // Output: [1 2 3 4]
