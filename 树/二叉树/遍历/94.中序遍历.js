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
 * @return {number[]}
 */
var inorderTraversal = function (root, results = []) {
  if (!root) return results;
  inorderTraversal(root.left, results);
  results.push(root.val);
  inorderTraversal(root.right, results);
  return results;
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
 * @return {number[]}
 */
var inorderTraversal = function (root, results = []) {
  if (!root) return [];
  inorderTraversal(root.left, results);
  results.push(root.val);
  inorderTraversal(root.right, results);

  return results;
};
