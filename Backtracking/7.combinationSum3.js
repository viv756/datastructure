/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];

  let backTrack = (remainingSum, path, start) => {
    if (remainingSum === 0 && path.length === k) {
      res.push([...path]);
    }

    if (path.length === k) return;

    for (let i = start; i <= 9; i++) {
      path.push(i);
      backTrack(remainingSum - i, path, i + 1);
      path.pop();
    }
  };

  backTrack(n, [], 1);
  return res;
};
