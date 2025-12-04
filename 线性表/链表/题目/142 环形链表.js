/**
 * 快慢指针 如果有环 那么快慢指针一定相遇
 * 相遇后的点 ， 安排两个指针 一个从头走 一个从相遇位置走 相遇的点 为环绕点
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slowPtr = head;
  let fastPtr = head;

  do {
    /** 一次 2steps */
    fastPtr = fastPtr?.next || null;
    fastPtr = fastPtr?.next || null;

    /** 一次 1 step */
    slowPtr = slowPtr?.next || null;
  } while (fastPtr !== null && fastPtr !== slowPtr);

  if (fastPtr === null) {
    /** 无环 返回null */
    return null;
  }

  /** 有环 */
  fastPtr = head;
  while (fastPtr !== slowPtr) {
    fastPtr = fastPtr?.next;
    slowPtr = slowPtr?.next;
  }

  return slowPtr;
};
