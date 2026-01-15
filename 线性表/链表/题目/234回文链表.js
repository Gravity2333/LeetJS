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
  let slow = head;
  let fast = head;
  // find mid
  while (fast?.next !== null) {
    fast = fast?.next;
    if (fast?.next) {
      fast = fast?.next;
    }
    slow = slow.next;
  }

  // slow 位于中
  let next = slow.next;
  slow.next = null
  // revserse
  while (next !== null) {
    const tmp = next.next;
    next.next = slow;
    slow = next;
    next = tmp;
  }

  // slow => head
  slow = head;
  while (slow && fast&&slow !== fast) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};
