function rotationCount(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If mid element is greater than right, pivot is in right half
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Else pivot is in left half (including mid)
        else {
            right = mid;
        }
    }

    // left == right == pivot index
    return left;
}


// duplicate


/**
 * Finds the index of the smallest element (pivot) in a rotated sorted array
 * Works even if there are duplicates
 * @param {number[]} nums
 * @return {number} index of pivot
 */
var findRotationCount = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Minimum must be to the right of mid
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            // Minimum is at mid or to the left of mid
            right = mid;
        } else {
            // nums[mid] === nums[right], can't decide → shrink window
            right--;
        }
    }

    // left == right → index of smallest element
    return left;
};

// Example usage:
console.log(findRotationCount([4, 5, 6, 7, 0, 1, 2]));  // 4 (rotation count is 4)
console.log(findRotationCount([2, 2, 2, 3, 4, 2]));    // 5
console.log(findRotationCount([1, 1, 1, 1]));          // 0
