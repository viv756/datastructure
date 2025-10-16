var removeElements = function (head, val) {
  if (!head) return null;

  let ans = new ListNode(0, head);
  let dummy = ans;

  while (dummy) {
    while (dummy.next && dummy.next.val === val) {
      dummy.next = dummy.next.next;
    }
    dummy = dummy.next;
  }

  return ans.next;
};
