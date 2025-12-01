// 输入示例
// 7 3
// 2 3 4
// 3 6 6
// 4 7 8
// 2
// 2 3
// 3 4
// 输出示例
// 4
// -1

const edges = [
  [2, 3, 4],
  [3, 6, 6],
  [4, 7, 8],
];

const V = 7;
const E = 3;

/** 初始化邻接矩阵 */
function initGrid(edges, nodeCnt) {
  const grid = Array.from({ length: nodeCnt + 1 }, () =>
    new Array(nodeCnt + 1).fill(Infinity)
  );
  for (let i = 0; i < grid.length; i++) {
    grid[i][i] = 0;
  }

  for (const edge of edges) {
    const [from, to, weight] = edge;
    grid[to][from] = grid[from][to] = weight;
  }

  return grid;
}

function flyod(edges, nodeCnt, edgesCnt) {
  /** 初始化结果数组 */
  const results = Array.from({ length: nodeCnt + 1 }, () =>
    Array.from({ length: nodeCnt + 1 }, (_, i) =>
      Array.from({ length: nodeCnt + 1 }, (_, j) => (i === j ? 0 : Infinity))
    )
  );
  /** 初始化邻接矩阵 */
  results[0] = initGrid(edges, nodeCnt);
  /** 注意 明确dp数组含义 dp[k][i][j] 表示 允许k为中间节点的情况下 最小值 所以0的初始化需要跑一遍 而不是直接grid */
  for (let i = 0; i <= nodeCnt; i++) {
    for (let j = 0; j <= nodeCnt; j++) {
      results[0][i][j] = Math.min(
        results[0][i][0] + results[0][0][j],
        results[0][i][j]
      );
    }
  }

  for (let k = 1; k <= nodeCnt; k++) {
    for (let i = 0; i <= nodeCnt; i++) {
      for (let j = 0; j <= nodeCnt; j++) {
        results[k][i][j] = Math.min(
          results[k - 1][i][k] + results[k - 1][k][j],
          results[k - 1][i][j]
        );
      }
    }
  }

  results.find = (i, j) => {
    return results[nodeCnt][i][j];
  };

  return results;
}

const results = flyod(edges, V, E);
console.log(results.find(2, 3));
console.log(results.find(3, 4));
