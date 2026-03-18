/** 1. 空间复杂度 M * N
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const columns = new Array(matrix.length).fill(1);
  const rows = new Array(matrix[0].length).fill(1);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        columns[j] = 0;
        rows[i] = 0;
      }
    }
  }

  for (let i = 0; i < columns.length; i++) {
    if (columns[i] === 0) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

/** 2. 空间复杂度 O(1)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let firstRow = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          firstRow = 0;
        } else {
          matrix[0][j] = 0;
          matrix[i][0] = 0;
        }
      }
    }
  }

  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][0] = 0;
    }
  }

  if (firstRow === 0) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }

  return matrix;
};

/** 1. 空间复杂度 M * N
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = [];
  const columns = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0){
        rows.push(i)
        columns.push(j)
      }
    }
  }

  for(row of rows){
    for(let i=0;i<matrix[row].length;i++){
      matrix[row][i] = 0
    }
  }

    for(column of columns){
    for(let i=0;i<matrix.length;i++){
      matrix[i][column] = 0
    }
  }

  return matrix
};
