/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  let backTrack = (remainingSum, path, start) => {
    if (remainingSum === 0) {
      res.push([...path]);
    }

    if (remainingSum <= 0) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backTrack(remainingSum - candidates[i], path, i);
      path.pop();
    }
  };

  backTrack(target, [], 0);
  return res;
};
