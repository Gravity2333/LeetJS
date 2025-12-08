/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root,context= {prev: 0}) {
    if(!root) return root
    convertBST(root.right,context)
    root.val += context.prev
    context.prev = root.val
    convertBST(root.left,context)

    return root
};
