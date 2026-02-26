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
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  const leftSum = sumOfLeftLeaves(root.left);
  const rightSum = sumOfLeftLeaves(root.right);

  if (root?.left && !root?.left?.left && !root?.left?.right) {
    return leftSum + rightSum + root?.left?.val;
  }

  return leftSum + rightSum;
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
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;

  if (root.left && !root.left.left && !root.left.right) {
    // root .left 为 叶子
    return root.left.val + sumOfLeftLeaves(root.right);
  } else {
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  }
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

// 后序
var sumOfLeftLeaves = function (root, type) {
  if (!root) return 0;
  if (type === "left" && !root.left && !root.right) {
    return root.val;
  }
  const leftLeftLeaves = root.left ? sumOfLeftLeaves(root.left, "left") : 0;
  const rightLeftLeaves = root.right ? sumOfLeftLeaves(root.right, "right") : 0;
  return leftLeftLeaves + rightLeftLeaves;
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
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;// 空节点
  if (root?.left && !root?.left?.left && !root?.left?.right) {
    // 有左叶子的节点
    return root?.left.val + sumOfLeftLeaves(root.right);
  }
  // 没有左叶子的节点
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
