/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/** 递归方法 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;

  const nextNode = head.next;
  if (!nextNode) return head;

  const newHead = reverseList(nextNode);

  nextNode.next = head;
  head.next = null;

  return newHead;
};

/** stack 方法 */
var reverseList = function (head) {
  const stack = [];
  let current = head;
  while (current !== null) {
    stack.push(current);
    current = current.next;
  }

  current = stack.pop();
  const newHead = current;
  while (stack.length > 0) {
    const prev = stack.pop();
    current.next = prev;
    prev.next = null;
    current = prev;
  }

  return newHead || null;
};

/** 双指针 方法 */
var reverseList = function (head) {
  if (!head) return null;
  let prev = head;
  let current = head.next;

  while (current !== null) {
    const tmp = current.next;
    current.next = prev;
    prev = current;
    current = tmp;
  }
  head.next = null;
  return prev;
};

var reverseList = function (head) {
  if (!head) return head;
  let slow = head;
  let fast = head.next;
  slow.next = null;
  let tmp;
  while (fast !== null) {
    tmp = fast.next;
    fast.next = slow;
    slow = fast;
    fast = tmp;
  }
  return slow;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  if (head.next === null) {
    return head;
  }
  const next = head.next;
  head.next = null;
  const newHead = reverseList(next);
  next.next = head;
  return newHead;
};

/** 循环
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  if (head.next === null) {
    return head;
  }
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }
  return prev
};
