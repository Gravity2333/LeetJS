// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

// 解释：

// 在 strs 中没有字符串可以通过重新排列来形成 "bat"。
// 字符串 "nat" 和 "tan" 是字母异位词，因为它们可以重新排列以形成彼此。
// 字符串 "ate" ，"eat" 和 "tea" 是字母异位词，因为它们可以重新排列以形成彼此。

var mapIsSame = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  for (const [k, v] of map1) {
    if (map2.get(k) !== v) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const results = [];
  for (const str of strs) {
    // 统计
    const map = new Map();
    for (const c of str) {
      if (!map.has(c)) {
        map.set(c, 1);
      } else {
        map.set(c, map.get(c) + 1);
      }
    }

    // 对比
    let hasSame = false;
    for (const result of results) {
      if (mapIsSame(result.map, map)) {
        result.arr.push(str);
        hasSame = true;
        break;
      }
    }

    if (!hasSame) {
      results.push({
        map,
        arr: [str],
      });
    }
  }

  return results.map((result) => result.arr);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const cntList = new Array(26).fill(0);
    for (let c of str) {
      cntList[c.charCodeAt() - "a".charCodeAt()]++;
    }
    const freKey = cntList.join("-");
    if (!map.has(freKey)) {
      map.set(freKey, [str]);
    } else {
      map.set(freKey, [...map.get(freKey), str]);
    }
  }
  return Array.from(map.values())
};
