function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] <= nums.length &&
      nums[nums[i] - 1] !== nums[i]
    ) {
      swap(nums, nums[i] - 1, i);
    }
  }

  for (let i = 0; i <= nums.length + 1; i++) {
    if (nums[i]-1 !== i) return i+1;
  }
};
