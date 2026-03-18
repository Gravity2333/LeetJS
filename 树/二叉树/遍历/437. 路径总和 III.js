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
var pathSum = function (root, targetSum) {
  const map = new Map();
  // 必须预存 0，表示“路径和正好等于目标值”的情况
  map.set(0, 1);
  let cnt = 0;
  let sum = 0;
  traverse(root, (node) => {
    sum += node.val;
    const left = sum - targetSum;
    if (map.has(left)) {
      cnt += map.get(left);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
    return () => {
      map.set(sum, map.get(sum) - 1);
      sum -= node.val;
    };
  });
  return cnt;
};

function traverse(root, callback) {
  if (!root) return;
  const destory = callback(root);
  traverse(root.left, callback);
  traverse(root.right, callback);
  destory();
}
