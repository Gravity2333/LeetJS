/**
 * 1. dp[i] 表示 走到i阶台阶有dp[i] 种方式
 * 2. dp[i] = dp[i-1]+dp[i-2]. 也就是，到达i有2种方式，即从 i-1爬一阶上来 OR 从i-2爬2阶上来
 * 3. dp[1] = 1 dp[2] = 2 dp[3] = 3 可以根据题目给的例子 倒推初始化 n>=1
 * 4. 顺序遍历 求解 即可
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  const prev = [1, 2];
  let i = 3;
  while (i <= n) {
    prev.push(prev.shift() + prev[0]);
    i++;
  }
  return prev[1];
};
