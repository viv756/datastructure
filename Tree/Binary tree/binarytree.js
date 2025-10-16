class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert in level-order (not BST rules)
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();

      if (current.left === null) {
        current.left = newNode;
        break;
      } else {
        queue.push(current.left);
      }

      if (current.right === null) {
        current.right = newNode;
        break;
      } else {
        queue.push(current.right);
      }
    }
  }

  // Search using BFS (level-order)
  search(data) {
    if (this.root === null) return null;

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.data === data) return current;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return null; // not found
  }

  // In-order traversal (Left → Root → Right)
  inorder(node = this.root) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // Pre-order traversal (Root → Left → Right)
  preorder(node = this.root) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Post-order traversal (Left → Right → Root)
  postorder(node = this.root) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  // Level-order traversal (BFS)
  levelOrder() {
    if (this.root === null) return;

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  // Helper: find deepest node
  getDeepestNode() {
    if (!this.root) return null;
    const queue = [this.root];
    let node = null;
    while (queue.length > 0) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return node;
  }

  // Helper: delete deepest node
deleteDeepestNode(deepestNode) {
  if (!this.root) return;

  const queue = [this.root];
  while (queue.length > 0) {
    const current = queue.shift();

    if (current.left) {
      if (current.left === deepestNode) {
        current.left = null;  // unlink left child
        return;
      } else {
        queue.push(current.left);
      }
    }

    if (current.right) {
      if (current.right === deepestNode) {
        current.right = null;  // unlink right child
        return;
      } else {
        queue.push(current.right);
      }
    }
  }
}


  // Delete a node by replacing with deepest node
  delete(data) {
    if (this.root === null) return;

    if (this.root.left === null && this.root.right === null) {
      if (this.root.data === data) {
        this.root = null;
      }
      return;
    }

    const queue = [this.root];
    let nodeToDelete = null;
    let current = null;

    while (queue.length > 0) {
      current = queue.shift();

      if (current.data === data) {
        nodeToDelete = current;
      }

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    if (nodeToDelete !== null) {
      const deepest = this.getDeepestNode();
      nodeToDelete.data = deepest.data; // replace data
      this.deleteDeepestNode(deepest);
    }
  }
}

// Example usage
const tree = new BinaryTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

console.log("In-order traversal:");
tree.inorder();   // 4 2 5 1 6 3 7

console.log("Pre-order traversal:");
tree.preorder();  // 1 2 4 5 3 6 7

console.log("Post-order traversal:");
tree.postorder(); // 4 5 2 6 7 3 1

console.log("Level-order traversal:");
tree.levelOrder(); // 1 2 3 4 5 6 7

console.log("Search for 5:", tree.search(5)?.data ?? "Not found"); // 5
console.log("Search for 10:", tree.search(10)?.data ?? "Not found"); // Not found

tree.delete(3);
console.log("Level-order after deleting 3:");
tree.levelOrder(); // 1 2 7 4 5 6
