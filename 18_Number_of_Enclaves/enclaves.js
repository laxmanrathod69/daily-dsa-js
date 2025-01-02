// 1020. Number of Enclaves
/**
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const visited = new Set();
  const queue = [];
  let count = 0;

  // Top and bottom rows
  for (let col = 0; col < cols; col++) {
    if (grid[0][col] === 1) {
      queue.push([0, col]);
      visited.add(`0,${col}`);
    }
    if (grid[rows - 1][col] === 1) {
      queue.push([rows - 1, col]);
      visited.add(`${rows - 1},${col}`);
    }
  }

  //  Left and right columns
  for (let row = 0; row < rows; row++) {
    if (grid[row][0] === 1) {
      queue.push([row, 0]);
      visited.add(`${row},0`);
    }
    if (grid[row][cols - 1] === 1) {
      queue.push([row, cols - 1]);
      visited.add(`${row},${cols - 1}`);
    }
  }

  while (queue.length) {
    const [row, col] = queue.shift();
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 1 &&
        !visited.has(`${newRow},${newCol}`)
      ) {
        queue.push([newRow, newCol]);
        visited.add(`${newRow},${newCol}`);
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visited.has(`${row},${col}`) && grid[row][col] === 1) {
        count++;
      }
    }
  }
  return count;
};

const grid = [
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];
console.log(numEnclaves(grid)); // 3
