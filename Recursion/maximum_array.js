function max(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const maxRest = max(arr.slice(1));

  return arr[0] < maxRest ? arr[0] : maxRest;
}

console.log(max([1, 5, 3, 10, 8, 20, 4, -1]));



function print(arr, i = arr.length - 1) {
  if (i === 0) return arr[i];

  const maxRest = print(arr, i - 1);

  return maxRest > arr[i] ? maxRest : arr[i];
}

console.log(print([1, 4, 5, 1, 9, 3, 6, 10, 2, 5, 2]));
