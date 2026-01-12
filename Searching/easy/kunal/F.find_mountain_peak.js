/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    const n = arr.length;
    let left = 0;
    let right =  n - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // we compare middle with its next element
        if (arr[mid] > arr[mid + 1]) {
            // Peak is on the left side (including mid)
            right = mid;
        } else {
            // Peak is on the right side (excluding mid)
            left = mid + 1;
        }
    }

    // Left and right converge at peak
    return left;
      
};

// If arr[mid] < arr[mid+1], we’re on the ascending slope — so the peak must be to the right.
// If arr[mid] > arr[mid+1], we’re on the descending slope — so the peak must be at mid or to the left.”