  function insertElement(arr, pos, x) {
  // shift elements to the right
    // which are on the right side of pos
    
    if (pos < 0 || pos > arr.length) {
      console.log("Invalid position");
      return arr;
    }

  for (let i = arr.length - 1; i >= pos; i--) {
    arr[i + 1] = arr[i];
  }
  arr[pos] = x;
  return arr
};

let arr = [1, 2, 3, 4, 5];
let x = 100;
let pos = 2;
console.log(insertElement(arr, pos, x));
