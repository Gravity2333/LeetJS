// 103. 二叉树的锯齿形层序遍历 层序遍历
// 你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[20,9],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]

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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  let direction = true;

  while (queue.length > 0) {
    const list = [];
    const currentNum = queue.length;
    for (let i = 0; i < currentNum; i++) {
      const top = queue.shift();
      list.push(top.val);
      top.left && queue.push(top.left);
      top.right && queue.push(top.right);
    }

    if (direction) {
      result.push(list);
    } else {
      result.push(list.toReversed());
    }
    direction = !direction;
  }

  return result;
};

const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const results = [];
  let layerNum = 1;
  let shouldReverse = false;
  while (queue.length > 0) {
    const currentResult = [];
    let currentChildNum = 0;
    for (let i = 0; i < layerNum; i++) {
      const top = queue.shift();
      if (shouldReverse) {
        currentResult.unshift(top.val);
      } else {
        currentResult.push(top.val);
      }
      if (top.left) {
        currentChildNum++;
        queue.push(top.left);
      }

      if (top.right) {
        currentChildNum++;
        queue.push(top.right);
      }
    }

    layerNum = currentChildNum;
    results.push(currentResult);
    shouldReverse = !shouldReverse;
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
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  let currentLayerCnt = 1;
  const results = []
  let reverse = false;
  while (queue.length > 0) {
    let wipLayerCnt = 0;
    const wipResult = [];

    for (let i = 0; i < currentLayerCnt; i++) {
      const node = queue.shift();
      if (reverse) {
        wipResult.unshift(node.val);
      } else {
        wipResult.push(node.val);
      }

      if (node.left) {
        wipLayerCnt++;
        queue.push(node.left);
      }

      if (node.right) {
        wipLayerCnt++;
        queue.push(node.right);
      }
    }
    currentLayerCnt = wipLayerCnt;
    reverse = !reverse
    results.push(wipResult)
  }
  return results
};
