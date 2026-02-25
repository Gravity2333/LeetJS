// 128. 最长连续序列
/**
 * 思路 先加入到一个Set中
 * 如果某个数 - 1 也在set中，说明这个数不是起点 肯定有更小的值
 * 如果某个数 - 1 不在set中，说明是起点，开始向后+1查找，直到找不到为止 记录长度
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxLen = 0;
  for (const num of set) {
    // 扫描set 即可 官方的测试用例有大量的重复元素
    if (!set.has(num - 1)) {
      // 是起点
      let _currentLen = 0;
      let next = num;
      while (set.has(next)) {
        _currentLen++;
        next++;
      }
      if (_currentLen > maxLen) {
        maxLen = _currentLen;
      }
    }
  }
  return maxLen;
};

// review
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      // start finding
      let len = 0;
      let curr = num;
      while (1) {
        if (set.has(curr)) {
          len++;
          curr += 1;
        } else {
          if (len > max) {
            max = len;
          }
          break;
        }
      }
    }
  }
  return max;
};
