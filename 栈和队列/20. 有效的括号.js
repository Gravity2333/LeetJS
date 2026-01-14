// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 示例 1：

// 输入：s = "()"

// 输出：true

// 示例 2：

// 输入：s = "()[]{}"

// 输出：true

// 示例 3：

// 输入：s = "(]"

// 输出：false

// 示例 4：

// 输入：s = "([])"

// 输出：true

// 示例 5：

// 输入：s = "([)]"

// 输出：false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    switch (c) {
      case "(":
      case "[":
      case "{":
        stack.push(c);
        break;
      case ")":
        if (stack.pop() !== "(") {
          return false;
        } else {
          break;
        }
      case "]":
        if (stack.pop() !== "[") {
          return false;
        } else {
          break;
        }
      case "}":
        if (stack.pop() !== "{") {
          return false;
        } else {
          break;
        }
    }
  }

  return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const c of s) {
    switch (c) {
      case "(": {
        stack.push(c);
        break;
      }
      case "[": {
        stack.push(c);
        break;
      }
      case "{": {
        stack.push(c);
        break;
      }
      case ")": {
        const top = stack.pop();
        if (top !== "(") return false;
        break;
      }
      case "]": {
         const top = stack.pop();
        if (top !== "[") return false;
        break;
      }
      case "}": {
          const top = stack.pop();
        if (top !== "{") return false;
        break;
      }
    }
  }

  return stack.length === 0
};
