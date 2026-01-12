var deleteDuplicates = function (head) {
  let curr = head.next;
  let prev = head;

  while (curr) {
    if (curr.val !== prev.val) {
      prev.next = curr;
      prev = prev.next;
    }
    curr = curr.next;
  }
  prev.next = null;

  return head;
};

// another
var deleteDuplicates = function (head) {
  let res = head;
  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return res;
};
