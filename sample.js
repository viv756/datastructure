class Naode {
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
        return;
      } else {
        queue.push(current.left);
      }

      if (current.right === null) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  search(data) {
    if (this.root === null) return;

    function rec(node) {
      if (!node) return null;
      if (node.data === data) return node;
      rec(node.left);
      rec(node.right);
    }

    rec(this.root);
  }
}