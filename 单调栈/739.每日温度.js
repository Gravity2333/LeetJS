// 请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 示例 1：

// 输入：temperatures = [73,74,75,71,69,72,76,73]
// 输出：[1,1,4,2,1,1,0,0]
// 示例 2：

// 输入：temperatures = [30,40,50,60]
// 输出：[1,1,1,0]
// 示例 3：

// 输入：temperatures = [30,60,90]
// 输出：[1,1,0]

/** 单调栈问题
 *  注意点 需要把index放到stack中
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const results = Array.from(temperatures, () => 0);
  for (let i = 0; i < temperatures.length; i++) {
    while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const top = stack.pop();
      results[top] = i - top;
    }
    stack.push(i);
  }
  return results;
};

// 739.每日温度

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const results = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];

    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperature
    ) {
      const lastIndex = stack.pop();
      results[lastIndex] = i - lastIndex;
    }
    stack.push(i);
  }
  return results;
};

/** 下一个更高温度出现在几天后
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const results = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    if (
      stack.length === 0 ||
      temperatures[stack[stack.length - 1]] >= temperatures[i]
    ) {
      stack.push(i);
    } else {
      while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
        const prevIndex = stack.pop();
        results[prevIndex] = i - prevIndex;
      }
      stack.push(i);
    }
  }
  return results;
};

/** 对nums2 计算更大的元素
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];

  for (let i = 0; i < nums2.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] >= nums2[i]) {
      stack.push(nums2[i]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
        const prev = stack.pop();
        map.set(prev, nums2[i]);
      }
      stack.push(nums2[i]);
    }
  }
  const results = new Array(nums1.length).fill(-1)
  for(let i = 0; i < nums1.length; i++){
    if(map.has(nums1[i])){
      results[i] = map.get(nums1[i])
    }
  }
  return results
};
