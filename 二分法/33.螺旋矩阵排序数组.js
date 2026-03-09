/**
 * 第一步查找分界线
 * 如果nums[left] < nums[mid] 左侧无旋转点
 * 如果nums[left] > nums[mid] 说明左侧有旋转点
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let splitIndex = -1;
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid - 1] > nums[mid] && nums[mid + 1] > nums[mid]) {
      splitIndex = mid;
      break;
    }
    if (nums[0] <= nums[mid]) {
      // 旋转点在右侧
      left = mid + 1;
    } else {
      // 旋转点在左侧
      right = mid - 1;
    }
  }

  if (left > right) {
    // 没找到 说明没旋转
    return searchArr(nums, 0, nums.length - 1, target);
  }

  if (target > nums[nums.length - 1]) {
    return searchArr(nums, 0, splitIndex, target);
  } else {
    return searchArr(nums, splitIndex, nums.length - 1, target);
  }
};

var searchArr = function (nums, left = 0, right = nums.length - 1, target) {
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findSplit = function (nums) {
  if (nums.length === 0) return null;
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid - 1] > nums[mid]) {
      return mid
    } else if (nums[0] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0
};

var searchBin = function (nums, left = 0, right = nums.length - 1, target) {
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

/**
 * 第一步查找分界线
 * 如果nums[left] < nums[mid] 左侧无旋转点
 * 如果nums[left] > nums[mid] 说明左侧有旋转点
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const split = findSplit(nums);
  if (target > nums[nums.length - 1]) {
    return searchBin(nums, 0, split, target);
  }
  return searchBin(nums, split, nums.length - 1, target);
};
