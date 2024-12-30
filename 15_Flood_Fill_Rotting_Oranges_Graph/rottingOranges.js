// LeetCode: 994. Rotting Oranges
const orangesRotting = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [1, 0], // Down
    [-1, 0], // Up
    [0, 1], // Right
    [0, -1], // Left
  ];

  let queue = []; // To store the rotten oranges with their timestamps
  let freshCount = 0;

  // Initialize the queue with all rotten oranges and count fresh oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c, 0]); // [row, col, minutes]
      } else if (grid[r][c] === 1) {
        freshCount++;
      }
    }
  }

  let minutes = 0;

  // Perform BFS
  while (queue.length > 0) {
    const [row, col, time] = queue.shift();
    minutes = time;

    // Check all 4-directionally adjacent cells
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // If the adjacent cell is a fresh orange, rot it
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 1
      ) {
        grid[newRow][newCol] = 2; // Mark it as rotten
        freshCount--; // Decrease fresh orange count
        queue.push([newRow, newCol, time + 1]); // Add it to the queue with the new timestamp
      }
    }
  }

  // If there are still fresh oranges left, return -1
  return freshCount === 0 ? minutes : -1;
};

const grid1 = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(orangesRotting(grid1)); // Output: 4
