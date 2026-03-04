/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 0,
    right = matrix.length - 1;
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    const midArr = matrix[mid];
    const midStart = midArr[0];
    const midEnd = midArr[midArr.length - 1];
    if (midStart <= target && target <= midEnd) {
      return hasItem(midArr, target);
    } else if (target < midStart) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return false
};

var hasItem = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) return true;
    else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
