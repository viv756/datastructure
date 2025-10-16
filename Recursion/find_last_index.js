function lastIndex(arr, target, i = arr.length - 1) {
  if (i < 0) return -1;

  if (arr[i] === target) return i;

  return lastIndex(arr, target, i - 1);
}

 
function lastIndex(arr, target, i = 0) {
  if (i === arr.length) return -1; // Base case: end of array

  // Recursively check the rest of the array
  const restIndex = lastIndex(arr, target, i + 1);

  // If found in the rest of the array, return that index
  if (restIndex !== -1) return restIndex; 

  // If not found later and current element matches, return current index
  if (arr[i] === target) return i;

  // Otherwise, not found
  return -1;
}
   