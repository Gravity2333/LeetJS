// module.exports = function sort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = Infinity;
//     let minIndex = -1;
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j];
//         minIndex = j;
//       }
//     }
//     const tmp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = tmp;
//   }
//   return arr;
// };

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

module.exports = function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = -1;
    let min = Infinity;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
  }
  return arr;
};
