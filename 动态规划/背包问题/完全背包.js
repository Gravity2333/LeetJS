/**
 * 完全背包
 * @param {*} packageWeiget
 * @param {*} weights
 * @param {*} values
 */
function maxPackageValue(packageWeiget, weights, values) {
  const dp = Array.from({ length: weights.length }, () =>
    new Array(packageWeiget + 1).fill(0)
  );
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j <= packageWeiget; j++) {
      if (i === 0) {
        dp[0][j] = weights[0] > j ? 0 : Math.trunc(j /weights[0]) * values[0];
      } else {
        if (weights[i] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weights[i]] + values[i]);
        }
      }
    }
  }
  return dp.pop().pop()
}

/**
 * dp项含义 j 容量 在物品可重复的情况下 最大放 dp[j]
 * dp[j] = max(dp[j],dp[j-w[i]]+v[i])
 * 初始化 一维 相当于从物品  0 开始 装满0容量背包 都是0 即可
 * 顺序 重要 完全背包 物品可以重复选 遍历容量的时候 不需要逆向 因为要应用同一行计算的结果！
 */

/** 一维解法 */
function maxPackageValue(packageWeiget, weights, values) {
    const dp = new Array(packageWeiget + 1).fill(0)

    for(let i=0;i<weights.length;i++){
        /** 一维的完全背包不需要逆向traverse */
        for(let j=0;j<=packageWeiget;j++){
            if(weights[i] > j){
                dp[j] = dp[j]
            }else{
                dp[j] = Math.max(dp[j],dp[j-weights[i]]+values[i])
            }
        }
    }

    return dp.pop()
}
console.log(maxPackageValue(10, [2, 3], [3, 4]));
// 期望结果：15

console.log(maxPackageValue(10, [2, 3, 5], [6, 10, 15]));
// 期望结果：30

console.log(maxPackageValue(7, [2, 3, 4], [5, 8, 9]));
// 期望结果：18
