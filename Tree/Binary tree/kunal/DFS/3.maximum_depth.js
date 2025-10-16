var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    const queue = [];
    queue.push(root);
    let depth = 0;

    while (queue.length > 0) {
        depth++;

        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return depth;    
};



// Postorder (Left → Right → Node)
var maxDepth = function(root) {
    if (!root) return 0;   // empty tree → depth 0

    const dfs = function(node) {
        if (!node) return 0;

        const l = dfs(node.left);
        const r = dfs(node.right);

        return 1 + Math.max(l, r); // current depth = 1 + max of children
    };

    return dfs(root);
};
