// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置在下标 0。

// 每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在索引 i 处，你可以跳转到任意 (i + j) 处：

// 0 <= j <= nums[i] 且
// i + j < n
// 返回到达 n - 1 的最小跳跃次数。测试用例保证可以到达 n - 1。

// 示例 1:

// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
//      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
// 示例 2:

// 输入: nums = [2,3,0,1,4]
// 输出: 2

// 动态规划
//     到达 i  最短步数为 dp[i]
//     dp[i] = min(for(前i-1元素 所有覆盖范围超过 i的元素) dp[j])+1
//     dp[0] = 0
//     顺序

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = 0;
  for (let i = 1; i < nums.length; i++) {
    let minSteps = Infinity;
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        minSteps = Math.min(minSteps, dp[j]);
      }
    }
    dp[i] = minSteps + 1;
  }

  return dp[nums.length - 1];
};

// [2,3,1,1,4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 到达 i 最少步数为 dp[i]
  const dp = new Array(nums.length).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] + j >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }
  return dp.pop()
};
