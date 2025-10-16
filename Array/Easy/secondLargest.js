function secondLargest(arr) {
  
  let secondLargestNum = -Infinity
  let LargestNum = arr[0]

  for (let i = 1; i < arr.length; i++){
    if (arr[i] > LargestNum) {
      secondLargestNum = LargestNum
      LargestNum = arr[i]
    } else if (arr[i] > secondLargestNum) {
      secondLargestNum = arr[i]
    }
  }

  return secondLargestNum

}




// function secondLargest(arr) {
//   if (arr.length < 2) return null;

//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num !== largest) {
//       secondLargest = num;
//     }
//   }

//   return secondLargest === -Infinity ? null : secondLargest;
// }

console.log(secondLargest([10, 3, 5, 4, 9])); // Output: 9
