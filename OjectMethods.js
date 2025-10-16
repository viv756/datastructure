//  Retrieving Keys, Values, and Entries
const obj = { name: 'Alice', age: 25, city: 'Paris' };

console.log(Object.keys(obj)); // ['name', 'age', 'city']
console.log(Object.values(obj)); // ['Alice', 25, 'Paris']
console.log(Object.entries(obj)); // [['name', 'Alice'], ['age', 25], ['city', 'Paris']]


// Creating and Cloning Objects
const obj = { a: 1, b: 2 };
const newObj = Object.assign({}, obj); // Shallow copy
console.log(newObj); // { a: 1, b: 2 }

const deepClone = structuredClone(obj); // Deep copy
console.log(deepClone); // { a: 1, b: 2 }

const protoObj = Object.create({ greeting: 'Hello' });
console.log(protoObj.greeting); // 'Hello'


// Merging and Freezing Objects
const obj = { a: 1 };

Object.freeze(obj);
obj.a = 2; // No effect
console.log(obj.a); // 1

const sealedObj = Object.seal({ b: 3 });
sealedObj.b = 4; // Allowed
sealedObj.c = 5; // Not allowed
console.log(sealedObj); // { b: 4 }


//  Checking Properties
const obj = { a: 1 };

console.log(Object.hasOwn(obj, 'a')); // true
console.log('a' in obj); // true
console.log(obj.hasOwnProperty('b')); // false


//  Defining Properties
const obj = {};

Object.defineProperty(obj, 'name', {
  value: 'Alice',
  writable: false, // Cannot modify the value
  enumerable: true, // Visible in Object.keys()
});

console.log(obj.name); // 'Alice'
obj.name = 'Bob'; // No effect
console.log(obj.name); // 'Alice'

Object.defineProperties(obj, {
  age: { value: 25, enumerable: true },
  city: { value: 'Paris', enumerable: true },
});

console.log(obj); // { name: 'Alice', age: 25, city: 'Paris' }


// Prototypes
const proto = { greeting: 'Hello' };
const obj = Object.create(proto);

console.log(Object.getPrototypeOf(obj)); // { greeting: 'Hello' }
Object.setPrototypeOf(obj, null);
console.log(Object.getPrototypeOf(obj)); // null


// Utility Methods
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true

const entries = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(entries);
console.log(obj); // { a: 1, b: 2 }


// Iteration
const obj = { name: 'Alice', age: 25 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25



// Advanced
const obj = { a: 1 };
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
// { value: 1, writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptors(obj));
// { a: { value: 1, writable: true, enumerable: true, configurable: true } }

