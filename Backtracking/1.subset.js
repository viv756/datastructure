var subsets = function (nums) {
  let res = [];

  const backTrack = (path, start) => {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      console.log(path);

      backTrack(path, i + 1);
      path.pop();
    }
  };
  backTrack([], 0);
  return res;
};

subsets([1, 2, 3]);
