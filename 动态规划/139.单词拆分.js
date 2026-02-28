// 139.单词拆分
// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。

// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
// 示例 2：

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
//      注意，你可以重复使用字典中的单词。
// 示例 3：

// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false

/**
 * 这个题dp的思路
 * 我们看 如果字符串可以被字典匹配，那么其字典中一定存在一个 可以匹配字符串的后缀
 * 那么我们用字符串长度 - 这个字典项的长度 就减小了匹配的字符串长度，如果减小到某个长度无法在字典中找到后缀 那么说明字典无法组成字符串
 *
 * 对于长度为 i 的字符串 是否可以被字典组合为 dp[i]: boolean
 * dp[i] = 遍历字典 找到满足的后缀 长度:suffixLen  dp[--suffixLen]
 * dp[0] = true 必须是true啊 不然后面的都是false
 * 顺序遍历
 */

var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let dict of wordDict) {
      if (s.slice(0, i + 1).endsWith(dict)) {
        dp[i + 1] = dp[i - dict.length + 1];
      }
    }
  }

  return dp[s.length];
};

/** i 结尾的单词的后缀是否能在dict中找到dp[i]
 *  dp[i] = 找得到 ? dp[i- dictLen ]:false
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length).fill(false);
  for (let i = 0; i < s.length; i++) {
    const str = s.slice(0, i + 1);
    for (const d of wordDict) {
      if (str.endsWith(d)) {
        if (d.length === str.length) {
          dp[i] = true;
          break;
        } else {
          dp[i] = dp[i - d.length];
          if(dp[i]){
            break
          }
        }
      }
    }
  }
  return dp.pop();
};
