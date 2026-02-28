/**
 * 什么时候能计算面积?
 *  存在 凹槽的时候 我们用单调递增队列
 *   stack从底 -》 顶 呈现递减趋势
 *   每次出现 大于stack顶元素时 此时的阶梯呈现上升 这就出现了 凹槽
 *   此时 待进stack元素就是 右侧 更大的柱子
 *   左侧为大于等于当前柱子的柱子
 *    我们只需要计算 两侧柱子和当前柱子高度差值 的 最小值 并且 * 两侧柱子距离即可
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let areas = 0;
  const stack = [];

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
      /** 计算区域大小 */
      /** 当前bar */
      const currentBarIndex = stack.pop();
      /** ___| 的情况 此时没办法接雨水 */
      if (stack.length === 0) continue;
      /** 左侧bar */
      const leftBarIndex = stack[stack.length - 1];
      /** 右侧bar */
      const rightBarIndex = i;

      /** 计算横向宽度 */
      const bottom = rightBarIndex - leftBarIndex - 1;

      /** 计算高度 */
      const leftHeight = height[leftBarIndex] - height[currentBarIndex];
      const rightHeight = height[rightBarIndex] - height[currentBarIndex];
      const h = Math.min(leftHeight, rightHeight);

      /** 计算面积 */
      areas += h * bottom;
    }

    /** i入stack */
    stack.push(i);
  }

  return areas;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let areas = 0;
  const stack = [];
  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
      const bottomIndex = stack.pop();
      if (stack.length === 0) continue;
      const bottom = height[bottomIndex];
      const leftIndex = stack[stack.length - 1];
      const rightIndex = i;
      const bottomLen = rightIndex - leftIndex - 1;
      const areaHeight =
        Math.min(height[leftIndex], height[rightIndex]) - bottom;
      const area = areaHeight * bottomLen;
      areas += area;
    }
    stack.push(i);
  }
  return areas;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const stack = [];
  let cnt = 0;
  for (let i = 0; i < height.length; i++) {
    if (stack.length === 0 || height[stack[stack.length - 1]] >= height[i]) {
      stack.push(i);
    } else {
      while (stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
        const prevIndex = stack.pop();
        if (stack.length === 0) break;
        const leftIndex = stack[stack.length - 1];
        const rightIndex = i;

        const bottomLen = rightIndex - leftIndex - 1;
        const h = Math.min(
          height[leftIndex] - height[prevIndex],
          height[rightIndex] - height[prevIndex],
        );

        cnt += bottomLen * h;
      }
      stack.push(i);
    }
  }
  return cnt
};
