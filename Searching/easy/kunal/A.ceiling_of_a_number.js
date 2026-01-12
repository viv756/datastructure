function ceilingOfaNumber(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return arr[mid];
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // after end of the loop  left will be at the index were the number needs to be inserted
  return left;
}

// Given a sorted array and a value x, find index of the ceiling of x. The ceiling of x is the smallest element in an array greater than or equal to x.