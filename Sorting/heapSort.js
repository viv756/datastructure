// Main Heap Sort function
function heapSort(arr) {
  // Step 1: Build a Max Heap from the input array
  buildMaxHeap(arr);

  // Step 2: Repeatedly extract the largest element (root) and move it to the end
  // After each extraction, reduce the heap size by 1 and restore heap order
  for (let end = arr.length - 1; end > 0; end--) {
    swap(arr, 0, end);      // Move the max element (at root) to its correct sorted position
    heapify(arr, 0, end);   // Rebuild heap for the remaining unsorted portion
  }

  // Step 3: The array is now sorted in ascending order
  return arr;
}


// Function to build a Max Heap from an array
function buildMaxHeap(arr) {
  const n = arr.length;

  // Start from the last non-leaf node and heapify each node up to the root.
  // Leaf nodes are ignored because they already satisfy the heap property.
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, i, n);
  }
}


// Function to maintain the Max Heap property for a subtree rooted at index 'i'
function heapify(arr, i, size) {
  let largest = i;              // Assume the current node (i) is the largest
  const left = 2 * i + 1;       // Left child index
  const right = 2 * i + 2;      // Right child index

  // If left child exists and is greater than the current largest, update 'largest'
  if (left < size && arr[left] > arr[largest]) largest = left;

  // If right child exists and is greater than the current largest, update 'largest'
  if (right < size && arr[right] > arr[largest]) largest = right;

  // If the largest element is not the current node, swap and continue heapifying
  if (largest !== i) {
    swap(arr, i, largest);      // Swap parent with the larger child
    heapify(arr, largest, size); // Recursively heapify the affected subtree
  }
}


// Utility function to swap two elements in the array
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 destructuring for swapping
}


// Example usage
console.log(heapSort([5, 3, 8, 4, 1, 2, 7]));
// Output: [1, 2, 3, 4, 5, 7, 8]
