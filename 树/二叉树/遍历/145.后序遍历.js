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
var postorderTraversal = function(root,results = []) {
    if(!root) return results
    postorderTraversal(root.left,results)
    postorderTraversal(root.right,results)
    results.push(root.val)

    return results
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root,result = []) {
    if(!root) return []
    postorderTraversal(root.left,result)
    postorderTraversal(root.right,result)
    result.push(root.val)
    return result
};