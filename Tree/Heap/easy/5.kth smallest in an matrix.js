/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  // all the elements in minPriorityQueue

  let n = matrix[0].length;

  let heap = new MinPriorityQueue((x) => x.val);
  for (let i = 0; i < n; i++) {
    heap.push({ val: matrix[i][0], row: i, col: 0 });
  }

  // find the min value and increase count till k

  for (let count = 0; count < k - 1; count++) {
    let { val, row, col } = heap.pop();
    // and the next element if it is present
    if (col + 1 < n) heap.push({ val: matrix[row][col + 1], row: row, col: col + 1 });
  }

  return heap.pop().val;
};
