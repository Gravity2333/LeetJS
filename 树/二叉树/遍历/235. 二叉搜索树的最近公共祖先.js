/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 请类比 236看
// 这个就不需要递归了， 根据BST性质
// 如果节点 node 是pq公共节点 (非最深)，那么 node的值一定介于pq之间 可能等于pq 
// 如果节点 node 是 pq公共节点的 祖先节点 那么 node 一定 > pq || node < pq

// 从根节点开始，查找，如果 pq 都 大于node 那么说明pq都在node右侧 向右侧查找
//                 如果 pq 都 小于 node 那么说明pq在node左侧 向左侧查找
//                 如果node介于pq之间 那么 那么node就是公共祖先

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return root
    let current = root

    while(current){
        if(current.val > p.val && current.val > q.val){
            current = current.left
        }else if(current.val < p.val && current.val < q.val){
            current = current.right
        }else{
            return current
        }
    }

    return null
};