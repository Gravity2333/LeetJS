/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var splitLink = function (head) {
  let slow = head;
  let fast = head;
  let slowPrev = head;

  while (fast !== null) {
    fast = fast?.next;
    if (fast) {
      fast = fast?.next;
    }
    slowPrev = slow;
    slow = slow.next;
  }

  // cut
  slowPrev.next = null;

  return [head, slow];
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return null;
  if (head.next === null) return head;

  /** 找到中间节点 */
  const [leftHead, rightHead] = splitLink(head);
  const sortedLeft = sortList(leftHead);
  const sortedRight = sortList(rightHead);

  const newHead = { val: "VIRTUAL", next: null };
  let currentResult = newHead;
  let currentLeft = sortedLeft;
  let currentRight = sortedRight;

  while (currentLeft && currentRight) {
    if (currentLeft.val <= currentRight.val) {
      currentResult = currentResult.next = {
        val: currentLeft.val,
        next: null,
      };
      currentLeft = currentLeft.next;
    } else {
      currentResult = currentResult.next = {
        val: currentRight.val,
        next: null,
      };
      currentRight = currentRight.next;
    }
  }

  while (currentLeft) {
    currentResult = currentResult.next = {
      val: currentLeft.val,
      next: null,
    };
    currentLeft = currentLeft.next;
  }

  while (currentRight) {
    currentResult = currentResult.next = {
      val: currentRight.val,
      next: null,
    };
    currentRight = currentRight.next;
  }

  return newHead.next;
};

/**
 * 链表交换麻烦 考虑归并排序
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return null;
  if (!head?.next) return head;
  const [splitLeft, splitRight] = splitLink(head);
  let left = sortList(splitLeft);
  let right = sortList(splitRight);
  const newHead = {
    next: null,
  };
  let newCurrent = newHead;

  while (left && right) {
    if (left.val < right.val) {
      newCurrent = newCurrent.next = {
        val: left.val,
        next: null,
      };
      left = left.next;
    } else {
      newCurrent = newCurrent.next = {
        val: right.val,
        next: null,
      };
      right = right.next;
    }
  }

  while (left) {
    newCurrent = newCurrent.next = {
      val: left.val,
      next: null,
    };
    left = left.next;
  }

  while (right) {
    newCurrent = newCurrent.next = {
      val: right.val,
      next: null,
    };
    right = right.next;
  }
  return newHead.next;
};

/** 从中点 切分链表 */
function splitLink(head) {
  let slow = head;
  let fast = head;
  while (fast?.next && fast?.next?.next) {
    fast = fast.next?.next;
    slow = slow?.next;
  }
  const right = slow.next;
  slow.next = null;
  return [head, right];
}
