// 718.最长重复子数组
// 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
// 示例 1：
// 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// 输出：3
// 解释：长度最长的公共子数组是 [3,2,1] 。
// 示例 2：
// 输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// 输出：5

/**
 * 思路
 * 两个序列重复区间问题 设置 i j 二维dp
 * 如果 i j 指的元素相同，那么就需要看 i-1 j-1结尾的最长重复子数组的长度
 *
 * dp定义 对于 nums1 i 结尾的子数组 nums2 j结尾的子数组 其最长公共子数组长度为 dp[i][j]
 * dp[i][j] = nums1[i] === nums[j] ? dp[i-1][j-1] + 1: 0
 * 初始化 第一行 nums1[i] === nums[j] 1 否则 0  第一列 nums1[i] === nums[j] 1 否则 0
 * 行列顺序
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const dp = Array.from({ length: nums1.length }, () =>
    new Array(nums2.length).fill(0),
  );
  let max = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      /** 初始化情况 */
      if (i === 0 || j === 0) {
        if (nums1[i] === nums2[j]) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = 0;
        }
      } else {
        if (nums1[i] === nums2[j]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = 0;
        }
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};

/**
 * 对于 nums1 的 i号元素 nums2 的 j号元素 结尾的最长重复子数组长度为 dp[i][j]
 * dp[i][j] = nums1[i] === nums[2] ? dp[i-1][j-1] + 1 : 0
 * 初始化 第一行 如果nums2[j] === nums1[0] dp[0][j] = 1 否则 0
 * 第一列。如果nums1[i] = nums2[0] dp[i][0] = 1否则 0
 * 顺序 行 -> 列
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  // 对于 nums1 以1结尾 nums2以j结尾的子数组，并且以nums1[i] nums2[j] 作为后缀结尾的公共子序列最大长度dp[i][j]
  // dp[i][j] = nums1[i] === nums[j] ? dp[i-1][j-1] + 1 :0
  // 初始化 第一行 nums2[j] === nums1[0]?  1 : 0
  // 第一列 nums2[0] === nums1[i]?  1 : 0
  const dp = Array.from({ length: nums1.length }, () =>
    new Array(nums2.length).fill(0),
  );
  let max = -1;
  for (let j = 0; j < nums2.length; j++) {
    if (nums2[j] === nums1[0]) {
      dp[0][j] = 1;
      max = Math.max(max,dp[0][j]);
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === nums2[0]) {
      dp[i][0] = 1;
      max = Math.max(max,  dp[i][0]);
    }
  }

  for (let i = 1; i < nums1.length; i++) {
    for (let j = 1; j < nums2.length; j++) {
      dp[i][j] = nums1[i] === nums2[j] ? dp[i - 1][j - 1] + 1 : 0;
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
