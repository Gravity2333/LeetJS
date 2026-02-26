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
function nextK(head, k) {
  let curr = head;
  for (let i = 0; i < k; i++) {
    curr = curr?.next;
    if (!curr) return null;
  }
  return curr;
}

function reverseK(head, k) {
  let curr = head;
  let next = curr.next;
  for (let i = 0; i < k - 1; i++) {
    const tmp = next.next;
    next.next = curr;
    curr = next;
    next = tmp;
  }
  head.next = next;
  return curr;
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

  let current = head;
  let prev = v;
  while (current) {
    prev.next = reverseK(current, k);
    prev = nextK(prev, k);
    current = prev.next;
  }

  return v.next;
};
