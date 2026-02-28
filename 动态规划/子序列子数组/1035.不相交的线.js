/** 最大公共子序列
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const dp = Array.from({ length: nums1.length }, () =>
    new Array(nums2.length).fill(0),
  );
  for (let j = 0; j < nums2.length; j++) {
    if (nums1[0] === nums2[j]) {
      while (j < nums2.length) dp[0][j++] = 1;
      break;
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === nums2[0]) {
      while (i < nums1.length) dp[i++][0] = 1;
      break;
    }
  }

  for (let i = 1; i < nums1.length; i++) {
    for (let j = 1; j < nums2.length; j++) {
      dp[i][j] =
        nums1[i] === nums2[j]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
  return dp[nums1.length-1][nums2.length-1]
};
