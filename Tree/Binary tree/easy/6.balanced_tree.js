// "The height of a binary tree is the length of the longest path from the root to any leaf node. To find it, I need to compare the height of the left subtree and the right subtree, and take the maximum.""At every node, I’ll ask the same question:
// ‘What is the height of my left subtree? What is the height of my right subtree?’
// Once I know both, the height of the  current node is 1 (itself) plus the larger of the two."

var isBalanced = function (root) {
  if (!root) return true; // Empty tree is balanced

  // Helper to calculate height of a subtree
  function height(node) {
    // The height of a tree = the number of edges (or nodes) on the longest path from a node down to a leaf.
    if (!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  }

  // Compute left and right heights
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  // Check current node + recurse into subtrees
  // check current node is balanced an we need to check that both left subtree and right subtree need to be balanced to become a balanced tree
  return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

// "Instead of separately checking height and balance, I combine them in one DFS traversal.
// Each recursive call returns the height of the subtree if it’s balanced.
// If I ever find that a subtree is unbalanced, I return -1 and stop further computation.
// This way, each node is visited only once, so the time complexity is O(n) and space complexity is O(h) (recursion stack height)."

var isBalanced = function(root) {
    function checkHeight(node) {
        if (!node) return 0; // base case: height of null is 0

        // check left subtree
        let leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1; // left subtree not balanced

        // check right subtree
        let rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1; // right subtree not balanced

        // if difference is more than 1, not balanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // else return height of this subtree
        return 1 + Math.max(leftHeight, rightHeight);
    }

    return checkHeight(root) !== -1;
};
