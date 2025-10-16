
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
