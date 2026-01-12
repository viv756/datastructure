var nextGreaterElements = function (nums) {
  const n = nums.length;
  const res = Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      // It lets you move forward in a circular array without going out of bounds.
      const nextIndex = (i + j) % n;
      if (nums[nextIndex] > nums[i]) {
        res[i] = nums[nextIndex];
        break;
      }
    }
  }

  return res;
};

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const stack = [];
  const res = new Array(n).fill(-1);

  for (let i = 0; i < 2 * n; i++) {
    const num = nums[i % n];
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      res[stack.pop()] = num;
    }

    if (i < n) stack.push(i);
  }

  return res;
};
