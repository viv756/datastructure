
class TrieNode {
  constructor() {
    this.children = {}; // Dictionary to hold child nodes
    this.isEndOfWord = false; // Boolean to mark the end of a word
  }
}
 
class Trie {
  constructor() {
    this.root = new TrieNode(); // Root node of the trie
  }

  // Method to insert a word into the trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode(); // Create a new node if it doesn't exist
      }
      node = node.children[char]; // Move to the next node
    }
    node.isEndOfWord = true; // Mark the end of the word
  }

  // Method to search for a word in the trie
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false; // If the character is not found, return false
      }
      node = node.children[char]; // Move to the next node
    }
    return node.isEndOfWord; // Return true if the end of the word is reached
  }

  // Method to check if there is any word in the trie that starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false; // If the character is not found, return false
      }
      node = node.children[char]; // Move to the next node
    }  
    return true; // Return true if the prefix is found
  }

  // Optional: Method to get all words in the trie that start with a given prefix
  getWordsWithPrefix(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return []; // If the prefix is not found, return an empty array
      }
      node = node.children[char]; // Move to the next node
    }
    return this._getWordsFromNode(node, prefix); // Get all words starting from the current node
  }

  // Helper method to get all words starting from a given node
  _getWordsFromNode(node, prefix) {
    let words = [];
    if (node.isEndOfWord) {
      words.push(prefix); // If the node marks the end of a word, add it to the list
    }
    for (let char in node.children) {
      words = words.concat(this._getWordsFromNode(node.children[char], prefix + char)); // Recursively get all words from child nodes
    }
    return words;
  }
}

// Example usage:
const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("banana");

console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("apricot")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("bananaa")); // false
console.log(trie.search("appl")); // false
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("ba")); // true
console.log(trie.startsWith("abc")); // false

console.log(trie.getWordsWithPrefix("ap")); // ["apple", "app", "apricot"]
console.log(trie.getWordsWithPrefix("ba")); // ["banana"]
console.log(trie.getWordsWithPrefix("b")); // ["banana"]
console.log(trie.getWordsWithPrefix("c")); // []
