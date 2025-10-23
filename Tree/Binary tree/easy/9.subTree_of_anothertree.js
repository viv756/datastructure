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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

      const hashRoot = serialize(root)
      const hashSubRoot = serialize(subRoot)

      return hashRoot.includes(hashSubRoot)
    
};


function serialize(root){
    let hash = ''

    let dfs = function(node){
        if(!node){
             hash = hash +"-#"
             return
        }
        hash = hash + "-" + node.val
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    return hash
}