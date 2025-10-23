var isSameTree = function(p, q) {
    const queue = [[p, q]]

    while(queue.length > 0){
        const [p,q] = queue.shift()

        if(p===null && q=== null) continue
        if(!p || !q ) return false
        if(p.val !== q.val) return false

        queue.push([p.left,q.left])
        queue.push([p.right,q.right])
    }

    return true

};

var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }
    
    if (p && q && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    
    return false;    
};



// bruteforce

var isSubtree = function (root, subRoot) {
  if (!subRoot) return true; // empty tree is always a subtree
  if (!root) return false;   // main tree empty but subRoot not → false

  // if current trees match OR if left/right subtree contains it
  if (checkSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function checkSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    checkSameTree(p.left, q.left) &&
    checkSameTree(p.right, q.right)
  );
}
