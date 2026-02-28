/** 和 123 一样 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  /** 初始化 */
  const dp = Array.from({ length: prices.length }, () =>
    new Array(2 * k + 1).fill(0),
  );
  /** init 0 */
  for (let i = 1; i < 2 * k + 1; i += 2) {
    dp[0][i] = -prices[0];
  }

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = dp[i - 1][0];
    for (let j = 1; j < 2 * k + 1; j++) {
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i - 1][j - 1] + (j % 2 === 0 ? prices[i] : -prices[i]),
      );
    }
  }

  return Math.max(...dp.pop());
};

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const dp = Array.from({ length: prices.length }, () =>
    new Array(2 * k + 1).fill(0),
  );
  // 初始化
  for (let i = 0; i < 2 * k + 1; i++) {
    dp[0][i] = i % 2 === 0 ? 0 : -prices[0];
  }

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = dp[i - 1][0];

    for (let j = 1; j <= 2 * k; j++) {
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i - 1][j - 1] + (j % 2 === 0 ? prices[i] : -prices[i]),
      );
    }
  }

  return Math.max(...dp[prices.length - 1]);
};

