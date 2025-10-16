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
 * @param {number} targetSum
 * @return {boolean}
 */

// BFS
var hasPathSum = function (root, targetSum) {
  if (!root) return 0;
  const queue = [[root, root.val]];
  while (queue.length > 0) {
    const [node, sum] = queue.shift();
    if (!node.left && !node.right && sum === targetSum) return true;
    if (node.left) queue.push([node.left, node.left.val + sum]);
    if (node.right) queue.push([node.right, node.right.val + sum]);
  }

  return false;
};


// DFS
var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) {
        return targetSum - root.val === 0;
    }

    targetSum -= root.val;

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);    
};


var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  // stack holds [node, currentSum]
  const stack = [[root, root.val]];

  while (stack.length > 0) {
    const [node, sum] = stack.pop();

    // if it's a leaf and the sum matches, return true
    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }

    // push children with updated sums
    if (node.right) {
      stack.push([node.right, sum + node.right.val]);
    }
    if (node.left) {
      stack.push([node.left, sum + node.left.val]);
    }
  }

  return false;
};
