// function gg(str) {
//   let sorted = str.split("").sort(); // correct sorting

//   for (let i = 1; i < sorted.length; i++) {
//     if (sorted[i] === sorted[i - 1]) {
//       return sorted[i];
//     }
//   }
// }

// console.log(gg("ered")); // e

const arr = [1, 2, 3, 4, 5]

let newArr = arr.map((a) => a >2)
console.log(newArr);
