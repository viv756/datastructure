const set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(3);
set.add(1); // Duplicate, won't be added

console.log(set); // Set(3) { 1, 2, 3 }
console.log(set.size); // 3

// Check for existence
console.log(set.has(2)); // true
console.log(set.has(4)); // false

// Delete a value
set.delete(2);
console.log(set.has(2)); // false

// Clear the set
set.clear();
console.log(set.size); // 0


// iteration

const set = new Set(['a', 'b', 'c']);

// Using for...of
for (const value of set) {
  console.log(value);
}
// Output: a, b, c

// Using forEach
set.forEach((value) => {
  console.log(value);
});
// Output: a, b, c

// Using values()
const iterator = set.values();
console.log(iterator.next().value); // a
console.log(iterator.next().value); // b
console.log(iterator.next().value); // c


// Removing Duplicates from an Array
const numbers = [1, 2, 3, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]


//  Chaining with add
const set = new Set()
  .add('apple')
  .add('banana')
  .add('cherry');

console.log(set); // Set(3) { 'apple', 'banana', 'cherry' }


// Working with Objects
const obj1 = { id: 1 };
const obj2 = { id: 2 };

const set = new Set();
set.add(obj1);
set.add(obj2);
set.add(obj1); // Duplicate object reference, won't be added again

console.log(set.size); // 2


// set operations

  // Union (Combine two sets):

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union); // Set(5) { 1, 2, 3, 4, 5 }

   // Intersection (Common elements)
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // Set(1) { 3 }


  //  Difference (Elements in one set but not the other):
  const setA = new Set([1, 2, 3]);
  const setB = new Set([3, 4, 5]);
  
  const difference = new Set([...setA].filter((x) => !setB.has(x)));
  console.log(difference); // Set(2) { 1, 2 }
  
