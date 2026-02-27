// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

/**
 * 这个题目特点在于 让我们自己收集物品
 * 本质还是 完全背包求最小数量问题
 * 前 i 个物品 j背包的情况下，最少dp[i][j] 个物品 可以填满背包
 * dp[i][j] = min(dp[i][j],1+dp[i][j-nums[i]])
 * dp[0][0] 用 0 填满 0体积 最少有0 种，其余的第一行都是Infinity 用0无法填满非0 第一列都是1
 * 先物品 后体积
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // collect
  const objects = [];
  for (let i = 0; i * i <= n; i++) {
    objects.push(i * i);
  }

  // dp
  const dp = Array.from({ length: objects.length }, () =>
    new Array(n + 1).fill(Infinity),
  );

  // 初始化
  dp[0][0] = 0;
  for (let i = 1; i < objects.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (objects[i] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - objects[i]] + 1);
      }
    }
  }

  return dp[objects.length - 1][n];
};

/**
 * 这个题目的关键点是 要自己收集物品！
 * 最少数量 初始化Infinity
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const goods = [];
  for (let i = 1; i * i <= n; i++) {
    goods.push(i * i);
  }

  const dp = new Array(n + 1).fill(Infinity);
  // 0个物品 填满 0-n 最少几种
  dp[0] = 0;
  for (let i = 0; i < goods.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (goods[i] > j) {
        dp[j] = dp[j];
      } else {
        dp[j] = Math.min(dp[j], 1 + dp[j - goods[i]]);
      }
    }
  }
  return dp.pop();
};

/** REVIEW
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 收集物品
  const nums = [];
  for (let i = 1; i * i <= n; i++) {
    nums.push(i * i);
  }
  const dp = new Array(n+1).fill(Infinity)
  dp[0] = 0

  for(let i=1;i<=nums.length;i++){
    for(let j=0;j<=n;j++){
      if(j < nums[i-1]){
        dp[j] =dp[j]
      }else{
        dp[j] = Math.min(dp[j],1+dp[j-nums[i-1]])
      }
    }
  }
  return dp[n]
};
