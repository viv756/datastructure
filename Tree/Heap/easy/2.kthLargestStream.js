/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = [];

  // Initialize heap with given numbers
  for (let num of nums) {
    this.add(num);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  // Add new value to heap
  this.heap.push(val);
  this._heapifyUp();

  // If heap size exceeds k, remove smallest element
  if (this.heap.length > this.k) {
    this._removeMin();
  }

  // The root (smallest in heap) is the kth largest overall
  return this.heap[0];
};

// --------------------
// Helper methods
// --------------------

// Move the new element upward to maintain heap order
KthLargest.prototype._heapifyUp = function () {
  let index = this.heap.length - 1;

  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] <= this.heap[index]) break;

    [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
    index = parentIndex;
  }
};

// Remove smallest (root) when heap exceeds k
KthLargest.prototype._removeMin = function () {
  if (this.heap.length === 0) return null;
  if (this.heap.length === 1) return this.heap.pop();

  const min = this.heap[0];
  this.heap[0] = this.heap.pop();
  this._heapifyDown();
  return min;
};

// Restore heap property from top-down
KthLargest.prototype._heapifyDown = function () {
  let index = 0;
  const length = this.heap.length;

  while (2 * index + 1 < length) {
    let smallest = 2 * index + 1; // left child
    const right = 2 * index + 2;

    if (right < length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (this.heap[index] <= this.heap[smallest]) break;

    [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
    index = smallest;
  }
};
