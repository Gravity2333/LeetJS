/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [
    searchFirstOrLast(nums, target, "first"),
    searchFirstOrLast(nums, target, "last"),
  ];
};

function searchFirstOrLast(nums, target, type = "last") {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) {
      if (type === "last" && nums[mid + 1] === target) {
        const index = searchFirstOrLast(nums.slice(mid + 1), target, type);
        return mid + (index >= 0 ? index + 1 : 0);
      } else if (type === "first" && nums[mid - 1] === target) {
        return searchFirstOrLast(nums.slice(0, mid), target, type);
      }
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function findFirst(nums, target, left = 0, right = nums.length - 1) {
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) {
      // TODO
      if (nums[mid - 1] !== target) return mid;
      else {
        return findFirst(nums, target, left, mid - 1);
      }
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function findLast(nums, target, left = 0, right = nums.length - 1) {
  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);
    if (nums[mid] === target) {
      // TODO
      if (nums[mid + 1] !== target) return mid;
      else {
        return findLast(nums, target, mid + 1, right);
      }
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

var searchRange = function (nums, target) {
  return [findFirst(nums, target), findLast(nums, target)];
};
