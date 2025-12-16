// 有 n 个城市，按从 0 到 n-1 编号。给你一个边数组 edges，其中 edges[i] = [fromi, toi, weighti] 代表 fromi 和 toi 两个城市之间的双向加权边，距离阈值是一个整数 distanceThreshold。
// 返回在路径距离限制为 distanceThreshold 以内可到达城市最少的城市。如果有多个这样的城市，则返回编号最大的城市。
// 注意，连接城市 i 和 j 的路径的距离等于沿该路径的所有边的权重之和。

// 示例 1：
// 输入：n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
// 输出：3
// 解释：城市分布图如上。
// 每个城市阈值距离 distanceThreshold = 4 内的邻居城市分别是：
// 城市 0 -> [城市 1, 城市 2]
// 城市 1 -> [城市 0, 城市 2, 城市 3]
// 城市 2 -> [城市 0, 城市 1, 城市 3]
// 城市 3 -> [城市 1, 城市 2]
// 城市 0 和 3 在阈值距离 4 以内都有 2 个邻居城市，但是我们必须返回城市 3，因为它的编号最大。

//所有节点都收到信号 所有节点之间最短路径问题 -> flyod 算法！
// flyod 动态规划思想
// dp项含义，从 i 到 j 经过前k个节点 最短距离为 dp[i][j][k]
// 递推公式: dp[i][j][k] = min(/* 经过k 点 */dp[i][k][k-1] + dp[k][j][k-1], /** 不经过k点 */dp[i][j][k-1])
// 初始化，三维数组，从k从0开始，因为要考虑到不经过任何节点的情况 ，k=0代表直达距离，初始化就是 邻接矩阵 即直达距离
// 顺序 i j k

/** 用flyod计算出来任意两个城市之间的最短距离 就可以统计到达最少城市的城市了 (无向)
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const matrix = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  // 初始化matrix 直达
  for (const edge of edges) {
    const [from, to, weight] = edge;
    matrix[from][to] = matrix[to][from] = weight;
  }
  // 经过k层 [0->n-1]
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = n - 1; j >= 0; j--) {
        if (i === j) continue;
        matrix[i][j] = Math.min(matrix[i][k] + matrix[k][j], matrix[i][j]);
      }
    }
  }

  /** 寻找最小 */
  let minArriveCityIndex = -1;
  let minArriveCity = Infinity;

  for (let i = 0; i < matrix.length; i++) {
    let canArrive = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] <= distanceThreshold) {
        canArrive++;
      }
    }

    if (canArrive <= minArriveCity) {
      minArriveCity = canArrive;
      minArriveCityIndex = i;
    }
  }

  return minArriveCityIndex;
};
