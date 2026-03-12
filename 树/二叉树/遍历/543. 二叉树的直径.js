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
var diameterOfBinaryTree = function (root) {
    let max = 0
    getMaxDepth(root,(leftDepth,rightDepth)=>{
        max= Math.max(max,leftDepth+rightDepth)
    })
    return max
};

function getMaxDepth(root,callback) {
  if (!root) return 0;
  const leftDepth = getMaxDepth(root.left,callback);
  const rightDepth = getMaxDepth(root.right,callback);
  callback(leftDepth,rightDepth)
  return Math.max(leftDepth,rightDepth) + 1
}
