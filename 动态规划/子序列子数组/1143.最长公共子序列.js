// 1143.最长公共子序列 !!
// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

// 示例 1：

// 输入：text1 = "abcde", text2 = "ace"
// 输出：3
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。
// 示例 2：

// 输入：text1 = "abc", text2 = "abc"
// 输出：3
// 解释：最长公共子序列是 "abc" ，它的长度为 3 。
// 示例 3：

// 输入：text1 = "abc", text2 = "def"
// 输出：0
// 解释：两个字符串没有公共子序列，返回 0 。

/** 思路
 *  本题目求最长公共子序列 不是子数组了 可能是不连续了
 *  若按照最长子数组的dp定义 ij 结尾的公共子序列最大长度 dp[i][j]
 *  那么 dp[i][j] = text1[i] === text2[j] ? for(m 0->i-1) for(n: 0->j-1) :0
 *  复杂度就过于大了 需要 O(n^4)
 *
 *  这里我们考虑
 *  对于 0-i的 text1子串 0-j的text2子串 最大公共子序列长度为 dp[i][j]
 *  此时 有递推关系:
 *  dp[i][j] = text1[i] === text2[j] ? dp[i-1][j-1] + 1: max(dp[i-1][j],dp[i][j-1])
 *  比如 abc abce 此时 c !== e 我们可以退一步 看一下 ab 和 abcde 最大交集2 abc和abc 最大交集为3 此时可以找到3
 *
 *  初始化 i === 0 || j===0  text[i]===text[j]  后面都是1 其余0
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array.from({ length: text1.length }, () =>
    new Array(text2.length).fill(0),
  );
  let max = 0;
  // init
  for (let j = 0; j < text2.length; j++) {
    if (text2[j] === text1[0]) {
      while (j < text2.length) {
        dp[0][j++] = 1;
        max = 1;
      }
      break;
    }
  }
  for (let i = 0; i < text1.length; i++) {
    if (text2[0] === text1[i]) {
      while (i < text1.length) {
        dp[i++][0] = 1;
        max = 1;
      }
      break;
    }
  }
  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};

/** 递推公式含义是
 *  如果用之前的 i j 结尾的子序列 最长为dp[i][j] 需要从 0 -> i 0->j遍历子序列 会超时
 * 这里使用的定义是 前 i j 个元素组成的最长公共子序列为 dp[i][j]
 * 有 dp[i][j] = text1[i] === text2[j] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j],dp[i][j-1])
 * 初始化 第一行 如果 text2[j] === text1[0]  后面所有的都是1
 * 第一列 如果text1[i] === text2[0] 后面都是1
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array.from({ length: text1.length }, () =>
    new Array(text2.length).fill(0),
  );

  for (let j = 0; j < text2.length; j++) {
    if (text1[0] === text2[j]) {
      while (j < text2.length) {
        dp[0][j++] = 1;
      }
      break;
    }
  }
  for (let i = 0; i < text1.length; i++) {
    if (text2[0] === text1[i]) {
      while (i < text1.length) {
        dp[i++][0] = 1;
      }
      break;
    }
  }

  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      dp[i][j] =
        text1[i] === text2[j]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[text1.length - 1][text2.length - 1];
};

/** 递推公式含义是
 *  如果用之前的 i j 结尾的子序列 最长为dp[i][j] 需要从 0 -> i 0->j遍历子序列 会超时
 * 这里使用的定义是 前 i j 个元素组成的最长公共子序列为 dp[i][j]
 * 有 dp[i][j] = text1[i] === text2[j] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j],dp[i][j-1])
 * 初始化 第一行 如果 text2[j] === text1[0]  后面所有的都是1
 * 第一列 如果text1[i] === text2[0] 后面都是1
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  /**
   * 对于 i j 结尾的子串 最大公共子串长度为dp[i][j]
   */

  const dp = Array.from({ length: text1.length }, () =>
    new Array(text2.length).fill(0),
  );
  // 初始化
  // 对于text1[0] 只要text2包含这个字符 后面都是1
  // 对于text2[0] 只要text1包含这个字符 后面都是1
  for (let j = 0; j < text2.length; j++) {
    if (text2[j] === text1[0]) {
      while (j < text2.length) dp[0][j++] = 1;
    }
  }

  for (let i = 0; i < text1.length; i++) {
    if (text1[i] === text2[0]) {
      while (i < text1.length) dp[i++][0] = 1;
    }
  }

  for (let i = 1; i < text1.length; i++) {
    for (let j = 1; j < text2.length; j++) {
      dp[i][j] =
        text1[i] === text2[j]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[text1.length-1][text2.length-1]
};
