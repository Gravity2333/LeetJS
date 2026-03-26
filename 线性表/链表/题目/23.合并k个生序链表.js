/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  lists = lists.filter((list) => !!list);
  const results = {
    val: "VIRTUAL HEAD",
    next: null,
  };
  let current = results;
  while (lists.length > 0) {
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < lists.length; i++) {
      const head = lists[i];
      if (!head) continue;
      if (min >= head.val) {
        min = head.val;
        minIndex = i;
      }
    }
    const minHead = lists[minIndex];
    current = current.next = {
      val: minHead.val,
      next: null,
    };
    lists[minIndex] = minHead.next;
    lists = lists.filter((list) => !!list);
  }

  return results.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const v = {
    next: null,
  };
  let current = v;
  while (lists.length > 0) {
    let minValue = Infinity;
    let minIndex = -1;
    for (let i = 0; i < lists.length; i++) {
      const ptr = lists[i];
      if (!ptr) continue;
      if (ptr.val < minValue) {
        minValue = ptr.val;
        minIndex = i;
      }
    }

    if (minIndex >= 0) {
      const minPtr = lists[minIndex];
      current = current.next = {
        val: minPtr.val,
        next: null,
      };
      lists[minIndex] = minPtr.next;
    }
    lists = lists.filter((f) => f);
  }

  return v.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  lists = lists.filter(f=>f)
  let unmerged = 0;
  const v = { next: null };
  let wip = v;
  while (unmerged < lists.length) {
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < lists.length; i++) {
      const head = lists[i];
      if (!head) continue;
      if (head.val < min) {
        min = head.val;
        minIndex = i;
      }
    }
    wip = wip.next = {
      val: min,
      next: null,
    };

    lists[minIndex] = lists[minIndex]?.next;
    if (!lists[minIndex]) {
      unmerged++;
    }
  }
  return v.next;
};
