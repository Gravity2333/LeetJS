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
var rightSideView = function (root) {
    if(!root) return []
  const queue = [root];
  let layerNum = 1;
  const results = [];
  while (queue.length > 0) {
    let currentLayerNum = 0;
    const currentResults = [];
    for (let i = 0; i < layerNum; i++) {
      const elem = queue.shift();
      currentResults.push(elem);

      if (elem.left) {
        currentLayerNum++;
        queue.push(elem.left);
      }

      if (elem.right) {
        currentLayerNum++;
        queue.push(elem.right);
      }
    }

    const last = currentResults.pop();
    if (last) {
      results.push(last?.val);
    }
    layerNum = currentLayerNum;
  }
  return results;
};
