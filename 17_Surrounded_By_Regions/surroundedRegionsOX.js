// LeetCode: 130. Surrounded Regions
const solve = (board) => {
    const rows = board.length;
    const cols = board[0].length;
    const visited = new Set();
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
  
    const dfs = (row, col) => {
      visited.add(`${row},${col}`);
      for (const [drow, dcol] of directions) {
        const newRow = row + drow;
        const newCol = col + dcol;
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          !visited.has(`${newRow},${newCol}`) &&
          board[newRow][newCol] === "O"
        ) {
          dfs(newRow, newCol);
        }
      }
    };
  
    for (let j = 0; j < cols; j++) {
      if (board[0][j] === "O") { // Top row
        dfs(0, j);
      }
      if (board[rows - 1][j] === "O") // Bottom row
        dfs(rows - 1, j);
    }
  
    for (let i = 0; i < rows; i++) {
      if (board[i][0] === "O") { // Left column
        dfs(i, 0);
      }
      if (board[i][cols - 1] === "O") { // Right column
        dfs(i, cols - 1);
      }
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === "O" && !visited.has(`${i},${j}`)) {
          board[i][j] = "X";
        }
      }
    }
    return board;
  };
  
  const board = [["O","O","O"],["O","O","O"],["O","O","O"]];
  solve(board);
  console.log(board);
  
  // Output: [["O","O","O"],["O","O","O"],["O","O","O"]]
  