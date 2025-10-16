var singleNumber = function (nums) {
  nums = nums.sort();

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
    if (i == nums.length - 1) return nums[nums.length - 1];
  }
};
