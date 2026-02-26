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
  return newHead.next;
};

/**
 * 思路 由于第一次遍历的时候，某些节点的random指向的节点还没拷贝，所以需要用hash表 记录老节点和新节点的映射关系
 * 第二次遍历的时候 根据老节点的random设置新节点
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  // 第一次遍历 拷贝链表
  const map = new Map();
  const v = {
    val: "virtual head",
    next: null,
  };

  let wip = v;
  let current = head;

  while (current) {
    wip = wip.next = {
      val: current.val,
      next: null,
      random: current.random,
    };

    map.set(current, wip);
    current = current.next
  }

  wip = v.next;
  while (wip) {
    wip.random = map.get(wip.random);
    wip = wip.next;
  }

  return v.next;
};
