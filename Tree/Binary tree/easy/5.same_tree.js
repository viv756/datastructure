var isSameTree = function(p, q) {
    const queue = [[p,q]]

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