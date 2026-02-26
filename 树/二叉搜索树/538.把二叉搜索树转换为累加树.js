/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root, context = { prev: 0 }) {
  if (!root) return root;
  convertBST(root.right, context);
  root.val += context.prev;
  context.prev = root.val;
  convertBST(root.left, context);

  return root;
};

/**
 * 中序遍历 倒着走
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (
  root,
  context = {
    sum: 0,
  },
) {
  if (!root) return null;
  convertBST(root.right,context);
  root.val += context.sum;
  context.sum = root.val;
  convertBST(root.left,context);
  return root;
};
