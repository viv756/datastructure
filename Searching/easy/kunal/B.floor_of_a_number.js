function floorOfANumber(arr,target) {
  let left = 0
  let right = arr.length-1

  while (left <= right) {
    let mid = Math.floor((left+right)/2)

    if (arr[mid] === target) {
      return arr[mid]
    } else if (target > arr[mid]) {
      left = mid+1
    } else {
      right = mid-1
    }
  }

  return right
}

// Given a sorted array and a value x, find the element of the floor of x. The floor of x is the largest element in the array smaller than or equal to x.