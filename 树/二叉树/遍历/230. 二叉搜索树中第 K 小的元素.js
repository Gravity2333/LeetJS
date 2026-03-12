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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let i = 1;
  let result;
  inOrderImpl(root, (node) => {
    if (i === k) {
      result = node.val;
    }
    i++
  });
  return result;
};

var inOrderImpl = function (root, callback) {
  if (!root) {
    return;
  }
  inOrderImpl(root.left,callback);
  callback(root);
  inOrderImpl(root.right,callback);
};
