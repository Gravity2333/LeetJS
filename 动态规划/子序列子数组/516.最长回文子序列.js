// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

// 示例 1：

// 输入：s = "bbbab"
// 输出：4
// 解释：一个可能的最长回文子序列为 "bbbb" 。
// 示例 2：

// 输入：s = "cbbd"
// 输出：2
// 解释：一个可能的最长回文子序列为 "bb" 。

/**
 * i j区间的 子串包含的最长回文序列长度为dp[i][j]
 * dp[i][j] = s[i] === s[j]? 2+dp[i+1][j-1] : max(dp[i+1][j],dp[i][j-1])
 * 顺序 i 从后向前 j 从 i到len 只有 i<=j才有意义
 * 初始化 i === j 1 | j - i = 1 此时 看s[i] === s[j]? 1: 0
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const dp = Array.from({ length: s.length }, () =>
    new Array(s.length).fill(false)
  );
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }
  let max = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j <= s.length - 1; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};




/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    if(s.length === 1) return 1
    // ij为 i<=j 从 i=>j 的最长回文子序列长度 dp[i][j]
    // dp[i][j] = s[i] === s[j] ? dp[i+1][j-1] : Math.max(dp[i+1,j],dp[i,j-1])
    // 初始化 i j 相同的时候 为 1
    // 顺序 从下往上
    const dp = Array.from({ length: s.length },()=>new Array(s.length).fill(0))
    for(let i=0;i<s.length;i++){dp[i][i] = 1}
    let max = -Infinity
    for(let i = s.length - 2;i>=0;i--){
      for(let j = i+1;j<s.length;j++){
        if(s[i] === s[j]){
          if(j === i+1) dp[i][j] = 2
          else{
            dp[i][j] = 2+dp[i+1][j-1]
          }
        }else{
           if(j === i+1) dp[i][j] = 1
          else{
            dp[i][j] = Math.max(dp[i][j-1],dp[i+1][j])
          }
        }

        max = Math.max(dp[i][j],max)
      }
    }
    return max
};