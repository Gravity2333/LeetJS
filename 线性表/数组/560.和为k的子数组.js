/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, 1);
  let prefix = 0;
  for (const num of nums) {
    prefix += num;
    if (!map.has(prefix)) {
      map.set(prefix, 1);
    } else {
      map.set(prefix,map.get(prefix) + 1);
    }
  }
  let cnt = 0;
  for (const num of nums) {
    const left = num - k;
    if (map.has(left)) {
      cnt += map.get(left);
    }
  }
  return cnt
};
