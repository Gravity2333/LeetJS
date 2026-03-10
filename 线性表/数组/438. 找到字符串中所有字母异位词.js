/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let needle = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    const c = p[i];
    const index = c.charCodeAt(0) - "a".charCodeAt(0);
    needle[index] += 1;
  }
  needle = needle.join("-");
  const map = new Array(26).fill(0);
  const results = [];
  let left = 0,
    right = 0;
  while (right < s.length) {
    const c = s[right];
    const index = c.charCodeAt(0) - "a".charCodeAt(0);
    map[index] += 1;

    while (right - left + 1 > p.length) {
      const delElem = s[left];
      const index = delElem.charCodeAt(0) - "a".charCodeAt(0);
      map[index] -= 1;
      left++;
    }

    if (right - left + 1 === p.length) {
      // 收缩
      if (needle === map.join("-")) {
        results.push(left);
      }
    }

    right++;
  }

  return results
};
