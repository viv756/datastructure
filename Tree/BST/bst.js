class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // Initialize the root of the tree to null
  }

  // Insert a node in the BST
  insert(data) {
    const newNode = new Node(data); // Create a new node with the given data
    if (this.root === null) {
      this.root = newNode; // If the tree is empty, set the root to the new node
    } else {
      this.insertNode(this.root, newNode); // Otherwise, insert the node in the appropriate position
    }
  }

  // Helper method to insert a node in the BST
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      // If the new node's data is less than the current node's data, go to the left subtree
      if (node.left === null) {
        node.left = newNode; // If the left child is null, insert the new node here
      } else {
        this.insertNode(node.left, newNode); // Otherwise, recursively insert in the left subtree
      }
    } else {
      // If the new node's data is greater than or equal to the current node's data, go to the right subtree
      if (node.right === null) {
        node.right = newNode; // If the right child is null, insert the new node here
      } else {
        this.insertNode(node.right, newNode); // Otherwise, recursively insert in the right subtree
      }
    }
  }

  // Search for a node with given data
  search(data) {
    return this.searchNode(this.root, data);
  }

  // Helper method to search for a node
  searchNode(node, data) {
    if (node === null) {
      return null; // If the node is null, the data is not found
    }
    if (data < node.data) {
      return this.searchNode(node.left, data); // Search in the left subtree
    } else if (data > node.data) {
      return this.searchNode(node.right, data); // Search in the right subtree
    } else {
      return node; // If the data matches the node's data, return the node
    }
  }

  

  // In-order traversal (left, root, right)
  inorder(node = this.root) {
    if (node !== null) {
      this.inorder(node.left); // Traverse the left subtree
      console.log(node.data); // Visit the root node
      this.inorder(node.right); // Traverse the right subtree
    }
  }

  // used for evaluating math expressions or making a copy and serialization
  // Pre-order traversal (root, left, right)
  preorder(node = this.root) {
    if (node !== null) {
      console.log(node.data); // Visit the root node
      this.preorder(node.left); // Traverse the left subtree
      this.preorder(node.right); // Traverse the right subtree
    }
  }

  // Post-order traversal (left,  right , root)
  postorder(node = this.root) {
    if (node !== null) {
      this.postorder(node.left); // Traverse the left subtree
      this.postorder(node.right); // Traverse the right subtree
      console.log(node.data); // Visit the root node
    }
  }

  // Find the minimum value in the BST
  findMinNode(node = this.root) {
    if (node === null) {
      return null; // If the tree is empty, return null
    }
    while (node.left !== null) {
      node = node.left; // Traverse to the leftmost node
    }
    return node; // Return the leftmost node (minimum value)
  }

  // Find the maximum value in the BST
  findMaxNode(node = this.root) {
    if (node === null) {
      return null; // If the tree is empty, return null
    }
    while (node.right !== null) {
      node = node.right; // Traverse to the rightmost node
    }
    return node; // Return the rightmost node (maximum value)
  }

  // Remove a node with given data
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // Helper method to remove a node
  removeNode(node, data) {
    if (node === null) {
      return null; // If the node is null, return null
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data); // Recursively remove from the left subtree
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data); // Recursively remove from the right subtree
      return node;
    } else {
      // Node with only one child or no child
      if (node.left === null && node.right === null) {
        node = null; // Remove the node
        return node;
      }
      if (node.left === null) {
        node = node.right; // Replace the node with its right child
        return node;
      }
      if (node.right === null) {
        node = node.left; // Replace the node with its left child
        return node;
      }

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      const temp = this.findMinNode(node.right);
      node.data = temp.data; // Copy the inorder successor's data to this node
      node.right = this.removeNode(node.right, temp.data); // Remove the inorder successor
      return node;
    }
  }
}

// Example usage:
const bst = new BinarySearchTree();

bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

console.log("In-order traversal:");
bst.inorder(); // Output: 5 7 9 10 13 15 17 22 25 27

console.log("Pre-order traversal:");
bst.preorder(); // Output: 15 10 7 5 9 13 25 22 17 27

console.log("Post-order traversal:");
bst.postorder(); // Output: 5 9 7 13 10 17 22 27 25 15

const searchResult = bst.search(22);
console.log("Search result for 22:", searchResult ? searchResult.data : "Not found"); // Output: Search result for 22: 22

const searchResult2 = bst.search(100);
console.log("Search result for 100:", searchResult2 ? searchResult2.data : "Not found"); // Output: Search result for 100: Not found

console.log("Minimum value in the BST:", bst.findMinNode().data); // Output: Minimum value in the BST: 5
console.log("Maximum value in the BST:", bst.findMaxNode().data); // Output: Maximum value in the BST: 27

bst.remove(22);
console.log("In-order traversal after removing 22:");
bst.inorder(); // Output: 5 7 9 10 13 15 17 25 27
