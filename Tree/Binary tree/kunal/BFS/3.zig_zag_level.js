/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    const result = [];
    const deque = [root];
    let reverse = false;

    while (deque.length > 0) {
        const size = deque.length;
        const level = [];

        for (let i = 0; i < size; i++) {
            if (!reverse) {
                const node = deque.shift();
                level.push(node.val);
                if (node.left) deque.push(node.left);
                if (node.right) deque.push(node.right);
            } else {
                const node = deque.pop();
                level.push(node.val);
                if (node.right) deque.unshift(node.right);
                if (node.left) deque.unshift(node.left);
            }
        }
        reverse = !reverse;
        result.push(level);
    }
    return result;
};