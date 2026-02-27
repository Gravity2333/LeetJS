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
    new Array(amount + 1).fill(Infinity),
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
    new Array(amount + 1).fill(Infinity),
  );
  dp[0] = 0;
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
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (j < coins[i]) {
        dp[j] = dp[j];
      } else {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }
  }

  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

/**
 * 求恰好装满背包最少数量
 * 注意 这是一个完全背包问题
 * dp[j]: 前 i 个硬币 能恰好找零 最少数量为 dp[j]
 * dp[j] = min(dp[j] , 1+dp[j-coins[i]])
 *
 * 初始化有讲究:
 * 求 最小值 dp初始化为最大值 表示 不可找零
 * 第一行初始化
 * dp[0] = 0 容量为0 用第一个coin找零 有0种 算是可以找零
 * 其余的 j % coin[i] ===0 ? j / coin[i]: Infinity
 *
 * 完全背包 从前往后即可
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0;
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  // 初始化
  for (let i = coins[0]; i <= amount; i++) {
    if (i % coins[0] === 0) {
      dp[i] = i / coins[0];
    }
  }

  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (coins[i] > j) {
        dp[j] = dp[j];
      } else {
        dp[j] = Math.min(dp[j], 1 + dp[j - coins[i]]);
      }
    }
  }
  const res = dp.pop();
  return res === Infinity ? -1 : res;
};

//  review
/** 注意区分 求最小值初始化不能用0 无法构成就用Infinity代替
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array.from({ length: coins.length + 1 }, () =>
    new Array(amount + 1).fill(Infinity),
  );
  // 没有任何硬币的情况下 组合0 用0个硬币
  dp[0][0] = 0; // 其他第一行的都是Infinity 即无法组合

  for (let i = 1; i <= coins.length; i++) {
    for (let j = 0; j <= amount; j++) {
      if (j < coins[i - 1]) dp[i][j] = dp[i - 1][j];
      else {
        dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i][j - coins[i - 1]]);
      }
    }
  }

  return dp[coins.length][amount] === Infinity ? -1 :  dp[coins.length][amount]
};
