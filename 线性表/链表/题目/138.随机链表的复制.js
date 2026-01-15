/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  /** 第一轮拷贝链表 记录关系 */
  const relations = new Map();
  let current = head;
  while (current !== null) {
    relations.set(current, {
      ...current,
    });
    current = current.next;
  }
  /** 第二轮设置关系 */
  current = head;
  let newHead = {
    val: "",
    next: null,
  };
  let newCurrent = newHead;
  while (current !== null) {
    const clone = relations.get(current);
    newCurrent = newCurrent.next = clone;
    clone.random = relations.get(clone.random);
    current = current.next;
  }
  return newHead.next
};
