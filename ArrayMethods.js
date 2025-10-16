
// Adding and Removing Elements
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop();   // [1, 2, 3]
arr.unshift(0); // [0, 1, 2, 3]
arr.shift();    // [1, 2, 3]
arr.splice(1, 1, 5); // [1, 5, 3] (replace 1 element at index 1 with 5)
const sliced = arr.slice(1, 2); // [5] (copy elements from index 1 to 2)

//  Searching and Filtering
const arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));      // 2
console.log(arr.includes(4));     // true
console.log(arr.find(x => x > 3)); // 4
console.log(arr.filter(x => x > 3)); // [4, 5]

//  Iterating Over Arrays
const arr = [1, 2, 3];
arr.forEach((x) => console.log(x * 2)); // Logs: 2, 4, 6
const doubled = arr.map((x) => x * 2); // [2, 4, 6]

// Sorting and Reversing
const arr = [3, 1, 4, 1, 5];
arr.sort((a, b) => a - b); // [1, 1, 3, 4, 5]
arr.reverse(); // [5, 4, 3, 1, 1]


// Combining and Slicing
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]
console.log(arr1.join('-')); // "1-2"


// Reducing Arrays
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, cur) => acc + cur, 0); // 10


// Array Transformation
const arr = [1, [2, [3, [4]]]];
console.log(arr.flat(2)); // [1, 2, 3, [4]]


// Checking Properties
const arr = [1, 2, 3];
console.log(arr.some((x) => x > 2)); // true
console.log(arr.every((x) => x > 0)); // true


// Copying and Filling
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // [1, 0, 0, 4]
arr.copyWithin(1, 2); // [1, 3, 4, 4]


// Array Creation
console.log(Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']
console.log(Array.isArray([1, 2, 3])); // true


// Miscellaneous
const arr = [10, 20, 30];
console.log(arr.at(-1)); // 30 (last element)
