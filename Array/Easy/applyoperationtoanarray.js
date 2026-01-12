var applyOperations = function(nums) {
    let n = nums.length;
    let newNums = new Array(n).fill(0); 
    let count = 0;

    for (let i = 0; i < n - 1; i++) {
        // skip if it is zero because in newArray there is zero
        if (nums[i] !== 0) {
            if (nums[i] === nums[i + 1]) {
                newNums[count] = nums[i] * 2;
                nums[i + 1] = 0;    
                i++; 
            } else {
                newNums[count] = nums[i]; 
            }
            count++; 
        }
    }

    //  add last element
    if (nums[n - 1] !== 0) {
        newNums[count++] = nums[n - 1];
    }

    return newNums;
};