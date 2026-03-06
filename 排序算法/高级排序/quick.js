// module.exports = function sort(arr, left = 0, right = arr.length - 1) {
//   if (left >= right) return arr;
//     let i = left,j=right
//   const pivot = arr[i];
//   while (i < j) {
//     while (i < j && arr[j] >= pivot) j--;
//     swap(arr, i, j);
//     while (i < j && arr[i] <= pivot) i++;
//     swap(arr, i, j);
//   }
//   sort(arr, left, i - 1);
//   sort(arr, i + 1, right);
//   return arr;
// };

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
}

module.exports = function sort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;
  let i = left;
  let j = right;
  let pivot = arr[i];
  while (i < j) {
    while (i < j && arr[j] >= pivot) j--;
    swap(arr, i, j);
    while (i < j && arr[i] <= pivot) i++;
    swap(arr, i, j);
  }

  sort(arr, left, i - 1);
  sort(arr, i + 1, right);
  return arr;
};
