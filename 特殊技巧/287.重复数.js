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
    return slow;
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[fast];
    fast = nums[fast];
  } while (slow !== fast);

  slow = nums[0];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow
};
