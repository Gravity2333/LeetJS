// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 示例 1：

// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// 示例 2：

// 输入：nums = [1,2,3,5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。

// 提示：

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

/**
 * 思路
 * 求总和 / 2  =  half
 * 转换成 half容积的背包，是否能被恰好填满 如果能 则说明可以分割
 *
 * 这题中 体积和价值 都是数字的大小
 * dp[i][j] 容积为j的背包 在前面 i 个元素中，最大能装满的价值 为dp[i][j]
 * dp[i][j] = max(dp[i-1][j] , nums[i] + dp[i-1][j-nums[i]])
 * 初始化 dp[0][0] = 0 初始化第一行 如果j>=nums[0] 则价值为nums[0] 初始化第一列 都是0
 * 顺序 先物品 后 容量 2层循环 （2维数组） ｜ 一维数组的重量遍历需要从后向前
 */

/** 二维数组的方式 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const half = nums.reduce((prev, curr) => prev + curr, 0) / 2;
  if (half !== Math.trunc(half)) {
    /** 小数的情况 直接返回false */
    return false;
  }
  const dp = Array.from({ length: nums.length }, () =>
    new Array(half + 1).fill(0)
  );
  for (let i = 0; i < nums.length; i++) {
    // 物品
    for (let j = 0; j <= half; j++) {
      // 容量
      if (i === 0) {
        /** 初始化 第一行 */
        if (j >= nums[0]) {
          dp[0][j] = nums[0];
        }
      } else if (j === 0) {
        /** 初始化第一列 */
        dp[i][0] = 0;
      } else {
        if (nums[i] > j) {
          /** 物品比背包大  此时不能选 需要直接继承不选的情况*/
          dp[i][j] = dp[i - 1][j];
          continue;
        } else {
          dp[i][j] = Math.max(
            /** 不取 i */ dp[i - 1][j],
            /** 取 i 价值 */ nums[i] + dp[i - 1][j - nums[i]]
          );
        }
      }
    }
  }

  return dp[nums.length - 1][half] === half;
};

/** 一维数组的方式 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const half = nums.reduce((prev, curr) => prev + curr, 0) / 2;
  if (half !== Math.trunc(half)) {
    /** 小数的情况 直接返回false */
    return false;
  }
  /** 用0 初始化 由于每次都取最大值，所以一维数组的方式不用刻意初始化 */
  const dp = new Array(half + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    // 物品
    for (let j = half; j >= 0; j--) {
      // 容量
      /** 由于是 01背包 所以重量需要从右侧向左遍历 */
      if (nums[i] > j) {
        /** 物品比背包大  此时不能选 需要直接继承不选的情况*/
        dp[j] = dp[j];
        continue;
      } else {
        dp[j] = Math.max(
          /** 不取 i */ dp[j],
          /** 取 i 价值 */ nums[i] + dp[j - nums[i]]
        );
      }
    }
  }

  return dp[half] === half;
};
