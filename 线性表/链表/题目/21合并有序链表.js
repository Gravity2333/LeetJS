/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list1Ptr = list1;
  let list2Ptr = list2;
  const head = {
    val: "",
    next: null,
  };
  let current = head;
  while (list1Ptr !== null && list2Ptr !== null) {
    if (list1Ptr.val <= list2Ptr.val) {
      current = current.next = {
        val: list1Ptr.val,
        next: null,
      };
      list1Ptr = list1Ptr.next;
    } else {
      current = current.next = {
        val: list2Ptr.val,
        next: null,
      };
      list2Ptr = list2Ptr.next;
    }
  }

      while (list1Ptr !== null) {
      current = current.next = {
        val: list1Ptr.val,
        next: null,
      };
      list1Ptr = list1Ptr.next;
    }

    while (list2Ptr !== null) {
      current = current.next = {
        val: list2Ptr.val,
        next: null,
      };
      list2Ptr = list2Ptr.next;
    }

  return head.next;
};
