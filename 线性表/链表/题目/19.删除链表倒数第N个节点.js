/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 双指针 间隔 N 个节点 快指针到结尾时，慢指针指向倒数第N个节点
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const virtualHead = {
    val: "virtual",
    next: head,
  };

  let slowPtr = virtualHead;
  let fastPtr = slowPtr;

  let initSteps = 0;
  /** 移动快速指针 */
  while (initSteps < n) {
    fastPtr = fastPtr.next;
    initSteps++
    if (fastPtr === null) {
      return head.next;
    }
  }

  /** 同步移动快慢指针 */
  let slowPrev = slowPtr;
  while (fastPtr !== null) {
    fastPtr = fastPtr.next;
    slowPrev = slowPtr;
    slowPtr = slowPtr.next;
  }

  /** 删除 慢指针指向节点 */
  slowPrev.next = slowPtr.next;

  return virtualHead.next;
};
