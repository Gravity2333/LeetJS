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
  slow.next = null;
  // revserse
  while (next !== null) {
    const tmp = next.next;
    next.next = slow;
    slow = next;
    next = tmp;
  }

  // slow => head
  slow = head;
  while (slow && fast && slow !== fast) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};

/** Stack方式
 * 1 快慢指针 快指针一次走2节点 慢一次走1个 当快指针结束 慢指针到中点
 * 2.慢指针走的时候把val压入stack
 * 3. 从终点开始 弹出元素 比较
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  const stack = [];
  while (fast?.next && fast?.next?.next) {
    stack.push(slow.val);
    fast = fast?.next;
    fast = fast?.next;
    slow = slow?.next;
  }

  // slow到达mid
  if (fast.next === null) {
    // 奇数个
    slow = slow.next;
  } else {
    // 偶数
    stack.push(slow.val);
    slow = slow.next;
  }

  while (slow) {
    const peak = stack.pop();
    if (peak !== slow.val) return false;
    slow = slow?.next;
  }
  return true;
};

/** 反转链表方式
 * 1 快慢指针 快指针一次走2节点 慢一次走1个 当快指针结束 慢指针到中点
 * 2.慢指针走的时候反转链表
 * 3.从中点向两端走
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast?.next && fast?.next?.next) {
    fast = fast?.next;
    fast = fast?.next;

    slow = slow?.next;
  }

  if (fast?.next) {
    fast = fast?.next;
  }

  // reverse
  let curr = slow.next;
  let next = curr?.next;

  while (next) {
    const tmp = next.next;
    next.next = curr;
    curr = next;
    next = tmp;
  }
  if (slow.next) {
    slow.next.next = null;
  }

  slow.next = null;

  slow = head;

  while (slow && fast) {
    if (slow.val !== fast.val) return false;
    slow = slow?.next;
    fast = fast?.next;
  }

  return true;
};
