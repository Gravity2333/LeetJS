/**
 * 每个节点 有2种情况 偷 ， 不偷
 * 如果偷 那么当前节点的最大价值 就是左右子树不偷的最大价值 + 当前节点价值
 * 如果不偷，那就是左右节点可偷 可 不偷的最大价值
 * 后续遍历，每个递归 返回 [当前节点不偷 最大价值，当前结点偷 最大价值]
 */

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
var rob = function (root) {
  if (!root) return 0;
  return Math.max(...robNode(root));
};

function robNode(root) {
  if (!root) return [0, 0];
  const leftResult = robNode(root.left);
  const rightResult = robNode(root.right);

  return [
    /** 不偷当前节点 */ Math.max(...leftResult) + Math.max(...rightResult),
    /** 偷当前节点 */ root.val + leftResult[0] + rightResult[0],
  ];
}

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
var rob = function (node, root = node) {
  if (!node) return [0, 0];
  const [leftRob, leftNotRob] = rob(node.left, root);
  const [rightRob, rightNotRob] = rob(node.right, root);

  if (node === root)
    return Math.max(node.val + leftNotRob + rightNotRob, Math.max(leftRob,leftNotRob) + Math.max(rightRob,rightNotRob));
  return [node.val + leftNotRob + rightNotRob, Math.max(leftRob,leftNotRob) + Math.max(rightRob,rightNotRob)];
};
