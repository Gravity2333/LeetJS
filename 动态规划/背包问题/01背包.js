// n = 3
// W = 4
// weights = [2, 1, 3]
// values  = [4, 2, 3]
// 解释：
// 容量 4

// 三个物品：

// 物品1：重量2，价值4

// 物品2：重量1，价值2

// 物品3：重量3，价值3

// 输出：
// Copy code
// 最大价值 = 6
// 选择物品 = {1, 2}

// 输入：
// n = 5
// W = 10
// weights = [2, 2, 6, 5, 4]
// values  = [6, 3, 5, 4, 6]

// 输出：
// 最大价值 = 15
// 选择物品 = {1, 4, 5}

function maxPackageValue(packageWeiget, weights, values) {
  const dp = Array.from({ length: weights.length }, () =>
    new Array(packageWeiget + 1).fill(0)
  );

  // 处理 第一行 选第一个物品
  for (let i = weights[0]; i <= packageWeiget; i++) {
    dp[0][i] = values[0];
  }

  // 2层循环 填写表格
  // 物品
  for (let i = 1; i < weights.length; i++) {
    for (let j = 0; j <= packageWeiget; j++) {
      if (weights[i] > j) {
        // 装不下 那么只有不选
        dp[i][j] = dp[i - 1][j];
      } else {
        // 装得下 分2种情况
        dp[i][j] = Math.max(
          dp[i - 1][j],
          values[i] + dp[i - 1][j - weights[i]]
        );
      }
    }
  }

  return dp[weights.length - 1][packageWeiget];
}

console.log(maxPackageValue(4, [2, 1, 3], [4, 2, 3])); //6
console.log(maxPackageValue(10, [2, 2, 6, 5, 4], [6, 3, 5, 4, 6])); // 15

/** 01 背包
 * 递推公式含义 dp[i][j] 前 i 个物品 放入j容量背包 最大价值
 * 递推公式 dp[i][j] = max(dp[i-1][j],dp[i-1][j-w[i]] + v[i])
 * 初始化  第一列 dp[i][0] = 0 第一行 dp[0][j] = v[0] (j>=w[0])
 * 遍历顺序 物品 1~n 容量 0~W
 */

function maxPackageValue(packageWeiget, weights, values) {
  const dp = Array.from({ length: weights.length }, () =>
    new Array(packageWeiget + 1).fill(0)
  );
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j <= packageWeiget; j++) {
      if (j === 0) {
        dp[i][0] = 0;
      } else if (i === 0) {
        dp[0][j] = weights[0] <= j ? values[0] : 0;
      } else {
        if (j < weights[i]) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.max(
            dp[i - 1][j],
            dp[i - 1][j - weights[i]] + values[i]
          );
        }
      }
    }
  }
  return dp;
}

function maxPackageValue(packageWeiget, weights, values) {
  const dp = new Array(packageWeiget + 1).fill(0);

  for (let i = 0; i < weights.length; i++) {
    for (let j = packageWeiget; j >= 0; j--) {
      if (j <= weights[i]) {
        dp[j] = dp[j];
      } else {
        dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i]);
      }
    }
  }

  return dp.pop();
}

console.log(maxPackageValue(4, [2, 1, 3], [4, 2, 3])); //6
console.log(maxPackageValue(10, [2, 2, 6, 5, 4], [6, 3, 5, 4, 6])); // 15
