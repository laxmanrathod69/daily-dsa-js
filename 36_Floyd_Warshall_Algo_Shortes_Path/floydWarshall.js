/**
 * @param {number[][]} matrix
 * @returns {number}
 */
const shortestDistance = (mat) => {
  const n = mat.length;

  // Replace -1 with Infinity and 0 with 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === -1) mat[i][j] = Infinity;
      if (i === j) mat[i][j] = 0;
    }
  }

  // Floyd Warshall Algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        mat[i][j] = Math.min(mat[i][j], mat[i][k] + mat[k][j]);
      }
    }
  }

  // Replace Infinity with -1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === Infinity) mat[i][j] = -1;
    }
  }
  return mat;
};

const mat = [
  [0, 1, 43],
  [1, 0, 6],
  [-1, -1, 0],
];

// Output: [[0, 1, 7], [1, 0, 6], [-1, -1, 0]]
console.log(shortestDistance(mat));

// Explanation: We can reach 2 from 0 as 0->1->2 and the cost will be 1+6=7 which is less than 43.
