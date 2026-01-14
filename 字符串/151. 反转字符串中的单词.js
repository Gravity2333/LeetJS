// 相关标签
// premium lock icon
// 相关企业
// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。

// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

// 示例 1：

// 输入：s = "the sky is blue"
// 输出："blue is sky the"
// 示例 2：

// 输入：s = "  hello world  "
// 输出："world hello"
// 解释：反转后的字符串中不能存在前导空格和尾随空格。
// 示例 3：

// 输入：s = "a good   example"
// 输出："example good a"
// 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。

// 提示：

// 1 <= s.length <= 104
// s 包含英文大小写字母、数字和空格 ' '
// s 中 至少存在一个 单词

// 思路1
// 思路
// 1. 用split拆分成字符串数组
// 2. left right 两个指针倒转顺序

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let words = s.split(" ");
  // 快慢指针去空格
  let slow = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "") {
      if (words[slow !== ""]) {
        words[slow++] = words[i];
      }
    } else {
      words[slow++] = words[i];
    }
  }
  // 去掉多余的
  words = words.slice(0, slow);
  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    const tmp = words[left];
    words[left] = words[right];
    words[right] = tmp;
    left++;
    right--;
  }

  return words.join(" ");
};

// 思路 2
// 先用快慢指针去空格
// 后反转整个字符串
// 最后反转单词本身

function reverse(s, start = 0, end = s.length - 1) {
  if (s.length === 0 || start >= end) return s;
  s = Array.isArray(s) ? s : Array.from(s);
  let left = start;
  let right = end;
  while (right < s.length && left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;

    left++;
    right--;
  }
  return s;
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (s.length === 0) return s;
  // 转换成数组
  s = Array.from(s);
  // 快慢指针去空格
  let slow = -1;
  let fast = 0;
  while (fast < s.length) {
    if (s[fast] !== " ") {
      s[++slow] = s[fast];
    } else {
      if (s[slow] !== " " && slow !== -1) {
        // 保存一个空格
        s[++slow] = s[fast];
      }
    }
    fast++;
  }
  // 后面部分截断
  s = s.slice(0, s[slow] === " " ? slow : slow + 1);
  // 反转字符串
  s = reverse(s);

  // 反转单词
  slow = 0;
  while (slow < s.length) {
    if (s[slow] !== " ") {
      // 找到end
      let wordEnd = slow;
      while (wordEnd < s.length && s[wordEnd] !== " ") wordEnd++;
      const next = wordEnd;
      s = reverse(s, slow, wordEnd - 1);
      slow = next;
    } else {
      slow++;
    }
  }
  return s.join("");
};


function reverse(s, start = 0, end = s.length - 1) {
  if (s.length === 0 || start >= end) return s;
  s = Array.isArray(s) ? s : Array.from(s);
  let left = start;
  let right = end;
  while (right < s.length && left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;

    left++;
    right--;
  }
  return s;
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s=s.trim()
  s=s.split(' ').filter(f=>f)
  return reverse(s).join(' ')
};
