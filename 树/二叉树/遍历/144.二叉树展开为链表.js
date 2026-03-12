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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return root;
  if (root.left) {
    const leftFirst = root.left;
    let leftEnd = leftFirst;
    while (leftEnd.right) {
      leftEnd = leftEnd.right;
    }
    leftEnd.right = root.right;
    root.right = leftFirst;
    root.left = null
  }

  flatten(root.right)

  return root
};
