// 746. 使用最小花费爬楼梯

/**
 * dp[i] 到达i阶的最小花费
 * dp[i] = max((dp[i-1] + cost[i-1]),(dp[i-2] + cost[i-2] ))
 * 初始化 dp[0] = 0  dp[1] = 0 因为可以选择 从 0 / 1 开始爬
 * 顺序遍历
 * 
 * 本题注意 顶部需要走完数组 
 * 比如 数组长度是 3 不是你走到下标为2的位置就完了，你还需要加上2的cost
 * 所以本题的i <= cost.length
 * 
 * cost[0|1] 表示 走到0|1 阶的最小cost 都是 0
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length === 1) return cost[0];
  const tmp = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    tmp.push(Math.min(tmp.shift() + cost[i - 2], tmp[0] + cost[i - 1]));
  }
  return tmp[1];
};
