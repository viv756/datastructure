// ✅ Approach 1: Extra Space
var flatten = function (root) {
  if (!root) return;
  const nodes = [];

  function preorder(node) {
    if (!node) return;
    nodes.push(node);
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
};

// ✅ Approach 2: In-Place Optimized
var flatten = function (root) {
  let current = root;
  while (current) {
    if (current.left) {
      let temp = current.left;
      while (temp.right) {
        temp = temp.right;
      }
      temp.right = current.right;
      current.right = current.left;
      current.left = null;
    }
    current = current.right;
  }
};
