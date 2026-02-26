/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 有2节点的删除步骤
 * 1. 向右子树找一步 查看 右节点是否包含左节点，如果不包含，则把右子树提上去即可
 * 2. 如果有左节点，设置prev，向左侧查找，找到头，此时找到右侧子树最小的节点
 * 3. 如果这个最小节点有右子树，则prev.left = curr.right
 * 4. 把 curr.left = delNode.left , curr.right = delNode.right , prev.left = null
 */

function deleteNodeImpl(node, prev) {
  /** 叶子结点情况 */
  if (!node.left && !node.right) {
    if (prev.val >= node.val) {
      prev.left = null;
    } else {
      prev.right = null;
    }
    return;
  }

  /** 单一叶子结点的情况 */
  if ((node.left && !node.right) || (!node.left && node.right)) {
    if (prev.val >= node.val) {
      prev.left = node.left || node.right;
    } else {
      prev.right = node.left || node.right;
    }
    return;
  }

  /** 双节点的情况 */
  if (node.left && node.right) {
    // 右子树最小值
    // 向右 1step
    let currentPrev = node;
    let current = node.right;

    if (!current.left) {
      if (prev.val >= node.val) {
        prev.left = current;
        current.left = node.left;
      } else {
        prev.right = current;
        current.left = node.left;
      }
      return;
    }

    // 向左
    while (current.left) {
      currentPrev = current;
      current = current.left;
    }

    currentPrev.left = current.right;
    current.left = node.left;
    current.right = node.right;
    if (prev.val >= node.val) {
      prev.left = current;
    } else {
      prev.right = current;
    }
  }
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root;
  const virtual = { left: root, val: Infinity };
  let current = virtual.left;
  let prev = virtual;
  /** 找到节点 并且删除 */
  while (current) {
    if (current.val === key) {
      deleteNodeImpl(current, prev);
      current = prev;
    } else if (current.val < key) {
      prev = current;
      current = current.right;
    } else {
      prev = current;
      current = current.left;
    }
  }

  return virtual.left;
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
 * 如果没找到节点直接跳过
 * 1 如果叶子节点 直接删除
 * 2 如果有一个子节点 直接移动上来
 * 3 如果有2个子节点
 *   把右子树最小值（最左侧值）替换上来
 *   或 把左侧子树最大值 （最右侧值） 替换上来
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  const v = {
    left: root,
  };
  let current = root;
  let target = null;
  let prev = v;
  while (current) {
    if (current.val === key) {
      target = current;
      break;
    } else if (current.val < key) {
      prev = current;
      current = current.right;
    } else {
      prev = current;
      current = current.left;
    }
  }

  if (!target) return v.left;
  // 如果是叶子节点
  if (!target.left && !target.right) {
    if (prev?.left === target) {
      prev.left = null;
    } else {
      prev.right = null;
    }

    return v.left;
  }

  // 如果有一个子节点
  if (target.left && !target.right) {
    if (prev?.left === target) {
      prev.left = target.left;
    } else {
      prev.right = target.left;
    }
    return v.left;
  }

  if (!target.left && target.right) {
    if (prev?.left === target) {
      prev.left = target.right;
    } else {
      prev.right = target.right;
    }
    return v.left;
  }

  // 如果有2个子节点
  // 找右侧最小的
  let rightPrev = target;
  let rightCurrent = target.right;

  while (rightCurrent.next && !rightCurrent.left) {
    rightPrev = rightCurrent;
    rightCurrent = rightCurrent.right;
  }

  while (rightCurrent.left) {
    rightPrev = rightCurrent;
    rightCurrent = rightCurrent.left;
  }

  // 交换
  if (rightPrev !== target) {
    if (rightCurrent.right) {
      rightPrev.left = rightCurrent.right;
    } else {
      rightPrev.left = null;
    }
  }

  if (rightCurrent !== target.right) {
    rightCurrent.right = target.right;
  }

  rightCurrent.left = target.left;

  if (prev?.left === target) {
    prev.left = rightCurrent;
  } else {
    prev.right = rightCurrent;
  }

  return v.left;
};
