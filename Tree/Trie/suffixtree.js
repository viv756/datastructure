class SuffixTrieNode {
  constructor() {
    this.children = {};  // Dictionary to hold child nodes
    this.isEndOfWord = false;  // Boolean to mark the end of a suffix
  }
}
class SuffixTrie {
  constructor(text) {
    this.root = new SuffixTrieNode();  // Root node of the trie
    this.buildSuffixTrie(text);
  }

  // Method to build the suffix trie
  buildSuffixTrie(text) {
    for (let i = 0; i < text.length; i++) {
      this.insertSuffix(text.substring(i));
    }
  }

  // Method to insert a suffix into the trie
  insertSuffix(suffix) {
    let node = this.root;
    for (let char of suffix) {
      if (!node.children[char]) {
        node.children[char] = new SuffixTrieNode();  // Create a new node if it doesn't exist
      }
      node = node.children[char];  // Move to the next node
      console.log(node);
      
    }
    node.isEndOfWord = true;  // Mark the end of the suffix
  }

  // Method to search for a substring in the trie
  search(substring) {
    let node = this.root;
    for (let char of substring) {
      if (!node.children[char]) {
        return false;  // If the character is not found, return false
      }
      node = node.children[char];  // Move to the next node
    }
    return true;  // Return true if the substring is found
  }

  // Helper method to print the suffix trie
  print(node = this.root, indent = '') {
    for (let char in node.children) {
      console.log(indent + char);
      this.print(node.children[char], indent + '  ');
    }
  }
}

// Example usage:
const text = "ban";
const suffixTrie = new SuffixTrie(text);

console.log("Suffix trie for 'banana':");
suffixTrie.print();  // Print the trie

// console.log("Searching for 'nan':", suffixTrie.search("nan"));  // true
// console.log("Searching for 'ana':", suffixTrie.search("ana"));  // true
// console.log("Searching for 'ban':", suffixTrie.search("ban"));  // true
// console.log("Searching for 'apple':", suffixTrie.search("apple"));  // false
