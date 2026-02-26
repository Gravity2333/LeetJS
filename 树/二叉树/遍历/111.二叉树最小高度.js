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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && root.right) return 1 + minDepth(root.right);
  else if (root.left && !root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  const leftDepth = root.left ? minDepth(root.left) : Infinity;
  const rightDepth = root.right ? minDepth(root.right) : Infinity;
  return (
    (Math.min(leftDepth, rightDepth) === Infinity
      ? 0
      : Math.min(leftDepth, rightDepth)) + 1
  );
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 注意 深度的定义是从 root到叶子节点
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) {
    // 叶子节点
    return 1;
  }

  if (root.left && !root.right) {
    return minDepth(root.left) + 1;
  }

  if (root.right && !root.left) {
    return minDepth(root.right) + 1;
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
