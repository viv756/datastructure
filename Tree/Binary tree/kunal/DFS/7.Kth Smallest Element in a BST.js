var kthSmallest = function(root, k) {
    let count = 0;

    function inorder(node) {
        if (!node) return null;

        const left = inorder(node.left);
        if (left !== null) return left;  // short-circuit if found

        count++;
        if (count === k) return node.val;

        return inorder(node.right); // short-circuit propagation
    }

    return inorder(root);
};



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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let ans
    let count = 0
    function inOrder(root) {
        if (!root) return   ///if root is null nothing to do
        inOrder(root.left)
        count++
        if (count === k) {      //when count===k store the value to ans
            return ans = root.val
        }
        inOrder(root.right)
    }
    inOrder(root)
    return ans
};