// LeetCode: 733. Flood Fill
const floodFill = (image, sr, sc, color) => {
  const rows = image.length;
  const cols = image[0].length;
  const originalColor = image[sr][sc];
  if (originalColor === color) {
    return image;
  }
  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      image[row][col] !== originalColor
    ) {
      return;
    }
    image[row][col] = color;

    dfs(row + 1, col); // Down
    dfs(row - 1, col); // Up
    dfs(row, col + 1); // Right
    dfs(row, col - 1); // Left
  };
  dfs(sr, sc);
  return image;
};
const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const sr = 1,
  sc = 1,
  color = 2;
console.log(floodFill(image, sr, sc, color)); // Output: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
