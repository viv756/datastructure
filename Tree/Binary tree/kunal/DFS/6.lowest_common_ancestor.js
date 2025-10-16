var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (p.val > root.val && q.val > root.val) {
      // both p and q are in the RIGHT subtree
      root = root.right;
    } else if (p.val < root.val && q.val < root.val) {
      // both p and q are in the LEFT subtree
      root = root.left;
    } else {
      // p and q are on different sides OR one is the root itself
      return root;
    }
  }
};
