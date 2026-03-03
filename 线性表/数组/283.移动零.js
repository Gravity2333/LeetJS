/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums || nums.length === 0) return;
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  while (slow < nums.length) {
    nums[slow] = 0;
    slow++;
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0;
  let fast = 0;

  for (; fast < nums.length; fast++) {
    if (nums[fast] != 0) {
      nums[slow++] = nums[fast];
    }
  }

  for (; slow < nums.length; slow++) {
    nums[slow] = 0;
  }
};
