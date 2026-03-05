module.exports = function sort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.trunc((0 + arr.length - 1) / 2);
  const leftResults = sort(arr.slice(0, mid+1));
  const rightResults = sort(arr.slice(mid+1));

  const result = [];
  while (leftResults.length > 0 && rightResults.length > 0) {
    if (leftResults[0] <= rightResults[0]) {
      const next = leftResults.shift();
      result.push(next);
    } else {
      const next = rightResults.shift();
      result.push(next);
    }
  }

  while (leftResults.length > 0) {
    const next = leftResults.shift();
    result.push(next);
  }

  while (rightResults.length > 0) {
    const next = rightResults.shift();
    result.push(next);
  }

  return result
};
