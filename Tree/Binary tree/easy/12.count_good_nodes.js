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
var goodNodes = function (root) {
  let count = 0;

  function dfs(node, maxSeenSoFar) {
    if (node.val >= maxSeenSoFar) {
      count += 1;
    }

    let currMax = Math.max(maxSeenSoFar, node.val);
    node.left && dfs(node.left, currMax);
    node.right && dfs(node.right, currMax);
  }

  dfs(root, -Infinity);
  return count;
};
