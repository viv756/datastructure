function bubbleSort(arr) {
  let n = arr.length;
  // Outer loop for each pass
  for (let i = 0; i < n - 1; i++) { // here -1 because the array will be sorted at (arr.length-1) dont need (arr.length)
    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the element is greater than the next
      if (arr[j] > arr[j + 1]) { 
        // Swap using a temporary variable
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Definition:
// Bubble Sort is a simple sorting algorithm that repeatedly compares and swaps adjacent elements if they are in the wrong order.

// How it works:
// In each pass, the largest element "bubbles" up to the end of the array.

// Steps:

// Start from the first element.

// Compare with the next element.

// Swap if the current is greater than the next.

// Repeat this process for all elements.

// Do multiple passes until the array is sorted.

// ✅ Time Complexity:
// Best Case: O(n²)

// Average Case: O(n²)

// Worst Case: O(n²)

// No early exit, even if array is already sorted.

// ✅ Space Complexity:
// O(1) – It sorts in-place and uses only a constant amount of extra memory.


function optimizedBubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // Array is sorted
  }
  return arr;
}

// ✅ Time Complexity:
// Best Case: O(n) — when array is already sorted (because of the swapped flag)

// Average Case: O(n²)

// Worst Case: O(n²)

// ✅ Space Complexity:
// O(1) – Still in-place, no extra space used.

