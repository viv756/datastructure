var maxSlidingWindow = function (nums, k) {
  const res = [];

  for (let i = 0; i <= nums.length - k; i++) {
    console.log("f");

    let left = i;
    let max = nums[left];

    while (left < i + k) {
      max = Math.max(max, nums[left]);
      left++;
    }

    res.push(max);
  }

  console.log(res);

  return res;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
