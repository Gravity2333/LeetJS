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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum,context = {
    cnt:0,
    root: root
}) {
    if(!root) return targetSum === 0? 1: 0
    const leftPathSum = pathSum(root.left)
    const rightPathSum = pathSum(root.right)
    if(leftPathSum + root.val ===targetSum )context.cnt++
    if(rightPathSum + root.val ===targetSum )context.cnt++
    
    if(context.root === root){
        return context.cnt
    }else{
        return 
    }
    
};