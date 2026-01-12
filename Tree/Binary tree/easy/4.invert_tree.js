// How to Explain in Simple Words
// We use a queue to visit nodes one by one (like reading the tree level by level).
// For each node:
// First, add its children to the queue so we don’t lose track of them.
// Then, swap its left and right children.
// Keep doing this until the queue is empty.
// At the end, the whole tree is mirrored.

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null 

    const queue = [root]

    while(queue.length > 0){
        const current = queue.shift()

       if(current.left) queue.push(current.left)
       if(current.right) queue.push(current.right)

        let temp = current.left 
        current.left = current.right
        current.right = temp
    }

    return root
};


var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;      
};