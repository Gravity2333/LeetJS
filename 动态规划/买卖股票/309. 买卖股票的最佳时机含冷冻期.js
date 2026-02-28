/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 0 不持有 1 持有 2 卖出 3 冷
  const dp = Array.from({ length: prices.length }, () => [4]);
  dp[0] = [0, -prices[0], 0, 0];

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][3], dp[i - 1][0]);
    dp[i][1] = Math.max(
      dp[i - 1][0] - prices[i],
      dp[i - 1][1],
      dp[i - 1][3] - prices[i],
    );
    dp[i][2] = dp[i - 1][1] + prices[i];
    dp[i][3] = dp[i - 1][2];
  }

  return Math.max(...dp.pop());
};

/**
 * dp[i][0]  i 天 不持有
 * dp[i][1]  i 天持有
 * dp[i][2]  i 天冷冻
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = Array.from({ length: prices.length }, () => new Array(3).fill(0));
  dp[0] = [0, -prices[0], 0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = dp[i - 1][1] + prices[i];
  }
  return Math.max(...dp[prices.length-1])
};
