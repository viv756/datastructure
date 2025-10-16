var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let length = 0;
  let curr = head;

  while (curr) {
    length++;
    curr = curr.next;
  }

  let targetIndex = length - n;
  let prev = dummy;
  for (let i = 0; i < targetIndex; i++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return dummy.next;
};

// another

var removeNthFromEnd = function (head, n) {
  let res = new ListNode(0, head); // dummy before head
  let dummy = res;

  // Step 1: move head n steps ahead
  for (let i = 0; i < n; i++) {
    head = head.next;
  }

  // Step 2: move both head and dummy together until head reaches null
  while (head) {
    head = head.next;
    dummy = dummy.next;
  }

  // Step 3: dummy is just before the node to remove
  dummy.next = dummy.next.next;

  return res.next; // return new head (skip dummy)
};
