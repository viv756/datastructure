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
