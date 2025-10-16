/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const listValues = []
    let curr = head
    while (curr) {
        listValues.push(curr.val)
        curr = curr.next
  }
  
  let right = listValues.length - 1
    for (let left = 0; left < listValues.length / 2; left++) {
        if (listValues[left] !== listValues[right]) {
            return false
        }
        right--
    }

    return true

  
  //  let right = listValues.length - 1
  //   let left = 0
  //   while (left < right && listValues[left] === listValues[right]) {
  //       left++
  //       right--
  //   }

  //   return left >= right
  

};




//  anothe approach reverse list and check

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverse = function(head){

    let prev = null 
    let curr = head

    while(curr){
        let next = curr.next 
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

var isPalindrome = function (head) {
 
 let slow = head
 let fast = head 

 while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
 }

 let rev = reverse(slow)

 while(rev){
    if(rev.val !== head.val){
        return false
    }
    rev = rev.next
    head = head.next
 }

 return true

};