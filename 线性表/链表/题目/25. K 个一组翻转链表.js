/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function canReverse(head, k) {
  let cnt = 0;
  while (cnt < k) {
    if (!head) return false;
    head = head.next;
    cnt++;
  }
  return true;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let virtualHead = { next: head };
  let currentStartNode = head;
  let prevStart = virtualHead;
  while (canReverse(currentStartNode, k, prevStart)) {
    // reverse
    let currentNode = currentStartNode;
    let next = currentNode.next;
    let cnt = 0;
    while (cnt < k - 1) {
      const tmp = next.next;
      next.next = currentNode;
      currentNode = next;
      next = tmp;
      cnt++;
    }
    prevStart.next = currentNode;
    prevStart = currentStartNode;
    currentStartNode = currentStartNode.next = next;
  }

  return virtualHead.next;
};

// ----------------------------------------
function canReverse(head, k) {
  let current = head;
  for (let i = 0; i < k - 1; i++) {
    if (!current) break;
    current = current.next;
  }

  return !!current;
}

function reverseK(head, k) {
  let prev = head;
  let wip = prev?.next;
  if (!wip) return [prev,prev];
  let tmp;
  for (let i = 0; i < k - 1; i++) {
    tmp = wip.next;
    wip.next = prev;
    prev = wip;
    wip = tmp;
  }
  head.next = wip;
  return [prev, head];
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const v = {
    next: head,
  };

  let prev = v;
  while (canReverse(prev.next, k)) {
    const [start, end] = reverseK(prev.next, k);
    prev.next = start;
    prev = end;
  }

  return v.next;
};
