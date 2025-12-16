/** 一样的 双指针 指向2端
 *  比较 平方后更大的加入队列，并且移动指针
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const results = [];
  while (left <= right) {
    if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2)) {
      results.unshift(Math.pow(nums[left++], 2));
    } else {
      results.unshift(Math.pow(nums[right--], 2));
    }
  }
  return results;
};
