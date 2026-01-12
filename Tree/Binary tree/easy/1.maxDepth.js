/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// const root = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(4), new TreeNode(5)),
//   new TreeNode(3)
// );

// BFS
var maxDepth = function (root) {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;
  while (queue.length > 0) {
    depth++;

    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return depth;
};

// DFS

var maxDepth = function (root) {
  if (!root) return 0;

  const stack = [[root, 1]]; // [node, depth]
  let maxDepth = 0;

  while (stack.length > 0) {
    const [node, depth] = stack.pop();
    console.log("Visiting:", node.val, "Depth:", depth);

    maxDepth = Math.max(maxDepth, depth);

    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }

  return maxDepth;
};


// top down
// traverse left and right subtree. increase depth while recursing
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDepth = 0;

  function tranversal(node, depth) {
    maxDepth = Math.floor(maxDepth, depth);
    node.left && tranversal(node.left, depth + 1);
    node.right && tranversal(node.right, depth + 1);
  }

  tranversal(root, 1);
  return maxDepth;
};


// bottom up 
var maxDepth = function (root) {
  if (!root) return 0;
 let leftMax = maxDepth(root.left)
 let rightMax = maxDepth(root.right)
 
  return 1 + Math.max(leftMax,rightMax)
};