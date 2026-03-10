// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组是数组中的一个连续部分。
// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [5,4,-1,7,8]
// 输出：23

/**
 * 思路 i 结尾的最大和连续子数组和为dp[i]
 * dp[i] = dp[i-1] + nums[i] < dp[i-1] ? 更小了 此时 dp[i] = Max(dp[i-1] + nums[i],nums[i]) : 更大了 果断 dp[i] = dp[i-1] + nums[i]
 * dp[0] = nums[0]
 * 顺序
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] + nums[i] < nums[i]) {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    } else {
      dp[i] = dp[i - 1] + nums[i];
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

/** 贪心算法
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = -Infinity;
  for (let num of nums) {
    if (sum + num < num) {
      sum = num;
    } else {
      sum += num;
    }

    max = Math.max(max, sum);
  }
  return max;
};

/** 动态规划
 * 对于 i 结尾的子数组 最大和为 dp[i]
 * dp[i] = dp[i-1] + nums[i] > nums[i] ? dp[i-1] + nums[i]: nums[i]
 * 初始化 dp[0] = nums[0]
 * 顺序
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = Array.from({ length: nums.length }, () => 0);
  dp[0] = nums[0];
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] + nums[i] > nums[i] ? dp[i - 1] + nums[i] : nums[i];
    max = Math.max(max, dp[i]);
  }
  return max;
};

var maxSubArray = function (nums) {
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] < nums[i]) {
      sum = nums[i];
    } else {
      sum = nums[i] + sum;
    }
    max = Math.max(max, sum);
  }
  return max;
};
