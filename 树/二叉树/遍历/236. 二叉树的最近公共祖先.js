/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 思路:
// 在 pq 一定存在的情况下
// 一个节点
// 1 如果左右节点都不包含pq 那么以当前节点为根节点的子树 一定不包含pq
// 2 如果左右节点都包含 p/q 那么当前节点就是要找的最深公共子树
// 3 如果左右节点只有一边包含 p/q 那么 pq可能
//    a.同时在一边 此时当前节点也是最深根节点 但是必须要 继续向上找到根节点 如果没有其他路径包含pq 就能确定
//    b.这条边只包含 pq中一个 需要继续向上找才能确定


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
         if(!root) return root
         if(root.val === p.val || root.val === q.val) return root
    const maybeTargetFromLeft = lowestCommonAncestor(root.left,p,q)
    const maybeTargetFromRight = lowestCommonAncestor(root.right,p,q)

    if(maybeTargetFromLeft&&maybeTargetFromRight){
        return root // 找到了
    }

      if(maybeTargetFromLeft){return maybeTargetFromLeft}
        if(maybeTargetFromRight){return maybeTargetFromRight}
    
    return null
};