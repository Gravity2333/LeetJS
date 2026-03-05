module.exports = function sort(arr) {
  for (let k = 0; k < arr.length - 1; k++) {
    for (let i = 0; i < arr.length - k - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
    }
  }
  return arr;
};
