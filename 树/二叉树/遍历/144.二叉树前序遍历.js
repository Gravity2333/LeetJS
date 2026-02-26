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
var preorderTraversal = function (root, results = []) {
  if (!root) return results;
  results.push(root.val);
  preorderTraversal(root.left,results);
  preorderTraversal(root.right,results);
  return results;
};



/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root, results = []) {
  if(!root) return []
  results.push(root.val)
  preorderTraversal(root.left,results)
  preorderTraversal(root.right,results)
  return results
};
