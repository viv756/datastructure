/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let water = 0;

  while (left < right) {
    // by moving smaller of leftmax and rightmax we can determine the water level. There is a taller bar on the other side that will “contain” water.
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
    }
  }

  return water;
};


// brutforce
var trap = function (height) {
  let n = height.length;
  let water = 0;

  for (let i = 0; i < n; i++) {
    let maxLeft = 0;
    let maxRight = 0;

    // find tallest bar on the left
    for (let l = 0; l <= i; l++) {
      maxLeft = Math.max(maxLeft, height[l]);
    }

    // find tallest bar on the right
    for (let r = i; r < n; r++) {
      maxRight = Math.max(maxRight, height[r]);
    }

    // trapped water at i
    water += Math.min(maxLeft, maxRight) - height[i];
  }

  return water;
};
