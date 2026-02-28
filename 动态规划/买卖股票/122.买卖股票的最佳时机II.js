// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。然而，你可以在 同一天 多次买卖该股票，但要确保你持有的股票不超过一股。
// 返回 你能获得的 最大 利润 。

// 示例 1：
// 输入：prices = [7,1,5,3,6,4]
// 输出：7
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
// 最大总利润为 4 + 3 = 7 。
// 示例 2：

// 输入：prices = [1,2,3,4,5]
// 输出：4
// 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
// 最大总利润为 4 。
// 示例 3：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0。

/**
 * 两种解决办法
 * 1. 贪心算法
 * 由于求的是多次买卖之后的总收益，我们可以考虑
 * 计算每2天买入 卖出的差值
 * 从头开始计算，如果有正向收益 就累加，如果没有 就跳过
 *
 * 注意 只有股票2 可以用贪心 因为可以多次买卖
 *
 * 2. 动态规划 正统解法
 * 和1 的区别仅仅在，可以多次买卖，也就是每次买入的时候 不能用 0 - price[i] 而是在上一天不持有的基础上 - proce[i]
 * 所以 我们定义dp项的含义
 * 第 i 天 持有，不持有股票的最大收益为 dp[i][[持有，不持有]]
 * 递推公式：
 * dp[i][0] = max( 保持持有： dp[i-1][0] , 第i天买入 dp[i-1][1] - (-price[i]))
 * dp[i][1] = max( 保持不持有: dp[i-1][1], 第i天卖出 dp[i-1][0] + price[i] )
 *
 * 初始化 dp[0] = [-price[0],0] 第一天买入的情况
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let income = 0;
  for (let i = 1; i < prices.length; i++) {
    const currentIncome = prices[i] - prices[i - 1];
    if (prices[i] - prices[i - 1] > 0) {
      income += currentIncome;
    }
  }
  return income;
};

/** 方法2 dp */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /** 0 持有 1 不持有 */
  const dp = Array.from({ length: prices.length }, () => [0, 0]);
  /** 初始化 第一天买入的情况 */
  dp[0] = [-prices[0], 0];

  for (let i = 1; i < prices.length; i++) {
    /** 第 i 天持有 */
    dp[i][0] = Math.max(
      /** i-1天 持有 */
      dp[i - 1][0],
      /** i-1天不持有 i天买入 */
      dp[i - 1][1] - prices[i],
    );

    /** 第 i 天不持有 */
    dp[i][1] = Math.max(
      /** i-1 天不持有 */
      dp[i - 1][1],
      /** i-1天持有 i天卖出 */
      dp[i - 1][0] + prices[i],
    );
  }

  return Math.max(...dp.pop());
};

/**
 * [不持有，持有]
 * dp[i][0] i天 不持有最大收益
 * dp[i][1] i天 持有最大收益
 *
 * dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i])
 * dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] - proces[i])
 *
 * 初始化 dp[0][0] = 0 , dp[0][1] = -prices[0]
 *
 * 顺序
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = Array.from({ length: prices.length }, () => [0, 0]);
  dp[0] = [0, -prices[0]];

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return Math.max(...dp[prices.length - 1]);
};
