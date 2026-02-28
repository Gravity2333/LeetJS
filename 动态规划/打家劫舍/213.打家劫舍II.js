// 讨论
// 当考虑尾元素的时候 此时第一个元素就不能被考虑进来 此时变成线性的
// 考虑第一个元素的时候，尾元素不能被考虑 也是线性
// 最终 求最大值

var robImpl = function (nums) {
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
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length ===1) return nums[0]
    return Math.max(robImpl(nums.slice(1)),robImpl(nums.slice(0,nums.length-1)))
};


/** 环形 可以拆分为 偷第一家 和 不偷第一家
 * 偷 rob(0,-1)
 * 不偷 rob(1,)
 */
var rob = function(nums) {
    if(nums.length ===1) return nums[0]
    return Math.max(robImpl(nums.slice(1)),robImpl(nums.slice(0,nums.length-1)))
};