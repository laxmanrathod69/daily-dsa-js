/**
 * @param {number[][]} grid
 * @param {number[]} source
 * @param {number[]} destination
 * @return {number}
 */

class Solution {
  shortestPath(grid, source, destination) {
    const n = grid.length;
    const m = grid[0].length;

    if (
      grid[source[0]][source[1]] === 0 ||
      grid[destination[0]][destination[1]] === 0
    )
      return -1;

    const queue = Array([0, source[0], source[1]]);
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    visited[source[0][source[1]]] = true;

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    while (queue.length > 0) {
      const [dist, row, col] = queue.shift();

      if (row === destination[0] && col === destination[1]) return dist;

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < n &&
          newCol < m &&
          grid[newRow][newCol] === 1 &&
          !visited[newRow][newCol]
        ) {
          visited[newRow][newCol] = true;

          queue.push([dist + 1, newRow, newCol]);
        }
      }
    }

    return -1;
  }
}

const path = new Solution();

const grid = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
];
console.log(path.shortestPath(grid, [0, 1], [2, 2])); // Output: 3
