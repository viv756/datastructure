// Creating and Checking
const str = "Hello World";
console.log(str.length); // 11
console.log(String(123)); // "123"
console.log((123).toString()); // "123"
console.log(str.valueOf()); // "Hello World"


// Accessing Characters
console.log(str.charAt(0)); // "H"
console.log(str.at(-1)); // "d" (last char)
console.log(str.charCodeAt(1)); // 101 (UTF-16 code of "e")
console.log(str.codePointAt(1)); // 101


// Searching
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); // 7
console.log(str.includes("World")); // true
console.log(str.startsWith("Hell")); // true
console.log(str.endsWith("World")); // true
console.log(str.search(/World/)); // 6


// Extracting Parts
console.log(str.slice(0, 5)); // "Hello"
console.log(str.substring(6, 11)); // "World"
console.log(str.substr(6, 5)); // "World" (deprecated)


// Modifying
console.log(str.toLowerCase()); // "hello world"
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log("   hi   ".trim()); // "hi"
console.log("   hi   ".trimStart()); // "hi   "
console.log("   hi   ".trimEnd());   // "   hi"
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0"));   // "500"
console.log("ha".repeat(3)); // "hahaha"


// Splitting and Replacing
console.log(str.split(" ")); // ["Hello", "World"]
console.log(str.replace("World", "JS")); // "Hello JS"
console.log("foo bar foo".replaceAll("foo", "baz")); // "baz bar baz"


// Matching with Regex
console.log("abc123".match(/\d+/)); // ["123"]
console.log([... "abc123".matchAll(/\d/g)]); 
// [["1"], ["2"], ["3"]]


// Combining
console.log("Hello".concat(" ", "JS")); // "Hello JS"
console.log(["a", "b"].join("-")); // "a-b"


// Locale & Unicode
console.log("ä".localeCompare("z")); // -1 (depends on locale)
console.log("é".normalize("NFD")); // "é"


// String Creation
console.log(String.fromCharCode(72, 105)); // "Hi"
console.log(String.fromCodePoint(128512)); // 😀
console.log(Array.from("Hello")); // ["H", "e", "l", "l", "o"]


// Template & Raw
console.log(String.raw`Line1\nLine2`); // "Line1\\nLine2"
