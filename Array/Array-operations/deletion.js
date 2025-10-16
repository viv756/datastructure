// function to search a key to  be deleted
function findElement(arr, n, key) {
  let i;
  for (i = 0; i < n; i++) if (arr[i] == key) return i;
  return -1;
}

// Function to delete an element
function deleteElement(arr, n, key) {
  // Find position of element to be deleted
  let pos = findElement(arr, n, key);

  if (pos == -1) {
    console.log("not found");
    return n;
  }
  // Deleting element
  let i;
  for (i = pos; i < n - 1; i++) arr[i] = arr[i + 1];
  return n - 1;
}

let arr = [1, 2, 3, 4, 5];
let n = 5;
let key = 2;

const del = deleteElement(arr, n, key);
console.log(del);
console.log(arr);
