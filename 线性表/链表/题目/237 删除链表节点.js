/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let current = node;
  let nextNode = current.next;
  while (nextNode.next !== null) {
    current.val = nextNode.val;
    current = nextNode;
    nextNode = nextNode.next;
  }
  current.val = nextNode.val;
  current.next = null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let current = node;
  let next = current.next;
  while (next.next !== null) {
    current.val = next.val;
    next = next.next;
    current = current.next;
  }
  current.val = next.val;
  current.next = null;
};

/** REVIEW
 * 这题很简单 把后面节点的value换上来即可
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let current = node;
  let next = current.next;
  while (next.next !== null) {
    current.val = next.val;
    current = current.next;
    next = next.next;
  }
  current.val = next.val;
  current.next = null;
};
