// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

// 示例 1：

// 输入：grid = [
//   ['1','1','1','1','0'],
//   ['1','1','0','1','0'],
//   ['1','1','0','0','0'],
//   ['0','0','0','0','0']
// ]
// 输出：1
// 示例 2：

// 输入：grid = [
//   ['1','1','0','0','0'],
//   ['1','1','0','0','0'],
//   ['0','0','1','0','0'],
//   ['0','0','0','1','1']
// ]
// 输出：3

/**
 * 注意 这个题目给的不是 邻接矩阵
 * 你不能用邻接矩阵的方式 搜索
 * 题目定义，上下左右有链接陆地的会被算在一个岛屿内 所以我们定义一个direction数组，表示当前陆地继续寻找陆地的四个方向
 * 可以用 BFS ｜ DFS
 * 需要使用 visited数组，这里面我们可以直接把访问过的 置 0
 */

/** 定义下一步查找陆地的四个方向 [x,y] */
const nextDirections = [
  /** 上 */
  [-1, 0],
  /** 下 */
  [1, 0],
  /** 左 */
  [0, -1],
  /** 右 */
  [0, 1],
];

function DFS(posX, posY, grid) {
  if (grid[posX][posY] == 0) return;
  /** 置 0 */
  grid[posX][posY] = 0;
  /** 寻找链接陆地 */
  for (const nextDirection of nextDirections) {
    const [nextDirectionX, nextDirectionY] = nextDirection;
    const next = [posX + nextDirectionX, posY + nextDirectionY];
    if (isValidPos(...next, grid) && isIsLand(...next, grid)) {
      DFS(...next, grid);
    }
  }
}

function isValidPos(posX, posY, grid) {
  return posX >= 0 && posX < grid.length && posY >= 0 && posY < grid[0].length;
}

function isIsLand(posX, posY, grid) {
  return grid[posX][posY] == 1;
}

/** DFS 实现
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let cnt = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (isIsLand(i, j, grid)) {
        DFS(i, j, grid);
        cnt++;
      }
    }
  }
  return cnt;
};

/** BFS 实现
 * 本题的BFS需要注意一个细节
 * BFS 可能导致重复加入队列 造成超时
 *       C.  G
 *   D.  A.  B. F
 *       E.  H
 * 处理A 此时把 BCDE都加入
 * 处理B 此时把 H F G 加入
 * 处理C 此时把 G 重复加入队列里了
 *
 * 随着BFS都进行 重复添加的情况会越来越多 造成超时
 * 所以这里 我们需要，把元素添加到队列时 就将其置为0 而不是等到处理的时候再置0
 */

function BFS(posX, posY, grid) {
  if (grid[posX][posY] == 0) return;
  /** 置 0 */
  const queue = [[posX, posY]];
  grid[posX][posY] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.pop();
    /** 寻找链接陆地 */
    for (const nextDirection of nextDirections) {
      const [nextDirectionX, nextDirectionY] = nextDirection;
      const next = [x + nextDirectionX, y + nextDirectionY];
      if (isValidPos(...next, grid) && isIsLand(...next, grid)) {
        queue.push(next);
        grid[next[0]][next[1]] = 0;
      }
    }
  }
}

/** BFS 实现
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let cnt = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (isIsLand(i, j, grid)) {
        BFS(i, j, grid);
        cnt++;
      }
    }
  }
  return cnt;
};
