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

/** 双指针 merge更小的
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let ptr1 = list1;
  let ptr2 = list2;

  let result = {
    next: null,
  };

  let merged = result;

  while (ptr1 && ptr2) {
    if (ptr1.val < ptr2.val) {
      merged = merged.next = {
        val: ptr1.val,
        next: null,
      };
      ptr1 = ptr1.next;
    } else {
      merged = merged.next = {
        val: ptr2.val,
        next: null,
      };
      ptr2 = ptr2.next;
    }
  }

  while (ptr1) {
    merged = merged.next = {
      val: ptr1.val,
      next: null,
    };
    ptr1 = ptr1.next;
  }

  while (ptr2) {
    merged = merged.next = {
      val: ptr2.val,
      next: null,
    };
    ptr2 = ptr2.next;
  }

  return result.next;
};

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
  const v = { next: null };
  let wip = v;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      wip = wip.next = {
        val: list1.val,
        next: null,
      };
      list1 = list1.next;
    } else {
      wip = wip.next = {
        val: list2.val,
        next: null,
      };
      list2 = list2.next;
    }
  }

  while (list1) {
    wip = wip.next = {
      val: list1.val,
      next: null,
    };
    list1 = list1.next;
  }

  while (list2) {
    wip = wip.next = {
      val: list2.val,
      next: null,
    };
    list2 = list2.next;
  }

  return v.next;
};
