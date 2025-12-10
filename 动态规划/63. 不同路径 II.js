/**
 * dp[i][j] 到达 i j 的位置 有 dp[i][j] 种方法
 * dp[i][j] = (grid[i-1][j] === 1 ?dp[i-1][j] : 0) + (grid[i][j-1] === 1 ?dp[i][j-1] : 0)
 * 初始化 i = 0 grid[0][j] === 0 ? 1 : 后面的都是0 j同理
 * 先列 后 行
 * 
 * 
 * 考虑目标为1的情况
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if(obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1] === 1) return 0
  const dp = Array.from({ length: obstacleGrid.length }, () =>
    new Array(obstacleGrid[0]?.length).fill(0)
  );

  let j = 0;
  while (j < obstacleGrid[0]?.length && obstacleGrid[0][j] !== 1) {
    dp[0][j] = 1;
    j++;
  }

  let i = 0;
  while (i < obstacleGrid.length && obstacleGrid[i][0] !== 1) {
    dp[i][0] = 1;
    i++;
  }

  for (i = 1; i < obstacleGrid.length; i++) {
    for (j = 1; j < obstacleGrid[i]?.length; j++) {
      dp[i][j] =
        (obstacleGrid[i - 1][j] === 1 ? 0 : dp[i - 1][j]) +
        (obstacleGrid[i][j - 1] === 1 ? 0 : dp[i][j - 1]);
    }
  }

  return dp[obstacleGrid.length-1][obstacleGrid[0].length-1]
};
