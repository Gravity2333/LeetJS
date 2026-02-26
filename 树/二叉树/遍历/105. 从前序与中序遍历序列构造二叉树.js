/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * DEMO:
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  const rootVal = preorder.shift();
  const rootIndexInOrder = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, rootIndexInOrder);
  const rightInorder = inorder.slice(rootIndexInOrder + 1);
  const leftPreOrder = preorder.slice(0, leftInorder.length);
  const rightPreOrder = preorder.slice(leftInorder.length);
  return {
    val: rootVal,
    left: buildTree(leftPreOrder, leftInorder),
    right: buildTree(rightPreOrder, rightInorder),
  };
};
