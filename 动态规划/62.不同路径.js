/**
 * dp[i][j] 走到 i 行 j 列 的格子 有dp[i][j] 个方法
 * dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 初始化 第一行 第一列 dp[0][j] = 1 , dp[i][0] = 1 (方法)
 * 顺序 先 j 后 i
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        dp[0][j] = 1;
      } else if (j === 0) {
        dp[i][0] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};

/**dp[i][j]为到达ij的数量
 * dp[0][0] = 1 第一行都是1 第一列也都是1
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array.from({ length: m  }, () => new Array(n).fill(0));
  let i = 0,
    j = 0;
  while (j < n) {
    dp[0][j++] = 1;
  }

  while (i < m) {
    dp[i++][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m-1][n-1];
};
