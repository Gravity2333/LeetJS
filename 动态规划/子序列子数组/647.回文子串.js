/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  // i j 代表 (i<=j) i->j 的子串 是否为回文 dp[i][j]
  // dp[i][j] = s[i] === s[j] ? j - i <= 1 ? dp[i+1][j-1]: true : 0

  const dp = Array.from({ length: s.length }, () =>
    new Array(s.length).fill(false),
  );
  let cnt = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true;
          cnt++;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
          if (dp[i][j]) {
            cnt++;
          }
        }
      }
    }
  }
  return cnt
};
