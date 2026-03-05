module.exports = function sort(arr) {
  let gap = Math.trunc(arr.length / 2);
  while (gap >= 1) {
    for (let i = gap; i < arr.length; i += gap) {
      let tmp = arr[i];
      let j = i - gap;
      while (j >= 0 && arr[j] >= tmp) {
        arr[j + gap] = arr[j];
        j -= gap;
      }
      arr[j + gap] = tmp;
    }
    gap--;
  }
  return arr;
};
