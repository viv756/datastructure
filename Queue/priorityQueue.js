class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // ✅ Helper methods to find parent/children indices
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  // ✅ Swap helper
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // ✅ Insert a new value with priority
  enqueue(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this.heapifyUp();
  }

  // Move the new element up to restore heap property
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex].priority >= this.heap[index].priority) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // ✅ Remove and return element with highest priority
  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  // Move down to restore heap property after removal
  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      let largest = this.getLeftChildIndex(index);
      const right = this.getRightChildIndex(index);

      if (right < length && this.heap[right].priority > this.heap[largest].priority) {
        largest = right;
      }

      if (this.heap[index].priority >= this.heap[largest].priority) break;
      this.swap(index, largest);
      index = largest;
    }
  }

  // ✅ Peek at the highest-priority element
  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  // ✅ Utility
  isEmpty() {
    return this.heap.length === 0;
  }
}
