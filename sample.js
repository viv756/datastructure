function isSymmetric(root) {
  if (!root) return true 
  
  const queue = [root.left, root.right]
  
  while (queue.length > 0) {
    let n1 = queue.shift()
    let n2 = queue.shift()

    if (!n1 && !n2) continue
    
    if (!n1 || !n2 || n1.val !== n2.val) {
      return false
    }

    
  }

}