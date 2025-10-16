/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head 
    let slow = head 

    while(fast !== null && fast.next !== null){
        slow = slow.next 
        fast = fast.next.next

        if(fast === slow){
            return true
        }
    }

    return false
};


function hasCycle(head) {
    let visited = new Set();  // stores seen nodes
    let current = head;

    while (current) {
        if (visited.has(current)) {
            return true;  // cycle detected
        }
        visited.add(current);
        current = current.next;
    }

    return false; // no cycle
}
