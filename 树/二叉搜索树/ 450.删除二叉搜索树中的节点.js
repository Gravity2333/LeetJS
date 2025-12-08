/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/** 
 * 有2节点的删除步骤
 * 1. 向右子树找一步 查看 右节点是否包含左节点，如果不包含，则把右子树提上去即可
 * 2. 如果有左节点，设置prev，向左侧查找，找到头，此时找到右侧子树最小的节点
 * 3. 如果这个最小节点有右子树，则prev.left = curr.right
 * 4. 把 curr.left = delNode.left , curr.right = delNode.right , prev.left = null
 */

function deleteNodeImpl(node, prev) {
  /** 叶子结点情况 */
  if (!node.left && !node.right) {
    if (prev.val >= node.val) {
      prev.left = null;
    } else {
      prev.right = null;
    }
    return;
  }

  /** 单一叶子结点的情况 */
  if ((node.left && !node.right) || (!node.left && node.right)) {
    if (prev.val >= node.val) {
      prev.left = node.left || node.right;
    } else {
      prev.right = node.left || node.right;
    }
    return;
  }

  /** 双节点的情况 */
  if (node.left && node.right) {
    // 右子树最小值
    // 向右 1step
    let currentPrev = node;
    let current = node.right;

    if (!current.left) {
      if (prev.val >= node.val) {
        prev.left = current;
        current.left = node.left;
      } else {
        prev.right = current;
        current.left = node.left;
      }
      return;
    }

    // 向左
    while (current.left) {
      currentPrev = current;
      current = current.left;
    }

    currentPrev.left = current.right;
    current.left = node.left;
    current.right = node.right;
    if (prev.val >= node.val) {
      prev.left = current;
    } else {
      prev.right = current;
    }
  }
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root;
  const virtual = { left: root, val: Infinity };
  let current = virtual.left;
  let prev = virtual;
  /** 找到节点 并且删除 */
  while (current) {
    if (current.val === key) {
      deleteNodeImpl(current, prev);
      current = prev;
    } else if (current.val < key) {
      prev = current;
      current = current.right;
    } else {
      prev = current;
      current = current.left;
    }
  }

  return virtual.left;
};
