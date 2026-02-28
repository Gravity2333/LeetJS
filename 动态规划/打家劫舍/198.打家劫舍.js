// 一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响小偷偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

// 示例 1：

// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。

/**
 *  对于 前 i 间房子，可以获得最大值为 dp[i]
 *  关系 dp[i] = Max(偷i values[i] + dp[i-2], 不偷 dp[i-1])
 *  初始化 dp[0] = values[0]
 *        dp[1] = max(values[0],values[1])
 *  顺序
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(/** 不偷 i */ dp[i - 1], /** 偷i */ dp[i - 2] + nums[i]);
  }

  return dp.pop();
};

/** dp[i] 前i个房间 可以偷的最大值
 *  dp[i] = Max(dp[i-1],nums[i] + dp[i-2])
 *  dp[0] = nums[0]
 *  dp[1] = MAX(nums[0],nums[1])
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0] || 0;
  dp[1] = Math.max(nums[0] || 0, nums[1] || 0);

  for(let i = 2;i<nums.length;i++){
    dp[i] = Math.max(dp[i-1],nums[i] + dp[i-2])
  }
  return dp[nums.length-1]
};
