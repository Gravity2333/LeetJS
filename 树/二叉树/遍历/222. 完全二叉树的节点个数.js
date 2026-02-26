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
var countNodes = function (root) {
  if (!root) return 0;
  let leftDepth = 0;
  let rightDepth = 0;

  let leftPtr = root;
  let rightPtr = root;

  while (leftPtr) {
    leftDepth++;
    leftPtr = leftPtr.left;
  }

  let rightPrev = root;
  while (rightPtr) {
    rightPrev = rightPtr;
    rightPtr = rightPtr.right;
    rightDepth++;
  }

  if (leftDepth === rightDepth) {
    return Math.pow(2, leftDepth) - 1;
  } else {
    if (rightPrev.left && !rightPrev.right) {
      return Math.pow(2, leftDepth) - 2;
    } else {
      return 1 + countNodes(root.left) + countNodes(root.right);
    }
  }
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
var countNodes = function (root) {
  if (!root) return 0;
  let leftPtr = root;
  let leftHeight = 0;

  while (leftPtr) {
    leftPtr = leftPtr.left;
    leftHeight++;
  }

  let rightPtr = root;
  let rightHeight = 1;
  let rightPtrPrev = root;

  while (rightPtr) {
    rightPtrPrev = rightPtr;
    rightPtr = rightPtr.left;
    rightHeight++;
  }

  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1;
  } else {
    if (rightPtrPrev.left && !rightPtrPrev.right) {
      return Math.pow(2, leftHeight) - 2;
    } else {
      return 1 + countNodes(root.left) + countNodes(root.right);
    }
  }
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
var countNodes = function (root) {
  if (!root) return 0;
  let leftHeight = 1;
  let rightHeight = 1;
  let current = root.left;
  while (current) {
    leftHeight++;
    current = current.left;
  }
  current = root.right;
  while (current) {
    rightHeight++;
    current = current.right;
  }
  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1;
  }else{
    return 1 + countNodes(root.left)+ countNodes(root.right)
  }
};
