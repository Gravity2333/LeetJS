// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

// 示例 1：

// 输入：s = "abcdefg", k = 2
// 输出："bacdfeg"
// 示例 2：

// 输入：s = "abcd", k = 2
// 输出："bacd"

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  /** JS 字符串不可变 先转换成数组 */
  const arr = Array.from(s);

  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = i + k - 1 > arr.length - 1 ? arr.length - 1 : i + k - 1;
    while (left < right) {
      const tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
      left++;
      right--;
    }
  }
  /** 数组转换回字符串 */
  return arr.join("");
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const arr = s.split('')
  for (let start = 0; start < s.length; start += 2 * k) {
    // from start to start + k
    let left = start;
    let right = start + k - 1;
    while (left < right) {
      const tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
      left++;
      right--;
    }
  }
  return arr.join('')
};
