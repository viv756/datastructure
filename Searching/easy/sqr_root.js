function sqrtBinarySearch(n) {
  if (n < 2) return n; // sqrt(0) = 0, sqrt(1) = 1

  let left = 1;
  let right = Math.floor(n / 2);
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === n) {
      return mid; // Perfect square
    } else if (square < n) {
      ans = mid; // Store the best so far
      left = mid + 1; // Go right
    } else {
      right = mid - 1; // Go left
    }
  }

  return ans; // Floor value of sqrt(n)
}

console.log(sqrtBinarySearch(16)); // 4
console.log(sqrtBinarySearch(27)); // 5
