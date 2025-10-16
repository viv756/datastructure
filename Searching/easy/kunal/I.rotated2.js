/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // Handle duplicates first
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
            continue;
        }
        if (nums[left] === nums[mid]) {
            left++;
            continue;
        }
        if (nums[mid] === nums[right]) {
            right--;
            continue;
        }


        // Even if it happens to be equal ([2, 2, 2, 3, 1]), it’s still a sorted left side, and you want to treat it that way if you’re not in the duplicate case. thats why use =
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return false;
};


