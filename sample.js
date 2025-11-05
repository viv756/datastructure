class MaxHeap{
  constructor() {
    this.heap = []
  }
  
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

  swap(index1, index2) {
    let temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp 
  }

  insert(data) {
    this.heap.push(data)
    this.heapify()
  }

  heapify() {
    let index = this.heap.length - 1
    
    while (index > 0) {
      let parentIndex = this.getParentIndex(index)

      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index)
        index = parentIndex
      } else {
        break
      }
    }
  }


  removeMax() {
    if (this.heap.length === 0) {
      return null
    }

    if (this.heap.length === 1) {
     return this.heap.pop()
    }

    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown()
    return max
  }

  heapifyDown() {
    let index = 0

    while (this.getLeftChildIndex(index) < this.heap.length) {
      let leftIndex = this.getLeftChildIndex(index)
      let rightChildIndex = this.getRightChildIndex(index)

      let largestIndex = leftIndex

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[leftIndex]) {
        largestIndex = rightChildIndex
      }

      if (this.heap[index] < this.heap[largestIndex]) {
        this.swap(index, largestIndex)
        index = largestIndex
      } else {
        break
      }

    }
    
  }

}