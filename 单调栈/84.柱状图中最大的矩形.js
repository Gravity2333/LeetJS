/**
 * 这个题 和 接雨水相反
 * 最大面积可能会在什么时候出现？ 上凸的时候！
 * 所以 你需要用一个单调递减序列， 找到后面更低的柱子，此时 stack top元素左侧的元素为前面更小的元素
 *   |---|
 * __|   |__
 * 此时 就可以计算 2个柱子中间 夹的柱子的area了
 * 以此类推 可以计算出所有 凸出来的矩形的面积 求最大值即可
 *
 * 为了计算所有的矩形 一定要清空stack 所以height要在最后push一个0 保证所有元素都出栈
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0);
  const stack = [];
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const currentIndex = stack.pop();
      const leftIndex = stack.length === 0 ? -1 : stack[stack.length - 1];
      const rightIndex = i;
      const bottom = rightIndex - leftIndex - 1;
      const h = heights[currentIndex];
      max = Math.max(max, h * bottom);
    }
    stack.push(i);
  }

  return max;
};

/**
重点思路
当找到一个更小的柱子，说明左边的更高的柱子右侧最高只能扩展到这个位置，左侧柱子的高度向左能扩展到前一个stack元素的位置
用单调递增stack
3 4 2 
    ^
此时 4 向右最多扩展到2的位置    向左最多扩展到3的位置
2 - 0 -1 = 1 1*4 Max4

 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    heights.push(0); // 要保证收尾
  const stack = [];
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const topIndex = stack.pop();
      const leftIndex = stack.length > 0 ? stack[stack.length - 1] : -1;
      const rightIndex = i;
      const bottomLen = rightIndex - leftIndex - 1;
      const area = heights[topIndex] * bottomLen;

      if (area > max) {
        max = area;
      }
    }

    stack.push(i);
  }

  return max;
};


/**
 * 思路明确
 * 一个柱 最多能 左右 扩展到 更小的柱子位置 所以要用单调递减stack
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0 
    const stack = []
    heights.push(0)
    heights.unshift(0)

    for(let i=0;i<heights.length;i++){
      if(stack.length ===0 || heights[stack[stack.length-1]] <= heights[i]){
        stack.push(i)
      }else{
        while(stack.length >0 &&  heights[stack[stack.length-1]] > heights[i]){
          let prevIndex = stack.pop()
          if(stack.length === 0) break;
          let leftIndex = stack[stack.length-1]
          let rightIndex = i
          const bottom = rightIndex - leftIndex - 1
          const area = bottom * heights[prevIndex]
          if(area > maxArea){
            maxArea = area
          }
        }
         stack.push(i)
      }
    }
    return maxArea
};