/**
 * 动态规划问题 01背包 -> 确定背包重量 让价值尽可能最大
 * 这个题要考虑到，最大的情况，就是尽可能分成2个重量相同的集合 本题价值 = 重量
 * 和拆分等和子集区别是 本题不要求正好拆分 而是尽可能拆分 所以有背包体积 = sum/ 2
 *
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const sum = stones.reduce((prev, curr) => prev + curr, 0);
  const target = Math.trunc(sum / 2);

  const dp = new Array(target + 1).fill(0);

  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= 0; j--) {
      if (stones[i] > j) {
        dp[j] = dp[j];
      } else {
        dp[j] = Math.max(
          /** 不选 */ dp[j],
          /** 选 */ stones[i] + dp[j - stones[i]]
        );
      }
    }
  }

  return Math.abs(dp[target] - (sum - dp[target]));
};
