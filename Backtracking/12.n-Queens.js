/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];

  let board = Array.from({ length: n }, () => Array(n).fill("."));

  let backTrack = (board, row, colSet, digSet, antiDigSet) => {
    if (row === n) {
      res.push(transform(board));
    }

    // In the N-Queens problem, we always place the first queen in every possible column of the first row, one by one — and then we backtrack for the rest of the rows.
    for (let col = 0; col < n; col++) {
      if (colSet.has(col) || digSet.has(row - col) || antiDigSet.has(row + col)) continue;

      board[row][col] = "Q";
      colSet.add(col);
      digSet.add(row - col);
      antiDigSet.add(row + col);

      backTrack(board, row + 1, colSet, digSet, antiDigSet);

      board[row][col] = ".";
      colSet.delete(col);
      digSet.delete(row - col);
      antiDigSet.delete(row + col);
    }
  };

  backTrack(board, 0, new Set(), new Set(), new Set());

  return res;
};

function transform(board) {
  let newBoard = [];
  for (let i = 0; i < board.length; i++) {
    newBoard.push(board[i].join(""));
  }

  return newBoard;
}
