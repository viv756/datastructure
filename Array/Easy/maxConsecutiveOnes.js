var findMaxConsecutiveOnes = function (nums) {
  let maxOnes = 0;
  let currentOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentOnes++;
    } else {
      currentOnes = 0;
    }
    maxOnes = Math.max(currentOnes, maxOnes);
  }

  return maxOnes;
};
