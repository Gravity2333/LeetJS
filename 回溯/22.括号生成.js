// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

function checkParenthesis(str) {
  const stack = [];
  for (let i of str) {
    if (i === "(") {
      stack.push(i);
    } else {
      const prev = stack.pop();
      if (prev !== "(") return false;
    }
  }
  return stack.length === 0;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (
  n,
  charNum = 2 * n,
  current = "",
  results = [],
) {
  if (charNum === 0) {
    if (checkParenthesis(current)) {
      results.push(current);
    }
    return results;
  } else {
    generateParenthesis(void 0, charNum - 1, current + "(", results);
    generateParenthesis(void 0, charNum - 1, current + ")", results);
    return results;
  }
};
