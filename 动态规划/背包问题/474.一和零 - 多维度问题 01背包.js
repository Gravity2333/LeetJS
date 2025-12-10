// 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

// 请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。

// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

// 示例 1：

// 输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
// 输出：4
// 解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
// 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
// 示例 2：

// 输入：strs = ["10", "0", "1"], m = 1, n = 1
// 输出：2
// 解释：最大的子集是 {"0", "1"} ，所以答案是 2 。

/**
 * 这个题属于 01背包问题中的 指定背包体积 最多可以装多少数量的物品
 * 先看简化的情况
 * 前 i 个物品 在背包容量为 j的情况下，最多可以存放 dp[i][j] 个物品
 * 递推公式: dp[i][j] = max(dp[i-1][j],1+dp[i-1][j-nums[i]])
 * 初始化 第 0 个物品 在0的情况下 最多放0 个 dp[0][0] = 0
 *
 * 但是这个题会复杂一点 因为背包包含多个维度 即 1的数量不能 超过 n ， 0 的数量不能超过 m
 * 这就需要一个 三维数组
 * 对于前面 k 个物品，满足 最多有 i 个 0 j 个 1的物品 最多可以放 dp[k][i][j] 个
 * dp[k][i][j] = max(不选 k : dp[k-1][i][j] ，选k: 1 + dp[k-1][i-len(k,0)][j-len(k,1)] )
 * 也就是 对于容量的讨论，需要是一个二维的 对于0 1 数量的每种可能都进行讨论
 */

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 },()=>0));

  for (let k = 0; k < strs.length; k++) {
    /** 统计str中 0 1 数量 纪录为 x y */
    let x = 0,
      y = 0;
    const str = strs[k];

    for (let i = 0; i < str.length; i++) {
      if (0 == str[i]) x++;
      else if (1 == str[i]) y++;
    }

    // 从后往前
    for (let i = m; i >= 0; i--) {
      // 统计 0
      for (let j = n; j >= 0; j--) {
        // 统计 1
        if (x > i || y > j) {
          dp[i][j] = dp[i][j];
        } else {
          dp[i][j] = Math.max(dp[i][j], 1 + dp[i - x][j - y]);
        }
      }
    }
  }

  return dp[m][n];
};
