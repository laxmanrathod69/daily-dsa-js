// LeetCode: 200. Number of Islands
const numIslands = (grid) => {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const bfs = (row, col) => {
    const queue = [];
    queue.push([row, col]);
    grid[row][col] = "0"; // Mark the current cell as visited by setting it to '0'

    const directions = [
      [-1, 0], // Up
      [1, 0], // Down
      [0, -1], // Left
      [0, 1], // Right
    ];

    while (queue.length > 0) {
      const [currRow, currCol] = queue.shift();

      // Explore all 4 directions
      for (const [dRow, dCol] of directions) {
        const newRow = currRow + dRow;
        const newCol = currCol + dCol;

        // Check if the new cell is within bounds and is land
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === "1"
        ) {
          queue.push([newRow, newCol]);
          grid[newRow][newCol] = "0"; // Mark it as visited
        }
      }
    }
  };

  // Iterate through the entire grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // If we find a '1', it's part of a new island
      if (grid[row][col] === "1") {
        islandCount++;
        bfs(row, col); // Perform BFS to mark all connected land as visited
      }
    }
  }

  return islandCount;
};

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(numIslands(grid1)); // Output: 1
