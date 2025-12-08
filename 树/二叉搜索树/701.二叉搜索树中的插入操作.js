// 迭代
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return {val,left: null,right:null}
    let current = root
    let prev = current

    while(current){
        if(current.val <= val){
            prev = current
            current = current.right
        }else{
            prev = current
            current = current.left
        }
    }

    if(prev.val >= val){
        prev.left = {val,left: null,right:null}
    }else{
        prev.right = {val,left: null,right:null}
    }

    return root
};  




/** 递归 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return {val,left: null,right:null}
    if(root.val >= val){
        root.left = insertIntoBST(root.left,val)
    }else{
        root.right = insertIntoBST(root.right,val)
    }
    return root
};  