/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates.sort((a, b) => a - b);

  let backTrack = (remainingSum, path, start) => {
    if (remainingSum == 0) {
      res.push([...path]);
    }

    if (remainingSum <= 0) return;

    // because of the array is sorted candidates[i] <= remainingSum
    for (let i = start; i < candidates.length && candidates[i] <= remainingSum; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      path.push(candidates[i]);
      backTrack(remainingSum - candidates[i], path, i + 1);
      path.pop();
    }
  };

  backTrack(target, [], 0);
  return res;
};
