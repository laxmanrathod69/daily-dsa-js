// GFG: Number of Distinct Islands
const countDistinctIslands = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const dfs = (row, col, baseRow, baseCol, shape) => {
    visited.add(`${row},${col}`);
    shape.push([row - baseRow, col - baseCol]);

    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < rows &&
        newCol < cols &&
        !visited.has(`${newRow},${newCol}`) &&
        grid[newRow][newCol] === 1
      ) {
        dfs(newRow, newCol, baseRow, baseCol, shape);
      }
    }
  };

  const uniqueIslands = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited.has(`${i},${j}`) && grid[i][j] === 1) {
        const shape = [];
        dfs(i, j, i, j, shape);
        uniqueIslands.add(JSON.stringify(shape));
      }
    }
  }

  return uniqueIslands.size;
};

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

console.log(countDistinctIslands(grid)); // 1
