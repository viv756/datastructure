function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example Usage
const sortedArray = [1, 3, 5, 7, 9, 11, 15, 18];
console.log(binarySearch(sortedArray, 7)); // Output: 3
console.log(binarySearch(sortedArray, 10)); // Output: -1

// time O(log n) space O(1)
// in this binary search the value will get when left===right. if we dont get the value at left===right then loop will break. always left < right if not loop will break

// Incorrect Condition: while (left < right)
// This may cause an off-by-one error in some cases because it skips the case where left === right, potentially missing the last element.