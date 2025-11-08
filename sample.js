class pQueue{
  constructor() {
    this.heap = []
  }


  getParentIndex(index) {
    return Math.floor((index/2) - 1)
  }

  getLeftIndex(index) {
    return 2 * index + 1
  }

  getRightIndex(index) {
    return 2 * index + 2
  }


  enqueue(value, priority) {
    const node = { value, priority }
    this.heap.push(node)
    this.heapifyUp()
  }

  heapifyUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      if (this.heap[parentIndex].priority >= this.heap[index].priority) break
      swap 
      index = parentIndex
    }
  }
}