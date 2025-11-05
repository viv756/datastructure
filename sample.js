function heaSort(arr) {
  
  buildMaxHeap(arr)

  for (let i = arr.length - 1; i >= 0; i--){
    swap(arr,0,i)
  }

}


function buildHeap(arr) {
  let n = arr.length 
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
    heapifyDown(arr,i,n)
  }
}


function heapifyDown(arr, i, size) {
  let largest = i 
  let left = i * 2 + 1
  let right = i * 2 + 2 
  

  if (left < size && arr[left] > arr[largest]) largest = left
  if (right < size && arr[right] > arr[largest]) largest = right 
  
  if (largest !== i) {
    swap(arr, i, j)
    heapify(arr,largest,size)
  }
}


function swap(arr, i, j) {
  [arr[i],arr[j]] = [arr[j],arr[i]]
}