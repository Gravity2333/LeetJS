// 392.判断子序列
/**
长度为 i的s 是否包含在 长度为 j的t中 为 dp[i][j]
dp[i][j] = s[i] ===t[j] ? dp[i-1][j-1] : dp[i][j-1]
初始化 第一行 s[0] 若包含过s[0] 都是true
第一列 s[0] 是否等于 t[0] 后面都是false
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const dp = Array.from({ length: s.length + 1 }, () =>
    new Array(t.length + 1).fill(false),
  );
  // 初始化第一行
  for (let j = 0; j <= t.length; j++) {
    dp[0][j] = true;
  }

  // 递推
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1]; // 用j-1去匹配 i
      }
    }
  }

  return dp[s.length][t.length];
};

/** 两个序列的最长公共子序列 如果是s s就是子序列
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  const dp = Array.from({ length: s.length }, () =>
    new Array(t.length).fill(0),
  );
  for (let j = 0; j < t.length; j++) {
    if (s[0] === t[j]) {
      while (j < t.length) {
        dp[0][j++] = 1;
      }
      break;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[0]) {
      while (i < s.length) {
        dp[i++][0] = 1;
      }
      break;
    }
  }

  for (let i = 1; i < s.length; i++) {
    for (let j = 1; j < t.length; j++) {
      dp[i][j] =
        s[i] === t[j]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[s.length - 1][t.length - 1] === s.length;
};



/** 双指针 s是子
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
 let slow = 0
 let fast = 0

 while(fast < t.length){
  if(t[fast] === s[slow]){
    slow++
    fast++
  }else{
    fast++
  }
 }

 return slow > s.length - 1
};
