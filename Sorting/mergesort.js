function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate remaining elements
  // During the merging process, the while loop iterates through both left and right arrays and adds the smaller element to the result array. However, it's possible that one of the arrays (either left or right) might still have some elements left after the loop finishes. These remaining elements are already sorted, so they can be directly concatenated to the result array.
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(array);
console.log(sortedArray); // [5, 7, 23, 32, 34, 62]