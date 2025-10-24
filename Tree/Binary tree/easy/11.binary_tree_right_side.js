var rightSideView = function (root) {
    if (!root) return []

    const queue = [root]
    const res = []

    while (queue.length > 0) {
        const level = []
        const size = queue.length

        for (let i = 0 ;i<size; i++) {
            const node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(level[size - 1])
    }

    return res
};