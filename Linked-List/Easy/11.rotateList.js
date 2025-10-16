var rotateRight = function(head, k) {
  if (!head || !head.next || k === 0) return head;

  // Step 1: Compute the length and get the tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Compute effective rotation
  let position = k % length;
  if (position === 0) return head;

  // Step 3: Find new tail (length - position - 1)
  let current = head;
  for (let i = 0; i < length - position - 1; i++) {
    current = current.next;
  }

  // Step 4: Rotate
  let newHead = current.next;
  current.next = null;
  tail.next = head;

  return newHead;
};
