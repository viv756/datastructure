/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];

  let backTrack = (path, start) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backTrack(path, i + 1);
      path.pop();
    }
  };

  backTrack([], 1);

  return res;
};
