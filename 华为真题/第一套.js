// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (const c of s) {
    switch (c) {
      case "(":
      case "[":
      case "{":
        stack.push(c);
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
    }
  }

  return stack.length === 0;
};

// 执行用时分布
// 10
// ms
// 击败
// 5.63%

// 3. 无重复字符的最长子串
// 已解答
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 提示
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let left = 0;
  const set = new Set();
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
};

// 执行用时分布
// 7
// ms
// 击败
// 57.81%

// 代码
// 测试用例
// 测试用例
// 测试结果
// LCR 099. 最小路径和
// 已解答
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：一个机器人每次只能向下或者向右移动一步。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // dp[i][j] 到达 i j 的最短路径和
  // dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
  // 初始化 第一行 第一列累加

  const dp = Array.from(
    { length: grid.length },
    () => new Array(grid[0].length),
  );
  dp[0][0] = grid[0][0];
  for (let j = 1; j < grid[0].length; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < grid.length; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp.pop().pop();
};
// 执行用时分布
// 66
// ms
// 击败
// 8.70%
