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
 * @return {number[]}
 */


var averageOfLevels = function (root) {
  if (!root) return null;

  const queue = [root];
  const res = [];

  while (queue.length > 0) {
    let n = queue.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(sum / n);
  }

  return res;
};
