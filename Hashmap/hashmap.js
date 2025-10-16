class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // Simple hash function to hash a string key to an index
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;  // Prime number to reduce collisions
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;  // Map 'a' to 1, 'b' to 2, etc.
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  
  // Method to set a key-value pair in the hashmap
  set(key, value) { 
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // Method to get a value by key from the hashmap
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // Method to remove a key-value pair from the hashmap
  remove(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

  // Method to get all keys in the hashmap
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArray.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArray;
  }

  // Method to get all values in the hashmap
  values() {
    const valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArray.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArray;
  }
}

// Example usage:
const hashMap = new HashMap();
hashMap.set("hello", "world");
hashMap.set("foo", "bar");
hashMap.set("lorem", "ipsum");

console.log(hashMap.get("hello"));  // Output: "world"
console.log(hashMap.get("foo"));    // Output: "bar"
console.log(hashMap.keys());        // Output: ["hello", "foo", "lorem"]
console.log(hashMap.values());      // Output: ["world", "bar", "ipsum"]

hashMap.remove("foo");
console.log(hashMap.get("foo"));    // Output: undefined
console.log(hashMap.keys());        // Output: ["hello", "lorem"]
console.log(hashMap.values());      // Output: ["world", "ipsum"]
