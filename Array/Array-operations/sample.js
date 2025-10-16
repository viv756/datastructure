function insertElement(arr, pos, num) {
  if (pos < 0 || pos > arr.length) {
    return console.log("invalid position");
    
  }

  for (let i = arr.length - 1; i >= pos; i--){
    arr[i+1] = arr[i]
  }
  arr[pos] = num 
  return arr
}

function findPosition(arr, num) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === num ) return i
  }
  return -1
}

function deltion(arr, num) {
  const pos = findPosition(arr, num)
  
  if (pos === -1) {
    console.log("no value found");
    return arr
  }

  for (let i = pos; i < arr.length; i++){
    arr[i] = arr[i+1]
  }
  return arr

}

function traversal(arr) {
  for (let value of arr) {
    console.log(value);
    
  }
}

const arr = [1, 2, 4, 5]

console.log(insertElement(arr,2,3));


