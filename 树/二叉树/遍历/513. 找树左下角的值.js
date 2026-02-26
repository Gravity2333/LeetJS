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
var findBottomLeftValue = function (
  node,
  currentLayer = 1,
  currentMax = {
    node,
    layer: 1,
  },
) {
  if (!node) return node;
  if (!node.left && !node.right) {
    if (currentLayer > currentMax.layer) {
      currentMax.node = node;
      currentMax.layer = currentLayer;
    }
  } else {
    findBottomLeftValue(node.left, currentLayer + 1, currentMax);
    findBottomLeftValue(node.right, currentLayer + 1, currentMax);
  }
  return currentMax?.node?.val;
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
 * @return {number}
 */
var findBottomLeftValue = function (node) {
  // 层序方式
  const queue = [node];
  const result = [];

  let layerLen = 1;

  while (queue.length > 0) {
    let currentLayerLen = 0;
    const layerResult = [];
    for (let i = 0; i < layerLen; i++) {
      const node = queue.shift();
      layerResult.push(node.val);

      if (node.left) {
        queue.push(node.left);
        currentLayerLen++;
      }

      if (node.right) {
        queue.push(node.right);
        currentLayerLen++;
      }
    }
    layerLen = currentLayerLen;
    result.push(layerResult);
  }

  return result?.pop()?.[0];
};

var findBottomLeftValue = function (
  node,
  layer = 0,
  context = {
    maxLayer: 0,
    node,
  },
) {
  if (!node) return node;
  if (!node.left && !node.right) {
    if (layer > context.maxLayer) {
      context.maxLayer = layer;
      context.node = node;
    }
  } else {
    findBottomLeftValue(node.left, layer + 1, context);
    findBottomLeftValue(node.right, layer + 1, context);
  }

  return context.node?.val;
};

/** 方法1 先序遍历 打擂台 层次更高的保存 同层级的 只有第一个会比对
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
var findBottomLeftValue = function (
  root,
  currentLayer = 0,
  result = { current: null,maxLayer: -1 },
) {
  if (!root) return root;
  if (!root.left && !root.right) {
    if (currentLayer > result.maxLayer) {
      result.maxLayer = currentLayer;
      result.current = root;
    }
  } else {
    if (root.left) {
      findBottomLeftValue(root.left, currentLayer + 1, result);
    }

    if (root.right) {
      findBottomLeftValue(root.right, currentLayer + 1, result);
    }
  }
  return result.current?.val
};
