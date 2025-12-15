//105. 岛屿的最大面积
// 给定一个由 0 和 1 组成的非空二维数组 grid ，用来表示海洋岛屿地图。
// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
// 找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

// 输入: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 输出: 6
// 解释: 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

/**
 * 这个和 200 岛屿数量是一个问题
 *  遍历到陆地 就 DFS / BFS 但是这里是统计并且返回岛屿面积
 */

const nextDirctions = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

function isValid(x, y, grid) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

function isLand(x, y, grid) {
  return grid[x][y] == 1;
}

function BfsAndCountAreas(x, y, grid) {
  if (!isLand(x, y, grid)) return;
  let area = 1;
  const queue = [[x, y]];
  grid[x][y] = 0;

  while (queue.length > 0) {
    const [posX, posY] = queue.shift();
    for (const nextDirction of nextDirctions) {
      const nextPos = [posX + nextDirction[0], posY + nextDirction[1]];
      if (!isValid(...nextPos, grid) || !isLand(...nextPos, grid)) continue;
      grid[nextPos[0]][nextPos[1]] = 0;
      area++;
      queue.push(nextPos)
    }
  }

  return area;
}

/** BFS
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (isLand(i, j, grid)) {
        max = Math.max(max, BfsAndCountAreas(i, j, grid));
      }
    }
  }
  return max
};
