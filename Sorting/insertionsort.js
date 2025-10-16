function insertion(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      console.log("enterred")
      array[j + 1] = array[j]; 
      console.log(array)
      j--;
    }
     
    console.log("firt")
    array[j + 1] = current;
    console.log(array)
  }
  return array;
}

const res = insertion([1, 4, 3, 5, 6, 9]);
console.log(res); // [1, 3, 4, 5, 6, 9]


// ⏱️ Time and Space Complexity
// Time Complexity:
// Case	Time
// Best Case	O(n) ✅ (already sorted)
// Average	O(n²)
// Worst Case	O(n²) ❌ (reverse order)

// Space Complexity:
// O(1) → In-place sorting (no extra space used)

// 1️⃣ Very Simple to Understand and Implement
// Code is short and easy to follow.

// Great for teaching how sorting works.

// 2️⃣ Efficient for Small or Nearly-Sorted Arrays
// Best-case time is O(n) when the array is almost sorted.

// So it performs very well on small datasets or when sorting is mostly done already.

// 3️⃣ In-Place and Memory Efficient
// Uses no extra space — only modifies the original array.

// Space complexity is O(1).

// 4️⃣ Stable Sort
// Maintains the relative order of equal elements, which is important when sorting by multiple keys (e.g., sort by age, then name).

// 5️⃣ Real-Time Sorting
// Can sort elements as they arrive, making it useful for real-time applications like:

// Online leaderboard updates

// Sorting a hand of cards as you pick them

// ⚠️ When Not to Use Insertion Sort
// Not good for large arrays – O(n²) time makes it slow on big datasets.

// Use Merge Sort, Quick Sort, or TimSort instead for better performance on large arrays.

