// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
// 示例 1：

// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]
// 示例 2：

// 输入：head = [], val = 1
// 输出：[]
// 示例 3：

// 输入：head = [7,7,7,7], val = 7
// 输出：[]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/** 不用虚拟头节点的方式 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  /** 先判断头节点 (一直被删除的都是头节点的情况) */
  while (head && head.val === val) {
    head = head.next;
  }

  let current = head;
  while (current && current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

/** 虚拟头节点的方式 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const vritualHead = {
    val: "virtual Head",
    next: head,
  };

  let current = vritualHead;
  while (current && current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return vritualHead.next;
};

/** 虚拟头节点Prev的方式 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const vritualHead = {
    val: "virtual Head",
    next: head,
  };

  let current = vritualHead.next;
  let prev = vritualHead;
  while (current !== null) {
    if (current.val === val) {
      current = current.next;
      prev.next = current;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return vritualHead.next;
};

var removeElements2 = function (head, val) {
  const vNode = {
    val: "v",
    next: head,
  };

  let prev = vNode;
  let ptr = vNode.next;

  while (ptr !== null) {
    if (ptr.val === val) {
      // del
      prev.next = ptr.next;
      ptr = ptr.next;
    } else {
      // no del
      prev = ptr;
      ptr = ptr.next;
    }
  }

  return vNode.next;
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  const virtual = {
    val: "vritual node",
    next: head,
  };

  let current = head;
  let prev = virtual;
  while (current !== null) {
    if (current.val === val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = prev.next;
      current = current.next;
    }
  }
  return virtual.next;
};
