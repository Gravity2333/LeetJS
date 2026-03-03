/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  do {
    slow = nums[slow];
    fast = nums[fast];
    if (fast) {
      fast = nums[fast];
    }
  } while (fast && fast !== slow);

  if (fast === slow) {
    slow = 0;
    while (fast !== slow) {
      slow = nums[slow];
      fast = nums[fast];
    }
    return slow
  }
};
