function rotateArr(arr, start = 0, end = arr.length - 1) {
  if (arr.length === 0) return;
  let left = start;
  let right = end;
  while (left < right) {
    const tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
    left++;
    right--;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 空间复杂度1
// 先反转整个数组
// 反转前k数组
// 反转剩下数组
var rotate = function (nums, k) {
  // 一定要取mod 考虑；k > nums.length的情况
  k = k % nums.length;
  rotateArr(nums);
  rotateArr(nums, 0, k - 1);
  rotateArr(nums, k);
};

/**  超时
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

function rotateArr(nums, i, j) {
  let left = i;
  let right = j;
  while (left < right) {
    const tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;
    left++;
    right--;
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  rotateArr(nums, 0, nums.length - 1);
  rotateArr(nums, 0, k - 1);
  rotateArr(nums, k , nums.length - 1);
};
