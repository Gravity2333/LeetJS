/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const pos = [0, matrix[0].length - 1];
  while (pos[0] < matrix.length && pos[1] >= 0) {
    if (matrix[pos[0]][pos[1]] === target) return true;
    else if (matrix[pos[0]][pos[1]] > target) {
      pos[1]--;
    } else {
      pos[0]++;
    }
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let pos = [0, matrix[0].length-1];
  while (pos[1] >= 0 && pos[0] <= matrix.length-1) {
    const searchNode = matrix[pos[0]][pos[1]];
    if (searchNode === target) return true;
    else if (searchNode > target) {
      pos[1]--;
    } else {
      pos[0]++;
    }
  }

  return false;
};
