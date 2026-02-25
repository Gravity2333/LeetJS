// 2个字符串 相同字母 不用位置祖合而成
// abbc bbca

// 用hash表 记录每个字母出现的次数 看是否一样多
// 这里可以不用map 用一个26长度的数组即可

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const smap = new Array(26).fill(0);
  const tmap = new Array(26).fill(0);
  const startCharAscii = "a".charCodeAt();
  for (let i = 0; i < s.length; i++) {
    const c1 = s[i].charCodeAt();
    const c2 = t[i].charCodeAt();

    smap[c1 - startCharAscii]++;
    tmap[c2 - startCharAscii]++;
  }

  return smap.join("") === tmap.join("");
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map();
  for (const c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  for (const c of t) {
    if (map.has(c)) {
      const current = map.get(c) - 1;
      if (current === 0) {
        map.delete(c);
      } else {
        map.set(c, current);
      }
    } else {
      return false;
    }
  }

  return map.size === 0;
};

/** review
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  for (let c of t) {
    if (map.has(c)) {
      if (map.get(c) === 1) {
        map.delete(c);
      } else {
        map.set(c, map.get(c) - 1);
      }
    } else {
      return false;
    }
  }

  return map.size === 0;
};
