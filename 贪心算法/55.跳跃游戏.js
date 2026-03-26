// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
// 示例 1：

// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
// 示例 2：

// 输入：nums = [3,2,1,0,4]
// 输出：false
// 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

/**
 * 如何贪心 每一步都找到当前能挑到的最远距离（最大覆盖距离）
 * 向后遍历数组的时候动态修改最大覆盖距离
 * 当遍历到最大覆盖距离时，此时还没到数组的最后一个下标 就false
 * 如果覆盖距离已经大于等于数组最后一个下表 就可以停止算法 返回true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxRange = nums[0];
  let i = 0;
  while (maxRange < nums.length - 1 && i <= maxRange) {
    maxRange = Math.max(nums[i] + i, maxRange);
    i++;
  }
  return maxRange >= nums.length - 1;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxRange = nums[0];
  let current = 0;
  while (current <= maxRange && maxRange < nums.length) {
    maxRange = Math.max(maxRange, nums[current] + current);
    current++;
  }

  return maxRange >= nums.length - 1;
};
