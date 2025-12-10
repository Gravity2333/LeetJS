/**
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

 

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
 */

/**
 * 完全背包的 恰好填满背包需要的最多/最小数量问题
 * dp[i][j] 表示 前 i个元素 填满j容量的背包 最小需要 dp[i][j] 元素 (每种不限量的情况下)
 * 递推公式: dp[i][j] = min(dp[i-1][j],1+dp[i][j-coins[i]])
 * 初始化 dp[0][0] = 0 第一行 能对coins[0] 取余的 都是 j/coins[0] 否则 0 第一列 都是0
 * 顺序 先硬币 后 容量
 *
 * 注意 求最小值 必须得要初始化为最大值 否则默认值0 会把min的结果覆盖掉
 * 你需要知道 dp[i][j] = 0 是 不需要找零 而 Infinity是无法找零
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array.from({ length: coins.length }, () =>
    new Array(amount + 1).fill(Infinity)
  );
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (i === 0) {
        if (j % coins[0] === 0) {
          dp[0][j] = j / coins[0];
        }
      } else if (j === 0) {
        dp[i][0] = 0;
      } else {
        if (coins[i] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i][j - coins[i]]);
        }
      }
    }
  }

  return dp[coins.length - 1][amount] === Infinity
    ? -1
    : dp[coins.length - 1][amount];
};

/** 反过来 求最大值 */
/**
 * 完全背包的 恰好填满背包需要的最多/最小数量问题
 * dp[i][j] 表示 前 i个元素 填满j容量的背包 最小需要 dp[i][j] 元素 (每种不限量的情况下)
 * 递推公式: dp[i][j] = min(dp[i-1][j],1+dp[i][j-coins[i]])
 * 初始化 dp[0][0] = 0 第一行 能对coins[0] 取余的 都是 j/coins[0] 否则 0 第一列 都是0
 * 顺序 先硬币 后 容量
 *
 * 注意 求最小值 必须得要初始化为最大值
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeMax = function (coins, amount) {
  const dp = Array.from({ length: coins.length }, () =>
    new Array(amount + 1).fill(Infinity)
  );
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (i === 0) {
        if (j % coins[0] === 0) {
          dp[0][j] = j / coins[0];
        }
      } else if (j === 0) {
        dp[i][0] = 0;
      } else {
        if (coins[i] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i][j - coins[i]]);
        }
      }
    }
  }

  return dp[coins.length - 1][amount] === Infinity
    ? -1
    : dp[coins.length - 1][amount];
};


/** 1 维 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount+1).fill(Number.MAX_VALUE)
    dp[0] = 0

    for(let i=0;i<coins.length;i++){
        for(let j =0;j<=amount;j++){
            if(j < coins[i]){
                dp[j] = dp[j]
            }else{
                dp[j] = Math.min(dp[j],dp[j-coins[i]]+1)
            }
        }
    }

    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount]
};