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
  return prev;
};

/** REVIEW 递归方法
 * 1. 当head为null的时候 直接返回null
 * 2. 当head的next为null的时候 说明到达last 返回last
 * 3. 此时没到达last 需要先反转next，然后把next.next = head 且 head.next = null
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  const next = head.next;
  if (!next) return head;
  const last = reverseList(next);
  next.next = head;
  head.next = null;

  return last;
};

/** 非递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return null;
  let current = head;
  let next = current.next;
  while (next !== null) {
    const tmp = next.next;
    next.next = current;

    current = next;
    next = tmp;
  }
  head.next = null;
  return current;
};
