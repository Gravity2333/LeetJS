/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;
  let chanedA = false;
  let chanedB = false;

  while (currentA === null || currentB === null || currentA !== currentB) {
    if (currentA.next) {
      currentA = currentA.next;
    } else {
      if (!chanedA) {
        chanedA = true;
        currentA = headB;
      }else{
         return null
      }
    }
    if (currentB.next) {
      currentB = currentB.next;
    } else {
       if (!chanedB) {
        chanedB = true;
        currentB = headA;
      }else{
         return null
      }
    }
  }

  return currentA
};


// 链表节点定义
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/** 公共尾部 */
const node8 = new ListNode(8);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node8.next = node4;
node4.next = node5;

/** 链表 A: 4 -> 1 -> 8 -> 4 -> 5 */
const a1 = new ListNode(4);
const a2 = new ListNode(1);

a1.next = a2;
a2.next = node8;

/** 链表 B: 5 -> 6 -> 1 -> 8 -> 4 -> 5 */
const b1 = new ListNode(5);
const b2 = new ListNode(6);
const b3 = new ListNode(1);

b1.next = b2;
b2.next = b3;
b3.next = node8;

/** headA / headB */
const headA = a1;
const headB = b1;
