// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /** 先排序 */
  nums = nums.sort((a, b) => a - b);
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    /** 确定第一层 */
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    /** 内层查找 */
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        /*** 加入结果 */
        results.push([nums[i], nums[left], nums[right]]);
        /** 处理重复的情况 */
        while (left < right && nums[right - 1] === nums[right]) right--;
        while (left < right && nums[left + 1] === nums[left]) left++;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return results;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.toSorted((a, b) => a - b);
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) {
      continue;
    } else {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[left] + nums[right] + nums[i];

        if (sum === 0) {
          results.push([nums[left], nums[right], nums[i]]);
          while (left < right && nums[right - 1] === nums[right]) right--;
          while (left < right && nums[left + 1] === nums[left]) left++;
          left++;
          right--;
        } else if (sum > 0) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return results;
};

// 减枝操作
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /** 排序 */
  nums.sort((a, b) => a - b);
  const results = [];
  // 第一个数遍历
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break; // 减枝操作
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left + 1] === nums[left]) left++;
        while (left < right && nums[right - 1] === nums[right]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return results;
};
