/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0;
  const set = new Set();
  let max = 0;
  for (; right < s.length; right++) {
    if (set.has(s[right])) {
      while (s[left] !== s[right]) {
        set.delete(s[left]);
        left++;
      }
      set.delete(s[left]);
      left++;
      set.add(s[right]);
    } else {
      set.add(s[right]);
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};
