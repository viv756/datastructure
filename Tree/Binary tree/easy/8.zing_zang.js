/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

// “I perform a level-order traversal using a deque, but I use a reverse flag to control direction.
// When traversing left-to-right, I remove nodes from the front and push children to the end.
// When traversing right-to-left, I remove nodes from the back and unshift children to the front in reverse order.
// After processing each level, I flip the flag so that the next level goes in the opposite direction.
// This gives a zigzag pattern efficiently in O(n) time.”

var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const result = [];
  // We need a data structure that allows adding/removing from both ends efficiently —
  // that’s why we use a deque (here simulated with a simple array).
  const deque = [root];
  let reverse = false;

  while (deque.length > 0) {
    const size = deque.length;
    const level = [];

      for (let i = 0; i < size; i++) {
        // left to right
      if (!reverse) {
        const node = deque.shift();
        level.push(node.val);
        if (node.left) deque.push(node.left);
        if (node.right) deque.push(node.right);
      } else {
        //   right to left
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
