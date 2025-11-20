var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);

  let res = [];

  let backTrack = (path, choices) => {
    if (choices.length === 0) {
      res.push([...path]);
      return;
    }

    console.log(path, "p")
    console.log(choices,"c")

    for (let i = 0; i < choices.length; i++) {
      // Skip duplicates: only use the first of duplicate group
      if (i > 0 && choices[i] === choices[i - 1]) continue;

      path.push(choices[i]);
      console.log(path,"path")

      // Remove current choice
      let remaining = [...choices.slice(0, i), ...choices.slice(i + 1)];
      console.log(remaining,"rem")

      backTrack(path, remaining);

      path.pop();
    }
  };

  backTrack([], nums);
  return res;
};

permuteUnique([1,1,2])