/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const v = {
    val: "virtual",
    next: head,
  };

  let ptr = v;
  let prev = null;
  let i = 0;

  for (; i < left; i++) {
    prev = ptr;
    ptr = ptr.next;
  }
  let startPrev = prev;
  let start = ptr;
  prev = ptr
  ptr = ptr.next

  for (; i < right; i++) {
    const tmp = ptr.next;
    ptr.next = prev;
    prev = ptr;
    ptr = tmp;
  }
  startPrev.next = prev;
  start.next = ptr;

  return v.next;
};
