// 给定一个有 n 个节点的有向无环图，用二维数组 graph 表示，请找到所有从 0 到 n-1 的路径并输出（不要求按顺序）。

// graph 的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些结点（译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a ），若为空，就是没有下一个节点了。

// 输入：graph = [[1,2],[3],[3],[]]
// 输出：[[0,1,3],[0,2,3]]
// 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3

// /** 构建邻接矩阵 稠密图 */
// function buildMatrix(graph) {
//   let n = 0;
//   for (let i = 0; i < graph.length; i++) {
//     n = Math.max(n, ...graph[i]);
//   }
//   const matric = Array.from({ length: n+1 }, () => new Array(n+1).fill(false));
//   for (const path of graph) {
//     const [from, to] = path;
//     if(!from || !to) continue
//     matric[from][to] = true;
//   }
//   return matric;
// }

/** 找路径 使用深度优先所搜 DFS 不能用BFS 因为其不会一次性走完某条路线
 *  如何保存图? (1)邻接矩阵 (2)邻接表
 *  本题给的就是 邻接表 不用自己构造了
 */

function DFS(from, graph, currentResults = [from], results = []) {
  const relations = graph[from];
  if (0 === relations.length || from === graph.length - 1) {
    if (from === graph.length - 1) {
      results.push(currentResults);
    } else {
      return results;
    }
  }
  for (const relation of relations) {
    DFS(relation, graph, [...currentResults, relation], results);
  }

  return results;
}

/** 邻接矩阵表示
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  return DFS(0, graph);
};
