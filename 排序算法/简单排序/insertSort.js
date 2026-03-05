module.exports = function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const needInsertVal = arr[i];
    let j = i - 1;
    while(j>=0&&arr[j] > needInsertVal){
         arr[j+1] =arr[j]
         j--
    }
    arr[j+1] = needInsertVal
  }
  return arr
};
