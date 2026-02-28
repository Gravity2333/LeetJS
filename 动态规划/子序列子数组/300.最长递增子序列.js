// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

/**
 * 思路
 *  比 674 连续递增子序列 复杂一点 这里面不一定连续了
 *  连续的情况，我们看当前i节点前一个节点
 *  不连续，我们就得看 i 节点前所有的节点 是否能和 i 构成递增子序列
 *
 * dp 项含义，对于 i 号元素结尾的递增子序列 最大长度为 dp[i]
 * 递推关系: dp[i] = max(for(j: 0 -> i-1 nums[j] < nums[i] > dp[j] + 1 : 1))
 * 初始化 dp[0] = 1
 * 顺序 从前向后填写dp数组
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let max = 1;

  for (let i = 1; i < nums.length; i++) {
    let maxLISEndWithI = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        maxLISEndWithI = Math.max(maxLISEndWithI, dp[j]);
      }
    }
    dp[i] = maxLISEndWithI + 1;
    max = Math.max(max, dp[i]);
  }

  return max;
};

/**
 * 和 连续子序列问题区别是 可能不连续
 * 扩展 dp i 需要查看前 i-1个数
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  let max = -Infinity;
  for (let i = 1; i < nums.length; i++) {
    let maxLen = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        maxLen = Math.max(maxLen, dp[j]);
      }
    }
    dp[i] = maxLen + 1;
    max = Math.max(max, dp[i]);
  }
  return max < 1 ? 1 : max;
};
