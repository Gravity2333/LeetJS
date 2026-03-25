/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // dp[i][j] 到达 i j 的最短路径和
  // dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
  // 初始化 第一行 第一列累加

  const dp = Array.from({ length: grid.length }, () => new Array(grid[0].length));
  dp[0][0] = grid[0][0];
  for (let j = 1; j < grid[0].length; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < grid.length; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp.pop().pop()
};
