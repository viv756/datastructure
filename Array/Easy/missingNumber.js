var missingNumber = function(nums) {
        let res = nums.length;
        
        for (let i = 0; i < nums.length; i++) {
            res += i - nums[i];
        }
        
        return res;
};


// 🧠 Core idea behind this solution

// Sum of expected numbers − Sum of actual numbers = missing number

// But instead of computing two sums separately, this solution combines them into one variable.