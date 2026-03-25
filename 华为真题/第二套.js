// lru
// 设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。当缓存被填满时，它应该删除最近最少使用的项目。

// 它应该支持以下操作： 获取数据 get 和 写入数据 put 。

// 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

// 示例：

// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.head = {
    val: "head",
    next: null,
    prev: null,
  };

  this.tail = {
    val: "tail",
    next: null,
    prev: null,
  };

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.move2Head = function (node) {
  node.next = this.head.next;
  node.next.prev = node;
  this.head.next = node;
  node.prev = this.head;
};

LRUCache.prototype.delteAtTail = function () {
  const needDel = this.tail.prev
  this.tail.prev = this.tail.prev.prev;
  this.tail.prev.next = this.tail;
  this.map.delete(needDel.key);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.prev.next = node.next
    node.next.prev = node.prev
    this.move2Head(node);
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.prev.next = node.next
    node.next.prev = node.prev
    this.move2Head(node);
    node.value = value;
  } else {
    while (this.map.size >= this.capacity) {
      this.delteAtTail();
    }
    const node = { key, value, next: null, prev: null };
    this.move2Head(node);
    this.map.set(key, node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// 执行用时分布
// 60
// ms
// 击败
// 8.00%


// LCR 089. 打家劫舍
// 已解答
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响小偷偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。



// 示例 1：

// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2：

// 输入：nums = [2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

  if (nums.length === 1) return nums[0]
  // dp[i] 第i家房子最多偷的价值 
  // dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
  // 初始化 dp[0] = nums[0]
  // dp[1] = Math.max(nums[0],nums[1])
  const dp = new Array(nums.length)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp.pop()
};

// 执行用时分布
// 57
// ms
// 击败
// 31.08%


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
var widthOfBinaryTree = function (root) {
  if (!root) return 0
  const queue = [[root, 0]]
  let layerCnt = 1
  let width = 0
  while (queue.length > 0) {
    let currentLayerCnt = 0
    let minIndex = queue[0][1]
    let maxIndex = queue[queue.length - 1][1]
    width = Math.max(width, maxIndex - minIndex + 1)
    for (let i = 0; i < layerCnt; i++) {
      const [node, index] = queue.shift()
      if (node.left) {
        currentLayerCnt++
        queue.push([node.left, 2 * index-minIndex])
      }
      if (node.right) {
        currentLayerCnt++
        queue.push([node.right, 2 * index + 1-minIndex])
      }
    }
    layerCnt = currentLayerCnt
  }
  return width
};

// 执行用时分布
// 11
// ms
// 击败
// 30.33%