/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const minDp = new Array(nums.length).fill(0);
  const maxDp = new Array(nums.length).fill(0);

  minDp[0] = maxDp[0] = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const prevMinDp = minDp[i - 1];
    const prevMaxp = maxDp[i - 1];
    minDp[i] = Math.min(nums[i], prevMinDp * nums[i], prevMaxp * nums[i]);
    maxDp[i] = Math.max(nums[i], prevMinDp * nums[i], prevMaxp * nums[i]);

    max = Math.max(max, minDp[i], maxDp[i]);
  }

  return max;
};
