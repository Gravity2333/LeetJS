/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const results = {
    val: "VIRTUAL HEAD",
    next: null,
  };
  let currentResult = results;
  let current1 = l1;
  let current2 = l2;
  let increase = 0;
  while (current1 || current2) {
    let val =
      (current1?.val || 0) +
      (current2?.val || 0) +
      (increase > 0 ? increase-- : 0);
    if (val >= 10) {
      val = val % 10;
      increase += 1;
    }
    currentResult = currentResult.next = {
      val,
      next: null,
    };
    if (current1) {
      current1 = current1.next;
    }
    if (current2) {
      current2 = current2.next;
    }
  }
  if (increase > 0) {
    currentResult.next = {
      val: increase,
      next: null,
    };
  }

  return results.next;
};
