/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    map.set(c, i);
  }

  const results = [];
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, map.get(s[i]));

    if (i === end) {
      results.push(end-start+1);
      start = i + 1;
    }
  }
  return results
};
