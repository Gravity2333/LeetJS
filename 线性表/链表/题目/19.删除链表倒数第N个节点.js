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
    initSteps++;
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

// 复习 第二次写
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const virtualHead = {
    val: "v",
    next: head,
  };
  let slowPrev = virtualHead;
  let slowPtr = virtualHead;
  let fastPtr = virtualHead;

  for (let i = 0; i < n; i++) {
    fastPtr = fastPtr.next;
  }

  while (fastPtr !== null) {
    fastPtr = fastPtr.next;
    slowPrev = slowPtr;
    slowPtr = slowPtr.next;
  }

  slowPrev.next = slowPtr.next
  return virtualHead.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const virtual= {
      val: 'VIRTUAL NODE',
      next: head,
    }

    let prev = virtual
    let slow = head
    let fast = head
    for(let i=0;i<n;i++){
      fast= fast.next
    }

    while(fast !== null){
      fast = fast.next
      prev = slow
      slow = slow.next
    }

    prev.next = slow.next
    return virtual.next
};