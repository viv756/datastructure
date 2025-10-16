function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the smallest element in the remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap if a smaller element was found
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}



// ⏱️ Time Complexity
// Case	Comparisons	Swaps	Time
// Best Case	O(n²)	O(n)	O(n²)
// Average	O(n²)	O(n)	O(n²)
// Worst Case	O(n²)	O(n)	O(n²)

// ✅ Always makes n(n−1)/2 comparisons

// ✅ At most n-1 swaps, which is less than Bubble Sort

// 💾 Space Complexity
// O(1) → In-place sorting

// Uses only a few extra variables regardless of array size

// ❗ Is Selection Sort Stable?
// No, it is not stable in its basic form.

// Equal elements may swap and lose their original order.

