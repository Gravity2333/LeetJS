// 106.从中序与后序遍历序列构造二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (
  inorder,
  postorder,
  node = { val: void 0, left: null, right: null },
) {
  const postValue = postorder.pop();
  if (undefined === postValue) return node;

  const rootIndex = inorder.indexOf(postValue);
  if (rootIndex >= 0) {
    // 赋值 切分
    node.val = postValue;
    const inorderLeft = inorder.slice(0, rootIndex);
    const inorderRight = inorder.slice(rootIndex + 1);
    let postOrderLeft = postorder.slice(0, inorderLeft.length);
    let postOrderRight = postorder.slice(inorderLeft.length);

    if (inorderLeft.length > 0) {
      node.left = { val: void 0, left: null, right: null };
      buildTree(inorderLeft, postOrderLeft, node.left);
    }

    if (inorderRight.length > 0) {
      node.right = { val: void 0, left: null, right: null };
      buildTree(inorderRight, postOrderRight, node.right);
    }
  }
  return node;
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null;
  const top = postorder.pop();
  const topIndexInOrder = inorder.indexOf(top);
  const root = { val: top, left: null, right: null };

  const leftInOrder = inorder.slice(0, topIndexInOrder);
  const rightInOrder = inorder.slice(topIndexInOrder + 1);

  const leftPostOrder = postorder.slice(0, leftInOrder.length);
  const rightPostOrder = postorder.slice(leftInOrder.length);

  if (leftInOrder.length > 0) {
    root.left = buildTree(leftInOrder, leftPostOrder);
  }

  if (rightInOrder.length > 0) {
    root.right = buildTree(rightInOrder, rightPostOrder);
  }

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length == 0 || postorder.length == 0) return null;
  const top = postorder.pop();
  const topPosInOrder = inorder.findIndex((ele) => ele === top);
  return {
    val: top,
    left: buildTree(
      inorder.slice(0, topPosInOrder),
      postorder.slice(0, topPosInOrder),
    ),
    right: buildTree(
      inorder.slice(topPosInOrder + 1),
      postorder.slice(topPosInOrder),
    ),
  };
};

/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (postorder.length === 0 || inorder.length === 0) {
    return null;
  }
  const rootVal = postorder.pop();
  const rootIndexInOrder = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, rootIndexInOrder);
  const rightInorder = inorder.slice(rootIndexInOrder + 1);
  const leftPostOrder = postorder.slice(0, leftInorder.length);
  const rightPostOrder = postorder.slice(leftInorder.length);
  return {
    val: rootVal,
    left: buildTree(leftInorder, leftPostOrder),
    right: buildTree(rightInorder, rightPostOrder),
  };
};
