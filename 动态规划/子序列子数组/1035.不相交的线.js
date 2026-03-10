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
  return dp[nums1.length - 1][nums2.length - 1];
};

/** 最大公共子序列
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  // i j 代表 以i j 结尾的子数组，其最大公共子序列的长度dp[i][j]
  // 初始化 nums2[j] 第一行 如果某个元素等于nums1[0] 那么后续的都是 1
  // 第一列 nums1[j] 如果某个元素等于nums2[0] 那么后续都是1
  const dp = Array.from({ length: nums1.length }, () =>
    new Array(nums2.length).fill(0),
  );

  for (let j = 0; j < nums2.length; j++) {
    if (nums1[0] === nums2[j]) {
      while (j < nums2.length) dp[0][j++] = 1;
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === nums2[0]) {
      while (i < nums1.length) dp[i++][0] = 1;
    }
  }

  for (let i = 1; i < nums1.length; i++) {
    for (let j = 1; j < nums2.length; j++) {
      dp[i][j] =
        nums1[i] === nums2[j]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp.pop().pop()
};
