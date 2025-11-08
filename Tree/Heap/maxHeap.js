class MaxHeap {
  constructor() {
    this.heap = []; // Initialize the heap as an empty array
  }

  // Get the parent index of a node
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get the left child index of a node
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Get the right child index of a node
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swap two elements in the heap
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Insert a new element into the heap
  insert(element) {
    this.heap.push(element); // Add the new element to the end of the heap
    this.heapifyUp(); // Restore the heap property by moving the new element up
  }

  // Move the element at the last index up to restore the heap property
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index); // Swap if the parent is less than the child
        index = parentIndex; // Move up to the parent's index
      } else {
        break;
      }
    }
  }

  // Remove and return the maximum element from the heap
  removeMax() {
    if (this.heap.length === 0) {
      return null; // If the heap is empty, return null
    }
    if (this.heap.length === 1) {
      return this.heap.pop(); // If the heap has only one element, remove and return it
    }
    const max = this.heap[0]; // The maximum element is at the root (index 0)
    this.heap[0] = this.heap.pop(); // Move the last element to the root
    this.heapifyDown(); // Restore the heap property by moving the new root down
    return max;
  }

  // Move the element at the root down to restore the heap property
  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let largerChildIndex = leftChildIndex;
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[leftChildIndex]
      ) {
        largerChildIndex = rightChildIndex; // Use the larger of the two children
      }
      if (this.heap[index] < this.heap[largerChildIndex]) {
        this.swap(index, largerChildIndex); // Swap if the parent is less than the larger child
        index = largerChildIndex; // Move down to the larger child's index
      } else {
        break;
      }
    }
  }

  // Get the maximum element without removing it
  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0]; // The maximum element is at the root (index 0)
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Get the size of the heap
  size() {
    return this.heap.length;
  }

  // Print the heap elements
  print() {
    console.log(this.heap);
  }
}

// Example usage:
const maxHeap = new MaxHeap();

maxHeap.insert(7);
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(2);
maxHeap.insert(10);

console.log("Heap elements after insertion:");
maxHeap.print(); // Output: [10, 7, 3, 2, 5]

console.log("Maximum element:", maxHeap.peek()); // Output: 10

console.log("Removing maximum element:", maxHeap.removeMax()); // Output: 10
maxHeap.print(); // Output: [7, 5, 3, 2]

console.log("Removing maximum element:", maxHeap.removeMax()); // Output: 7
maxHeap.print(); // Output: [5, 2, 3]

console.log("Heap size:", maxHeap.size()); // Output: 3
console.log("Is heap empty?", maxHeap.isEmpty()); // Output: false
