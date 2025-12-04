// 二叉树的中序表达式
// *
// +    +
// 1. 2  3  4
// 中 1+2 * 3+4
// 后 1 2 + 3 4 + * 方便计算机处理，计算机用stack 顺序处理即可
// 遇到数字 push
// 遇到操作符 取元素计算 -> 结果 push

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const elem = tokens[i];
    if (!Number.isNaN(+elem)) {
      stack.push(elem);
    } else {
      const right = +stack.pop();
      const left = +stack.pop();
      switch (elem) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(left - right);
          break;
        case "*":
          stack.push(left * right);
          break;
        case "/":
          stack.push(Math.trunc(left / right));
          break;
      }
    }
  }

  return +stack.pop();
};
