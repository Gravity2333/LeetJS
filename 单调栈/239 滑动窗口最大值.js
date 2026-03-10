/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const stack = new myStack();
  const results = [];
  for (let i = 0; i < k; i++) {
    stack.push(nums[i]);
  }
  for (let i = 0; i <= nums.length - k; i++) {
    results.push(stack.peak());
    stack.pop(nums[i]);
    stack.push(nums[i + k]);
  }
  return results
};

class myStack {
  constructor() {
    this.data = [];
  }

  pop(x) {
    if (this.data[0] === x) {
      return this.data.shift();
    }
  }

  push(x) {
    while (this.data.length > 0) {
      if (this.data[this.data.length - 1] < x) {
        this.data.pop();
      } else {
        break;
      }
    }
    this.data.push(x)
  }

  peak() {
    return this.data[0];
  }
}
