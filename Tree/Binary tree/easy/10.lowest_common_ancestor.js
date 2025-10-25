/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left || right;
};

// “If both left and right recursive calls return a non-null value, it means that one target node was found in the left subtree and the other in the right subtree.
// Therefore, the current node is the lowest node that has both p and q as descendants — the Lowest Common Ancestor.”


// “The line return left || right ensures that if either subtree has found one of the target nodes (or even the LCA), it gets propagated upward.
// If both subtrees return non-null, the current node is the LCA.
// Otherwise, we pass the non-null result up to help higher levels detect the ancestor.”
