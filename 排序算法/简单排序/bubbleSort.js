// module.exports = function sort(arr) {
//   for (let k = 0; k < arr.length - 1; k++) {
//     for (let i = 0; i < arr.length - k - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         const tmp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = tmp;
//       }
//     }
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
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr
};
