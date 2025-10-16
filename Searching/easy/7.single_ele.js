/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
// mid-- aligns mid to the first element of a pair so that our pairing logic works consistently.
        if (mid % 2 === 1) {
            mid--;
        }

        if (nums[mid] === nums[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }
    }

    return nums[left];  
};