// “I solve this problem using DFS. For each node, I compute two things:

// The height of its left and right subtrees.

// The diameter candidate through that node, which is leftHeight + rightHeight.
// I update the global maximum diameter whenever I find a longer path.
// Finally, I return the height (1 + max(left,right)) so parent nodes can compute their diameters.
// This runs in O(n) time and O(h) recursion stack space, where h is the tree height.”

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

// Postorder (Left → Right → Node)
var diameterOfBinaryTree = function (root) {
  let res = 0;

  const dfs = function (node) {
    if (!node) {
      return 0;
    }

    let l = dfs(node.left);
    let r = dfs(node.right);

    res = Math.max(res, l + r);
    return 1 + Math.max(l, r);
  };

  dfs(root);
  return res;
};


// Preorder (Node → Left → Right)
// → If the work is done before recursive calls, it’s preorder.

// Inorder (Left → Node → Right)
// → If the work is done between left and right recursive calls, it’s inorder.

// Postorder (Left → Right → Node)
// → If the work is done after both recursive calls, it’s postorder.