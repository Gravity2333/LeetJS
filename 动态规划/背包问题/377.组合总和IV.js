// 377. 组合总和 Ⅳ

// 组合总和 123 都能用回溯 尝试一下4

/** 回溯
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (
  nums,
  target,
  currentResult = 0,
  currentPath = [],
  context = { cnt: 0, results: [] }
) {
  /** collect result */
  if (currentResult >= target) {
    if (currentResult === target) {
      context.results.push(currentPath);
      return context.cnt++;
    }
  } else {
    // currentResult < target
    for (let i = 0; i < nums.length; i++) {
      combinationSum4(
        nums,
        target,
        currentResult + nums[i],
        [...currentPath, nums[i]],
        context
      );
    }
  }

  return context;
};

/** 回溯可以 但是可能超过执行时间 考虑用dp */
var combinationSum4 = function (
  nums,
  target,
  currentResult = 0,
  context = { cnt: 0 }
) {
  /** collect result */
  if (currentResult >= target) {
    if (currentResult === target) {
      return context.cnt++;
    }
  } else {
    // currentResult < target
    for (let i = 0; i < nums.length; i++) {
      combinationSum4(nums, target, currentResult + nums[i], context);
    }
  }

  return context.cnt;
};

/**
 * 动态规划 完全背包问题 -> 刚好填满target容量的背包，有多少种方法
 * 对于 前 i 个数字，刚好填满j容量的背包 有dp[i][j] 种方法
 * dp[i][j] = dp[i-1][j] + dp[i][j-nums[i]]
 * 初始化 dp[0][0] = 1 创建 nums.length+1行，0代表没有任何元素的情况下，填满0的背包 为1种
 * 先物品 后 容积
 *
 * 顺序有讲究的  如下的方式 先物品 后 重量 =》 组合数
 *                      先重量 后 物品 =》 排列数
 */

/** 组合  */
var combinationSum4 = function (nums, target) {
  const dp = Array.from({ length: nums.length + 1 }, () =>
    new Array(target + 1).fill(0)
  );
  dp[0][0] = 1;

  for (let i = 0; i < nums.length; i++) {
    /** 遍历物品 对应的行是 i+1 */
    for (let j = 0; j <= target; j++) {
      if (nums[i] > j) {
        dp[i + 1][j] = dp[i][j];
      } else {
        dp[i + 1][j] =
          /** 不选 i+1 */ dp[i][j] + /** 选 i+1 */ dp[i + 1][j - nums[i]];
      }
    }
  }

  return dp[nums.length][target];
};

/** 排列
 *  如何获取排列数
 * 
 * 为什么传统01背包的递推公式解决的是 组合 数 
 * 比如 dp[i][j] = dp[i-1][j] + dp[i][j-nums[i]]
 * 什么意思? 我们只能在 前面i个数的数量下，扩展dp[i][j] 那顺序就一定是按照物品本身的顺序来的
 * 
 * 如何排列?
 * 我们只需要在扩展的时候 不限制于必须在 前i个元素的基础上扩展，我们可以
 * dp[i][j] = dp[i-1][j] + dp[nums.length][j-nums[i]]
 * 也就是 每次都是在weight = j-nums[i] 且 所有元素可选的情况下 扩展
 * 
 * 这种情况下 我们就必须 先遍历重量，把每个重量的 所有 0-i物品数都算晚，才能继续扩展
 */
var combinationSum4 = function (nums, target) {
  const dp = Array.from({ length: nums.length + 1 }, () =>
    new Array(target + 1).fill(0)
  );
  dp[0][0] = 1;
  for (let j = 0; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      /** 遍历物品 对应的行是 i+1 */
      if (nums[i] > j) {
        dp[i + 1][j] = dp[i][j];
      } else {
        dp[i + 1][j] =
          /** 不选 i+1 */ dp[i][j] + /** 选 i+1 */ dp[nums.length][j - nums[i]];
      }
    }
  }

  return dp[nums.length][target];
};


/** 一维 也是自己完成积累了 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target+1).fill(0)
    dp[0] = 1

    for(let j = 0;j<=target;j++){
        for(let i =0;i<nums.length;i++){
            if(j < nums[i]){
                dp[j] = dp[j]
            }else{
                dp[j] = dp[j] + dp[j-nums[i]]
            }
        }
    }

    return dp[target]
};
