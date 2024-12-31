// LetCode: 542. 01 Matrix
const updateMatrix = (mat) => {
  const rows = mat.length;
  const cols = mat[0].length;
  const queue = [];
  const result = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        result[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length) {
    const [row, col] = queue.shift();
    for (const [dRow, dCol] of directions) {
      const newRow = dRow + row;
      const newCol = dCol + col;
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        result[newRow][newCol] > result[row][col] + 1
      ) {
        result[newRow][newCol] = result[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }
  return result;
};

const mat = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
];
console.log(updateMatrix(mat)); // Output: [[0,0,0],[0,1,0],[1,2,1]]
