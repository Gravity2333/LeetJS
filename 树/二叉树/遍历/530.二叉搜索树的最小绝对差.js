// 530.二叉搜索树的最小绝对差
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
var getMinimumDifference = function (
  root,
  context = {
    minDiffVal: Number.MAX_VALUE,
    prev: null,
  },
) {
  if (!root) return null;

  getMinimumDifference(root.left, context);
  if (null === context.prev) {
    context.prev = root.val;
  } else {
    const maybeMin = Math.abs(root.val - context.prev);
    if (maybeMin < context.minDiffVal) {
      context.minDiffVal = maybeMin;
    }
    context.prev = root.val;
  }
  getMinimumDifference(root.right, context);

  return context.minDiffVal;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//中序遍历 求最小差值即可
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (
  root,
  context = {
    minValue: Infinity,
    prev: Infinity,
    curr: null,
  },
) {
  if (!root) return 0;
  getMinimumDifference(root.left, context);
  context.curr = root.val;
  context.minValue = Math.min(
    context.minValue,
    Math.abs(context.curr - context.prev),
  );
  context.prev = context.curr;
  getMinimumDifference(root.right, context);
  return context.minValue;
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
var getMinimumDifference = function (root) {
  let minDistance = Infinity;
  inorder(root, {
    prev: null,
    callback: (prev, curr) => {
      if (!prev) return;
      const dist = Math.abs(prev?.val - curr?.val);
      if (dist < minDistance) {
        minDistance = dist;
      }
    },
  });
  return minDistance;
};

function inorder(
  root,
  context = {
    prev: null,
    callback,
  },
) {
  if (!root) return;
  inorder(root.left, context);
  context.callback(context.prev, root);
  context.prev = root;
  inorder(root.right, context);
}
