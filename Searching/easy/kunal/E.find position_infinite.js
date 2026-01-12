function infiniteArray(arr, target) {
  const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) start = mid + 1;
      else end = mid - 1;
    }
    return -1;
  };

  let start = 0;
  let end = 1;

  // if target is greater than end which means that the target is outside the window
  // so we will double the window size
  while (arr[end] < target) {
    let newStart = end + 1;
    //  move forward + windowsize covered element * 2
    end = end + (end - start + 1) * 2;
    start = newStart;
  }

  return binarySearch(arr, target, start, end);
}
