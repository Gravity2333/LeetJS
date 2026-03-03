// 238. 除了自身以外数组的乘积
/**
 * 思路 第一次顺序 求前缀乘积
 *     第二次逆序，求后缀乘积
 *
 * 设置两个list 表示 某个元素 前缀 / 后缀 乘积
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const multPrefix = new Array(nums.length).fill(1);
  const multSuffix = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    multPrefix[i] = multPrefix[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    multSuffix[i] = multSuffix[i + 1] * nums[i + 1];
  }

  return multPrefix.map((num, index) => num * multSuffix[index]);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const prefix = [1];
  const suffix = [1];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(prefix[prefix.length - 1] * nums[i - 1]);
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    suffix.unshift(suffix[0] * nums[i + 1]);
  }
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    const left = prefix[i] 
    const right = suffix[i]
    results[i] = left * right;
  }

  return results;
};
