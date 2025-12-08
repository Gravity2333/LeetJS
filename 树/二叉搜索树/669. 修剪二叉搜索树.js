/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return root;
  const inRange = (node) => node?.val >= low && node?.val <= high;
  // 找到在范围内的起始点
  let current = root;
  while (current && !inRange(current)) {
    if (current.val < low) {
      current = current.right;
    } else {
      current = current.left;
    }
  }
  root = current;

  /** 左侧修剪 */
  while (current?.left) {
    while (current.left && !inRange(current.left)) {
      current.left = current?.left?.right;
    }
    current = current?.left;
  }

  current = root;
  /** 右侧修剪 */
  while (current?.right) {
    while (current.right && !inRange(current.right)) {
      current.right = current.right.left;
    }
    current = current?.right;
  }

  return root;
};
