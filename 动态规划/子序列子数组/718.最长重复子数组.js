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
