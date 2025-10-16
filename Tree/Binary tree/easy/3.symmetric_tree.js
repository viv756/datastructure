// Imagine the tree is standing in front of a mirror.
// Every time you look at a branch on the left, you check if the same thing is on the right.
// If both sides are empty, that’s fine (nothing = nothing).
// If only one side has a branch, it breaks the mirror.
// If both sides have the same number and their children also match in a mirror way, then it’s symmetric.
// So this function just keeps checking left vs right, right vs left, all the way down the tree.

var isSymmetric = function (root) {
  const isMirror = (n1, n2) => {
    if (!n1 && !n2) {
      return true;
    }

    if (!n1 || !n2) {
      return false;
    }

    return n1.val === n2.val && isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
  };

  return isMirror(root.left, root.right);
};



var isSymmetric = function(root) {
    if (!root) return true;

    const queue = [];
    // push left and right children of root as a pair
    queue.push(root.left);
    queue.push(root.right);

    while (queue.length > 0) {
        // take two nodes at a time
        const n1 = queue.shift();
        const n2 = queue.shift();

        // if both are null → continue
        if (!n1 && !n2) continue;

        // if one is null or values don't match → not symmetric
        if (!n1 || !n2 || n1.val !== n2.val) return false;

        // enqueue children in mirror order:
        queue.push(n1.left);
        queue.push(n2.right);

        queue.push(n1.right);
        queue.push(n2.left);
    }

    return true;
};


var isSymmetric = function(root) {
    if (!root) return true;

    const stack = [[root.left, root.right]]; // push pairs of nodes to compare

    while (stack.length > 0) {
        const [n1, n2] = stack.pop();

        // both null → symmetric at this point
        if (!n1 && !n2) continue;

        // one null and the other not → not symmetric
        if (!n1 || !n2) return false;

        // values differ → not symmetric
        if (n1.val !== n2.val) return false;

        // push mirror pairs into stack
        stack.push([n1.left, n2.right]);   // outer pair
        stack.push([n1.right, n2.left]);   // inner pair
    }

    return true;
};
