/**
 * 674.最长连续递增序列
 * 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

    连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
    示例 1：

    输入：nums = [1,3,5,4,7]
    输出：3
    解释：最长连续递增序列是 [1,3,5], 长度为3。
    尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 
    示例 2：

    输入：nums = [2,2,2,2,2]
    输出：1
    解释：最长连续递增序列是 [2], 长度为1。
 */

/**
 * 思路
 * 子序列里最简单的一道题
 * 递推项含义 对于 i 号元素结尾的 连续 递增 子序列 其最大长度为 dp[i]
 *
 * 递推关系有: dp[i] = dp[i-1] < dp[i] ? dp[i-1]+1: 1 看前一项是否更小，如果更小 就可以从前一项为结尾的最长递增子序列扩展！
 * 否则就只能将i号元素作为最长递增子序列 长度为1
 *
 * 初始化 dp[0] = 1 0号元素结尾的最长递增子序列长度为 1
 *
 * 顺序 从前向后填写dp数组
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  /** 初始化dp数组 默认值都是1 */
  const dp = new Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      /** 前一项更小 可以扩展递增子序列 */
      dp[i] = dp[i - 1] + 1;
    } else {
      /** 无法扩展 最小递增子序列为当前数 */
      dp[i] = 1;
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

/**
 * 定义 第 i 个元素结尾的连续递增子序列 最大长度为 dp[i]
 * dp[i] = nums[i-1] < nums[i] ? dp[i-1]+1: 1
 * 初始化 dp[0] = 1
 * 顺序
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let max = 1
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i - 1] < nums[i] ? dp[i - 1] + 1 : 1;
    max = Math.max(max,dp[i] )
  }
  // 子序列不一定在最后产生
  return max
};
