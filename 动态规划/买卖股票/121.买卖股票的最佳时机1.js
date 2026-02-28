// 121.买卖股票的最佳时机1

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
// 示例 1
// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

/**
 * 买卖一次的情况下 状态包含
 * 0 不持有股票
 * 1 持有股票
 * 为什么不把状态设置为
 * 0 买入
 * 1 卖出
 * 因为还存在 不买入 也不卖出的状态!
 * 为了减少状态，我们才有 是否持有 来定义状态，持有可能是当天买入，也可能是前几天买入的
 *
 * 所以 我们定义dp项的含义
 * 第 i 天 持有，不持有股票的最大收益为 dp[i][[持有，不持有]]
 * 递推公式：
 * dp[i][0] = max( 保持持有： dp[i-1][0] , 第i天买入 (-price[i])) // 只买入一次，如果i天买入，那么头一天的收益一定是 0
 * dp[i][1] = max( 保持不持有: dp[i-1][1], 第i天卖出 dp[i-1][0] + price[i] ) // 只能卖出一次 前一天一定持有
 *
 * 初始化 dp[0] = [-price[0],0] 第一天买入的情况
 */

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
      /** 保持持有 */ dp[i - 1][0],
      /** 第i天买入 */ -prices[i],
    );

    /** 第 i 天不持有 */
    dp[i][1] = Math.max(
      /** 保持不持有 */
      dp[i - 1][1],
      /** 第i天卖出 */
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
 * dp[i][1] = Math.max(dp[i-1][1],0 - proces[i])
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
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }

  return Math.max(...dp[prices.length - 1]);
};
