/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (const c of s) {
    if (c !== "]") {
      stack.push(c);
    } else {
      let tmp = "";
      let times = "";

      while (stack.length > 0 && stack[stack.length - 1] !== "[") {
        const top = stack.pop();
        tmp = `${top}${tmp}`;
      }
      stack.pop();
      while (
        stack.length > 0 &&
        stack[stack.length - 1].charCodeAt(0) >= "0".charCodeAt(0) &&
        stack[stack.length - 1].charCodeAt(0) <= "9".charCodeAt(0)
      ) {
        const top = stack.pop();
        times = `${top}${times}`;
      }

      for (let i = 0; i < +times; i++) {
        stack.push(...tmp);
      }
    }
  }
  return stack.join('');
};
