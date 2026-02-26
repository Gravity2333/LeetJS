// 98.验证二叉搜索树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function InOrder(root) {
  if (!root) return [];
  return [...InOrder(root.left), root.val, ...InOrder(root.right)];
}

function isArrAsc(arr) {
  if (arr.length === 0) return true;
  let prev = -Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > prev) {
      prev = arr[i];
    } else {
      return false;
    }
  }
  return true;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isArrAsc(InOrder(root));
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 特性 中序之后，是递增的
function inorder(root, results = []) {
  if (!root) return results;
  inorder(root.left, results);
  results.push(root.val);
  inorder(root.right, results);
  return results;
}

function isArrAsc(arr) {
  if (arr.length === 0) return true;
  let prev = -Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > prev) {
      prev = arr[i];
    } else {
      return false;
    }
  }
  return true;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isArrAsc(inorder(root));
};

/** 中序遍历 如果遍历之后有序 就是bst
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isStrictAsc(inOrder(root));
};

function isStrictAsc(list) {
  for (let i = 1; i < list.length; i++) {
    if (list[i] <= list[i - 1]) {
      return false;
    }
  }
  return true;
}

function inOrder(root, results = []) {
  if (!root) return [];
  inOrder(root.left, results);
  results.push(root.val);
  inOrder(root.right, results);
  return results;
}
