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
var swapPairs = function(head) {
    let current = head
    while(current!==null&&current?.next!==null){
        const tmp = current.val
        current.val = current.next.val
        current.next.val = tmp

        current = current.next.next
    }

    return head
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
    // 一个指针 每次交换 当前节点和后面节点的值 注意 只换值 不动节点
    // 一次向后jump 2次
    let current = head
    while(current && current.next){
        const tmp = current.val
        current.val = current.next.val
        current.next.val = tmp
        current = current.next.next
    }
    return head
};