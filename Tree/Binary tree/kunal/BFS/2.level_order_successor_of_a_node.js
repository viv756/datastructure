function levelOrderSuccessor(root, val) {
  if (!root) return null;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);

    if (current.val === val) {
      const node = queue[0]
      return node;
    }
  }
}
