// 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。

// 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。

// 示例 1:

// 输入: nums = [1,2,1]
// 输出: [2,-1,2]
// 解释: 第一个 1 的下一个更大的数是 2；
// 数字 2 找不到下一个更大的数；
// 第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
// 示例 2:

// 输入: nums = [1,2,3,4,3]
// 输出: [2,3,4,-1,4]

/**
 * 思路1 double数组
 * 思路2 用mod方式
 */

/** double nums的方式
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const doubled = [...nums, ...nums];
  const stack = [];
  const results = new Array(nums.length).fill(-1);

  for (let i = 0; i < doubled.length; i++) {
    while (stack.length > 0 && doubled[stack[stack.length - 1]] < doubled[i]) {
      const top = stack.pop();
      results[top] = doubled[i];
    }

    stack.push(i);
  }

  return results.slice(0, nums.length);
};

/** mod nums 的方式
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = [];
  const results = new Array(nums.length).fill(-1);

  for (let i = 0; i < 2 * nums.length; i++) {
    const modIndex = i % nums.length;
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[modIndex]) {
      const top = stack.pop();
      results[top] = nums[modIndex];
    }

    stack.push(modIndex);
  }

  return results.slice(0, nums.length);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = [];
  const results = new Array(nums.length).fill(-1);
  for (let i = 0; i < 2 * nums.length.length; i++) {
    const modIndex = i % nums.length;
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[modIndex]) {
      const lastIndex = stack.pop();
      results[lastIndex] = nums[modIndex];
    }
    stack.push(modIndex);
  }
  return results;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const results = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * nums.length; i++) {
    const index = i % nums.length;
    if (stack.length === 0 || nums[stack[stack.length - 1]] >= nums[index]) {
      stack.push(index);
    } else {
      while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[index]) {
        const prevIndex = stack.pop();
        results[prevIndex] = nums[index];
      }
      stack.push(index);
    }
  }

  return results
};
