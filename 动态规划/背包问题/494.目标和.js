// 给你一个非负整数数组 nums 和一个整数 target 。
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

/**
 * 设置 加 + 的元素和为 left
 *     加 - 的元素和为 right
 * 所有数求和为sum
 * 加入符号之后的和为target
 *
 * 有关系
 * left+right = sum (1)
 * left-right = target (2)
 *
 * (1) + (2)
 * 2*left = (sum + taget)
 * left = (sum+target) / 2
 *
 * => 转换成 背包容积为  (sum+target) / 2  用物品恰好能凑出这个数量的方法数量
 * 注意 这里不是最大价值了 是方法数量 那么递推公式也不一样
 *
 * 递推公式含义 对于 前i个物品 容量为j的情况下 有 dp[i][j] 种情况 正好能凑齐 j
 * dp[i][j] = 不选 i的情况下 d[i-1][j] + 选i的情况 dp[i-1][j-weight[i]]
 * 初始化 第一行 对于 j = 0 || j == num[i] 1 其他0
 *       第一列  都是 1 也就是 所有元素都不选 那么凑出的就是0
 *
 * 示例 2：输入：nums = [1], target = 1  输出：1
 * 根据给的例子 sum = 1 target = 1 capcity = 1  dp[0][1] = 1 用第一个物品凑出1的数量为1
 * 用第0个物品凑出0 不选 也算是一种 dp[0][0] = 1 初始化
 *
 * dp 0 1 2 3 4 6 => 背包容量
 * 0 不选任何物品
 * 1 选0号
 * 2 选1号
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  const packageCapacaity = (sum + target) / 2;
  if (
    packageCapacaity < 0 ||
    packageCapacaity !== Math.trunc(packageCapacaity)
  ) {
    return 0;
  }
  /** 加一层 什么物品都没有的情况 此时凑出 容量为0也有一种 */
  const dp = Array.from({ length: nums.length + 1 }, () =>
    new Array(packageCapacaity + 1).fill(0)
  );
  dp[0][0] = 1;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= packageCapacaity; j++) {
      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[nums.length][packageCapacaity];
};
