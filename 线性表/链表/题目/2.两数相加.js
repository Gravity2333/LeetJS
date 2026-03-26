/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const results = {
    val: "VIRTUAL HEAD",
    next: null,
  };
  let currentResult = results;
  let current1 = l1;
  let current2 = l2;
  let increase = 0;
  while (current1 || current2) {
    let val =
      (current1?.val || 0) +
      (current2?.val || 0) +
      (increase > 0 ? increase-- : 0);
    if (val >= 10) {
      val = val % 10;
      increase += 1;
    }
    currentResult = currentResult.next = {
      val,
      next: null,
    };
    if (current1) {
      current1 = current1.next;
    }
    if (current2) {
      current2 = current2.next;
    }
  }
  if (increase > 0) {
    currentResult.next = {
      val: increase,
      next: null,
    };
  }

  return results.next;
};

var addTwoNumbers = function (l1, l2) {
  const results = {
    val: "VIRTUAL HEAD",
    next: null,
  };
  let currentResult = results;
  let current1 = l1;
  let current2 = l2;
  let increase = 0;
  while (current1 || current2) {
    let val =
      (current1?.val || 0) +
      (current2?.val || 0) +
      (increase > 0 ? increase-- : 0);
    if (val >= 10) {
      val = val % 10;
      increase += 1;
    }
    currentResult = currentResult.next = {
      val,
      next: null,
    };
    if (current1) {
      current1 = current1.next;
    }
    if (current2) {
      current2 = current2.next;
    }
  }
  if (increase > 0) {
    currentResult.next = {
      val: increase,
      next: null,
    };
  }

  return results.next;
};

var addTwoNumbers = function (l1, l2) {
  const v = {
    next: null,
  };

  let current = v;
  let increase = 0;
  let ptr1 = l1;
  let ptr2 = l2;

  while (ptr1 || ptr2) {
    let val = (ptr1?.val || 0) + (ptr2?.val || 0) + increase;
    increase = Math.trunc(val / 10);
    val = val % 10;

    current = current.next = {
      val,
      next: null,
    };
    ptr1 = ptr1?.next;
    ptr2 = ptr2?.next;
  }

  if (increase > 0) {
    current = current.next = {
      val: increase,
      next: null,
    };
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const v = {
    next: null,
  };

  let sumPtr = v;
  let l1ptr = l1;
  let l2ptr = l2;
  let increase = 0;

  while (l1ptr || l2ptr || increase) {
    let sum = (l1ptr?.val || 0) + (l2ptr?.val || 0) + increase;
    increase = Math.trunc(sum / 10);
    sum = sum % 10;
    sumPtr = sumPtr.next = {
      val: sum,
      next: null,
    };
    l1ptr = l1ptr?.next;
    l2ptr = l2ptr?.next;
  }

  return v.next;
};
