// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  const results = [[1]];
  for (let i = 1; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      row.push((results[i - 1][j - 1] || 0) + (results[i - 1][j] || 0));
    }
    results.push(row);
  }
  return results;
};


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const results = [[1]]
  for(let i=1;i<numRows;i++){
    const row = []
    for(let j=0;j<i+1;j++){
      row[j] = (results[i-1][j-1] || 0) + (results[i-1][j] || 0)
    }
    results.push(row)
  }
  return results
};
