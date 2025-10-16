const map = new Map();

// Adding key-value pairs
map.set('name', 'Alice');
map.set('age', 25);
map.set(true, 'This is a boolean key');
map.set({ id: 1 }, 'This is an object key');

// Retrieving values
console.log(map.get('name')); // Alice
console.log(map.get(true)); // This is a boolean key

// Checking for a key
console.log(map.has('age')); // true

// Getting the size of the map
console.log(map.size); // 4


// Deleting Keys and Clearing the Map

const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

console.log(map.size); // 2

map.delete('key1');
console.log(map.has('key1')); // false
console.log(map.size); // 1

map.clear();
console.log(map.size); // 0


// iteration
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);

// Iterating with `forEach`
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 25

// Using `for...of` with `entries`
for (const [key, value] of map.entries()) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25


// Working with keys(), values(), and entries()
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);

// Get all keys
for (const key of map.keys()) {
  console.log(key);
}
// Output:
// name
// age

// Get all values
for (const value of map.values()) {
  console.log(value);
}
// Output:
// Alice
// 25

// Get all entries
for (const [key, value] of map.entries()) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25



// Using Objects as Keys
const objKey = { id: 1 };
const map = new Map();
map.set(objKey, 'Object Key Example');

console.log(map.get(objKey)); // Object Key Example



// Chaining Methods

const map = new Map()
  .set('name', 'Alice')
  .set('age', 25)
  .set('city', 'Paris');

console.log(map.size); // 3
console.log(map.get('city')); // Paris
