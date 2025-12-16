// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

// 示例 1：

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 示例 2：

// 输入：target = 4, nums = [1,4,4]
// 输出：1
// 示例 3：

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

/**
 * 滑动窗口解决问题
 * left right 左右都是闭区间
 * 当sum < target的时候  扩展窗口 直到 sum >= target
 * 此时尝试收缩，直到sum < target
 * 当重合的时候，right向右移动
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLen = Infinity;
  /** 每个循环都尝试进行一次收缩，收缩到不能收缩为止
   *  收缩之后，扩展右侧边界
  */
  while (right < nums.length) {
    sum += nums[right];
    while (left <= right && sum >= target) {
      sum -= nums[left];
      minLen = Math.min(minLen, right - left + 1);
      left++;
    }
    // 扩展右边界
    right++;
  }

  return minLen === Infinity ? 0 : minLen;
};
