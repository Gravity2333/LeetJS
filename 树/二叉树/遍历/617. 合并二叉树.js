/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (root1 && !root2) return root1;
  if (!root1 && root2) return root2;
  root1.val += root2.val;

  if (root1.left || root2.left) {
    if (!root1.left) {
      root1.left = { val: 0, left: null, right: null };
    }

    if (!root2.left) {
      root2.left = { val: 0, left: null, right: null };
    }
    mergeTrees(root1.left, root2.left);
  }

  if (root1.right || root2.right) {
    if (!root1.right) {
      root1.right = { val: 0, left: null, right: null };
    }

    if (!root2.right) {
      root2.right = { val: 0, left: null, right: null };
    }
    mergeTrees(root1.right, root2.right);
  }

  return root1;
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  const root = {
    val: (root1?.val || 0) + (root2?.val || 0),
    left: null,
    right: null,
  };

  root.left = mergeTrees(root1?.left, root2?.left);
  root.right = mergeTrees(root1?.right, root2?.right);
  return root;
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  if (root1 && !root2) {
    return {
      val: root1.val,
      left: mergeTrees(root1.left, null),
      right: mergeTrees(root1.right, null),
    };
  }
  if (!root1 && root2) {
    return {
      val: root2.val,
      left: mergeTrees(root2.left, null),
      right: mergeTrees(root2.right, null),
    };
  } else {
    return {
      val: root1.val + root2.val,
      left: mergeTrees(root1.left, root2.left),
      right: mergeTrees(root1.right, root2.right),
    };
  }
};
