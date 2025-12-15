// 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。

// 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。

// 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。

/** 定义方向 */
const nextDirections = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

/** 是否为陆地 */
function isLand(x, y, grid) {
  return grid[x][y] == 1;
}

/** 是否在范围内 */
function isValid(x, y, grid) {
  return x >= 0 && y >= 0 && x < grid.length && y < grid[0]?.length;
}

/** 删除陆地 BFS */
function removeLandBfs(x, y, grid) {
  if (!isLand(x, y, grid)) return;
  /** remove land */
  const queue = [[x, y]];
  grid[x][y] = 0;

  while (queue.length > 0) {
    const [posX, posY] = queue.shift();
    for (const nextDirction of nextDirections) {
      const nextPos = [posX + nextDirction[0], posY + nextDirction[1]];
      if (!isValid(...nextPos, grid) || !isLand(...nextPos, grid)) continue;
      grid[nextPos[0]][nextPos[1]] = 0;
      queue.push(nextPos);
    }
  }
}

/** 统计 dfs */
function cntAreasDfs(x, y, grid) {
  if (!isLand(x, y, grid)) return 0;
  let cnt = 1;
  grid[x][y] = 0;
  for (let nextDirction of nextDirections) {
    const nextPos = [x + nextDirction[0], y + nextDirction[1]];
    if (!isValid(...nextPos, grid) || !isLand(...nextPos, grid)) continue;
    cnt += cntAreasDfs(...nextPos, grid);
  }
  return cnt;
}

/** 和沉默孤岛一个题 尝试BFS解法
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  /** romove unclosed */
  for (let i = 0; i < grid[0]?.length; i++) {
    removeLandBfs(0, i, grid);
    removeLandBfs(grid.length - 1, i, grid);
  }

  for (let i = 0; i < grid?.length; i++) {
    removeLandBfs(i, 0, grid);
    removeLandBfs(i, grid[0]?.length - 1, grid);
  }

  let cnt = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (isLand(i, j, grid)) {
        cnt += cntAreasDfs(i, j, grid);
      }
    }
  }

  return cnt;
};
