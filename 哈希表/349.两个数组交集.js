/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set();
  for (const item of nums1) {
    set.add(item);
  }

  const intersectionSet = new Set();

  for (const item of nums2) {
    if (set.has(item)) {
      intersectionSet.add(item);
    }
  }

  return Array.from(intersectionSet);
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set();
  for (let nums of nums1) {
    set.add(nums);
  }
  const result = new Set();
  for (let target of nums2) {
    if (set.has(target)) {
      result.add(target);
    }
  }
  return Array.from(result);
};
