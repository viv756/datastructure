var isCousins = function (root, x, y) {
  if (!root) return false;

  let queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    let foundX = false,
      foundY = false;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      // check if children are siblings
      if (node.left && node.right) {
        if (
          (node.left.val === x && node.right.val === y) ||
          (node.left.val === y && node.right.val === x)
        ) {
          return false; // same parent => not cousins
        }
      }

      // check current level for x and y
      if (node.left) {
        if (node.left.val === x) foundX = true;
        if (node.left.val === y) foundY = true;
        queue.push(node.left);
      }

      if (node.right) {
        if (node.right.val === x) foundX = true;
        if (node.right.val === y) foundY = true;
        queue.push(node.right);
      }
    }

    // after traversing one level
    if (foundX && foundY) return true; // same level, different parents
    if (foundX || foundY) return false; // found only one at this level
  }

  return false;
};

// DFS

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var isCousins = function (root, x, y) {
  function findNode(node, val) {
    if (!node) return null;
    if (node.val === val) return node;
    let l = findNode(node.left, val);
    if (l) return l;
    return findNode(node.right, val);
  }

  function level(node, target, lev) {
    if (!node) return 0;
    if (node === target) return lev;
    let l = level(node.left, target, lev + 1);
    if (l) return l;
    return level(node.right, target, lev + 1);
  }

  function isSibling(node, a, b) {
    if (!node) return false;
    return (
      (node.left === a && node.right === b) ||
      (node.left === b && node.right === a) ||
      isSibling(node.left, a, b) ||
      isSibling(node.right, a, b)
    );
  }

  let nodeX = findNode(root, x);
  let nodeY = findNode(root, y);
  return level(root, nodeX, 0) === level(root, nodeY, 0) && !isSibling(root, nodeX, nodeY);
};
