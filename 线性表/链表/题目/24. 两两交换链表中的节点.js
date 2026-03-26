// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

// 示例 1：
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 示例 2：

// 输入：head = []
// 输出：[]
// 示例 3：

// 输入：head = [1]
// 输出：[1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let current = head;
  while (current !== null && current?.next !== null) {
    const tmp = current.val;
    current.val = current.next.val;
    current.next.val = tmp;

    current = current.next.next;
  }

  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 一个指针 每次交换 当前节点和后面节点的值 注意 只换值 不动节点
  // 一次向后jump 2次
  let current = head;
  while (current && current.next) {
    const tmp = current.val;
    current.val = current.next.val;
    current.next.val = tmp;
    current = current.next.next;
  }
  return head;
};

/**
 * 分析
 * 如果head为空 返回null
 * 如果只有一个head节点 不用交换 返回head
 * 如果head包含next
 *   为了简化 设置虚拟头节点v
 *   使用三个指针 prev = v
 *              left = head
 *              right = head.next
 *  1. left.next = right.next
 *  2. right.next = left
 *  3. prev.next = right
 *  prev ->  right -> left
 *
 *  变更指针
 *  prev = left
 *  left = left?.next
 *  right = left?.next
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  const virtualHead = {
    next: head,
  };

  let prev = virtualHead;
  let left = head;
  let right = head.next;

  while (left && right) {
    left.next = right.next;
    right.next = left;
    prev.next = right;

    prev = left;
    left = left?.next;
    right = left?.next;
  }

  return virtualHead.next;
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head) return head
    let v = {
      val: 'virtual',
      next: head,
    }

    let prev = v
    let left = head
    let right = head.next
    while(left && right){
      const tmp = right.next
      right.next = left
      left.next  = tmp
      prev.next = right

      prev = left
      left = tmp
      right = left?.next
    }

    return v.next
};