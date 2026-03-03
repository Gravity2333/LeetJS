/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.toSorted((a, b) => a[0] - b[0]);
  const results = [];
  let current = intervals.shift();
  for (const interval of intervals) {
    if (interval[0] <= current[1]) {
      current = [
        Math.min(current[0], interval[0]),
        Math.max(current[1], interval[1]),
      ];
    } else {
      results.push(current);
      current = interval;
    }
  }
  return results.concat([current]);
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.toSorted((a, b) => a[0] - b[0]);
  const results = [intervals.shift()];
  for (const interval of intervals) {
    const last = results.pop()
    const [start,end] = last

    if(interval[0] <= end){
      results.push([Math.min(start,interval[0]),Math.max(end,interval[1])])
    }else{
      results.push(last,interval)
    }
  }
  return results
};
