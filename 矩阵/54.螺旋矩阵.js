/** 边界收缩
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let top = 0,
    left = 0;
  let bottom = matrix.length - 1,
    right = matrix[0].length - 1;
  const results = [];
  // 左右闭区间
  while (left <= right && top <= bottom) {
    if (left <= right && top <= bottom) {
      for (let i = left; i <= right; i++) {
        results.push(matrix[top][i]);
      }
      top++;
    }
    if (left <= right && top <= bottom) {
      for (let i = top; i <= bottom; i++) {
        results.push(matrix[i][right]);
      }
      right--;
    }

    if (left <= right && top <= bottom) {
      for (let i = right; i >= left; i--) {
        results.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right && top <= bottom) {
      for (let i = bottom; i >= top; i--) {
        results.push(matrix[i][left]);
      }
      left++;
    }
  }
  return results;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;

  const results = [];

  while (left <= right && top <= bottom) {
    if (left <= right && top <= bottom) {
      for (let i = left; i <= right; i++) {
        results.push(matrix[top][i]);
      }
      top++;
    }

    if (left <= right && top <= bottom) {
      for (let i = top; i <= bottom; i++) {
        results.push(matrix[i][right]);
      }
      right--;
    }

    if (left <= right && top <= bottom) {
      for (let i = right; i >= left; i--) {
        results.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right && top <= bottom) {
      for (let i = bottom; i >= top; i--) {
        results.push(matrix[i][left]);
      }
      left++;
    }
  }
  return results;
};
