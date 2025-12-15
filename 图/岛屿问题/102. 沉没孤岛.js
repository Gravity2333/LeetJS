/** 这个题的思路不变
 *  边界不挨着的岛屿
 *  我们可以先在边上扩散，删除所有和边挨着的岛屿，然后就转换成 200 岛屿数量 问题了!
 */

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

/** 删除陆地 DFS */
function removeLandDfs(x, y, grid) {
  if (!isLand(x, y, grid)) return;
  /** remove land */
  grid[x][y] = 0;
  for (const nextDirction of nextDirections) {
    const nextPos = [x + nextDirction[0], y + nextDirction[1]];
    if (!isValid(...nextPos, grid) || !isLand(...nextPos, grid)) continue;
    removeLandDfs(...nextPos, grid);
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  /** romove unclosed */
  for (let i = 0; i < grid[0]?.length; i++) {
    removeLandDfs(0, i, grid);
    removeLandDfs(grid.length - 1, i, grid);
  }

  for (let i = 0; i < grid?.length; i++) {
    removeLandDfs(i, 0, grid);
    removeLandDfs(i, grid[0]?.length - 1, grid);
  }

  let cnt = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (isLand(i, j, grid)) {
        cnt++;
        removeLandDfs(i, j, grid);
      }
    }
  }

  return cnt
};
