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
          /** 选 */ stones[i] + dp[j - stones[i]],
        );
      }
    }
  }

  return Math.abs(dp[target] - (sum - dp[target]));
};

/** 01背包 最大价值问题
 * 要想石头最小 必须让两组尽可能相等
 * 也就是 尽可能接近 1/2 * 总重量
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
        dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
      }
    }
  }

  const groupMax = dp.pop();
  return Math.abs(sum - groupMax) - groupMax;
};

/**
 * 关键点是什么？
 * 关键点是 你要想到 把石头分成2组 其中一组的重量接近中间值 => 拆分等和子集问题 => 背包问题
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const sum = stones.reduce((prev, curr) => prev + curr, 0);
  const target = Math.trunc(sum / 2);

  const dp = new Array(target+1).fill(0)
  for(let j= stones[0];j<=target;j++){
    dp[j] = stones[0]
  }

  for(let i=1;i<stones.length;i++){
    for(let j=target;j>=0;j--){
      if(j < stones[i]) dp[j] = dp[j]
      else{
        dp[j] = Math.max(dp[j],stones[i] + dp[j-stones[i]])
      }
    }
  }

  const maxValue = dp[target]

  return Math.abs((sum-maxValue) - maxValue)
};
