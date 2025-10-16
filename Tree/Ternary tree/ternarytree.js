class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.middle = null;
    this.right = null;
  }
}

class TernaryTree {
  constructor() {
    this.root = null; // Initialize the root of the tree to null
  }

  // Insert a node in the ternary tree
  insert(data) {
    const newNode = new Node(data); // Create a new node with the given data
    if (this.root === null) {
      this.root = newNode; // If the tree is empty, set the root to the new node
    } else {
      this.insertNode(this.root, newNode); // Otherwise, insert the node in the appropriate position
    }
  }

  // Helper method to insert a node in the ternary tree
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      // If the new node's data is less than the current node's data, go to the left subtree
      if (node.left === null) {
        node.left = newNode; // If the left child is null, insert the new node here
      } else {
        this.insertNode(node.left, newNode); // Otherwise, recursively insert in the left subtree
      }
    } else if (newNode.data === node.data) {
      // If the new node's data is equal to the current node's data, go to the middle subtree
      if (node.middle === null) {
        node.middle = newNode; // If the middle child is null, insert the new node here
      } else {
        this.insertNode(node.middle, newNode); // Otherwise, recursively insert in the middle subtree
      }
    } else {
      // If the new node's data is greater than the current node's data, go to the right subtree
      if (node.right === null) {
        node.right = newNode; // If the right child is null, insert the new node here
      } else {
        this.insertNode(node.right, newNode); // Otherwise, recursively insert in the right subtree
      }
    }
  }

  // Pre-order traversal (root, left, middle, right)
  preorder(node = this.root) {
    if (node !== null) {
      console.log(node.data); // Visit the root node
      this.preorder(node.left); // Traverse the left subtree
      this.preorder(node.middle); // Traverse the middle subtree
      this.preorder(node.right); // Traverse the right subtree
    }
  }

  // In-order traversal (left, root, middle, right)
  inorder(node = this.root) {
    if (node !== null) {
      this.inorder(node.left); // Traverse the left subtree
      console.log(node.data); // Visit the root node
      this.inorder(node.middle); // Traverse the middle subtree
      this.inorder(node.right); // Traverse the right subtree
    }
  }

  // Post-order traversal (left, middle, right, root)
  postorder(node = this.root) {
    if (node !== null) {
      this.postorder(node.left); // Traverse the left subtree
      this.postorder(node.middle); // Traverse the middle subtree
      this.postorder(node.right); // Traverse the right subtree
      console.log(node.data); // Visit the root node
    }
  }
}

// Example usage:
const ternaryTree = new TernaryTree();

ternaryTree.insert(10);
ternaryTree.insert(5);
ternaryTree.insert(15);
ternaryTree.insert(5); // Middle child of root
ternaryTree.insert(12);
ternaryTree.insert(5); // Middle child of first left child

console.log("Pre-order traversal:");
ternaryTree.preorder(); // Output: 10 5 5 5 15 12

console.log("In-order traversal:");
ternaryTree.inorder(); // Output: 5 5 5 10 12 15

console.log("Post-order traversal:");
ternaryTree.postorder(); // Output: 5 5 5 12 15 10
