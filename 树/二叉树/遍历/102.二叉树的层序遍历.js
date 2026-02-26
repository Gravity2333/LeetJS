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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const results = [];
  let currentLevelLen = queue.length;

  while (queue.length > 0) {
    let levelCnt = 0;
    const currentResults = [];
    for (let i = 0; i < currentLevelLen; i++) {
      const top = queue.shift();
      currentResults.push(top.val);
      if (top.left) {
        levelCnt++;
        queue.push(top.left);
      }

      if (top.right) {
        levelCnt++;
        queue.push(top.right);
      }
    }
    results.push(currentResults);
    currentLevelLen = levelCnt;
  }
  return results;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */ /**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if(!root) return []
  const queue = [root];
  let currentLevelCnt = 1;
  const results = [];
  while (queue.length > 0) {
    /** 一次性遍历一层的所有节点 */
    let wipLevelCnt = 0;
    const layerResult = [];
    for (let i = 0; i < currentLevelCnt; i++) {
      const node = queue.shift();
      layerResult.push(node.val);
      if (node.left) {
        wipLevelCnt++;
        queue.push(node.left);
      }

      if (node.right) {
        wipLevelCnt++;
        queue.push(node.right);
      }
    }
    results.push(layerResult);
    currentLevelCnt = wipLevelCnt;
  }
  return results;
};
