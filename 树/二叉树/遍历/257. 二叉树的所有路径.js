// 257. 二叉树的所有路径

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const results = [];

  function binaryTreePathsImpl(node, prefixs = []) {
    if (!node) {
      results.push(prefixs.join("->"));
      return;
    } else {
      if (node.left) {
        binaryTreePathsImpl(node.left, [...prefixs, node.val]);
      }

      if (node.right) {
        binaryTreePathsImpl(node.right, [...prefixs, node.val]);
      }

      if (!node?.left && !node?.right) {
        results.push(prefixs.concat(node.val).join("->"));
      }
    }
  }

  binaryTreePathsImpl(root);

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
 * @return {string[]}
 */
var binaryTreePaths = function (root, currentPaths = [], results = []) {
  if (!root) {
    return [];
  } else if (!root.left && !root.right) {
    results.push(currentPaths.concat(root.val));
  } else {
    if (root.left) {
      binaryTreePaths(root.left, [...currentPaths, root.val], results);
    }

    if (root.right) {
      binaryTreePaths(root.right, [...currentPaths, root.val], results);
    }
  }
  return results.map((result) => result.join("->"));
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
 * @return {string[]}
 */
var binaryTreePaths = function (root, currentPath = [], results = []) {
  if (!root) return [];
  if (!root.left && !root.right) {
    /** 收集 */
    results.push([...currentPath, root.val].join("->"));
  }
  // 先序
  if (root.left) {
    binaryTreePaths(root.left, [...currentPath, root.val], results);
  }

  if (root.right) {
    binaryTreePaths(root.right, [...currentPath, root.val], results);
  }
  return results
};
