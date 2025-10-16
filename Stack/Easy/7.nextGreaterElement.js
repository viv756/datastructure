var nextGreaterElement = function (nums1, nums2) {
  const result = [];

  for (let num1 of nums1) {
    for (let i = 0; i < nums2.length; i++) {
      if (nums2[i] === num1) {
        for (j = i + 1; j < nums2.length; j++) {
          if (nums2[j] > num1) {
            result.push(nums2[j]);
            break;
          } else {
            result.push(-1);
            break;
          }
        }
        break;
      }
    }
  }

  return result;
};

var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = {};

  for (let n of nums2) {
    while (stack.length && n > stack[stack.length - 1]) {
      map[stack.pop()] = n;
    }
    stack.push(n);
  }

  for (let n of stack) {
    map[n] = -1;
  }

  return nums1.map((num) => map[num]);
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
