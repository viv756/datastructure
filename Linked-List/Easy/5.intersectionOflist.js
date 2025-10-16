/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const hashSet = new Set()

    let curr = headA
    while (curr) {
        hashSet.add(curr)
        curr = curr.next
    }
    let b = headB
    while (b) {
        if (hashSet.has(b)) {
            return b
        }
        b = b.next
    }

    return null
};


var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let a = headA
    let b = headB

    while (a !== b) {
        a = a ? a.next : headB
        b = b ? b.next : headA
    }

    return a

};