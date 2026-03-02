// /** 这个题的思路不变
//  *  边界不挨着的岛屿
//  *  我们可以先在边上扩散，删除所有和边挨着的岛屿，然后就转换成 200 岛屿数量 问题了!
//  */

// /** 定义方向 */
// const nextDirections = [
//   [-1, 0],
//   [0, -1],
//   [1, 0],
//   [0, 1],
// ];

// /** 是否为陆地 */
// function isLand(x, y, grid) {
//   return grid[x][y] == 1;
// }

// /** 是否在范围内 */
// function isValid(x, y, grid) {
//   return x >= 0 && y >= 0 && x < grid.length && y < grid[0]?.length;
// }

// /** 删除陆地 DFS */
// function removeLandDfs(x, y, grid) {
//   if (!isLand(x, y, grid)) return;
//   /** remove land */
//   grid[x][y] = 0;
//   for (const nextDirction of nextDirections) {
//     const nextPos = [x + nextDirction[0], y + nextDirction[1]];
//     if (!isValid(...nextPos, grid) || !isLand(...nextPos, grid)) continue;
//     removeLandDfs(...nextPos, grid);
//   }
// }

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var closedIsland = function (grid) {
//   /** romove unclosed */
//   for (let i = 0; i < grid[0]?.length; i++) {
//     removeLandDfs(0, i, grid);
//     removeLandDfs(grid.length - 1, i, grid);
//   }

//   for (let i = 0; i < grid?.length; i++) {
//     removeLandDfs(i, 0, grid);
//     removeLandDfs(i, grid[0]?.length - 1, grid);
//   }

//   let cnt = 0;
//   for (let i = 1; i < grid.length - 1; i++) {
//     for (let j = 1; j < grid[i].length - 1; j++) {
//       if (isLand(i, j, grid)) {
//         cnt++;
//         removeLandDfs(i, j, grid);
//       }
//     }
//   }

//   return cnt
// };

(async () => {
  const interface = require("readline").createInterface({
    input: process.stdin,
  });
  const iter = interface[Symbol.asyncIterator]();
  const readline = async () => (await iter.next()).value;

  const [M, N] = (await readline()).split(" ");
  const grid = [];
  for (let i = 0; i < M; i++) {
    grid.push((await readline()).split(" "));
  }

  function validate([i, j]) {
    return i >= 0 && i < M && j >= 0 && j < N;
  }

  function dfsAndMarkLand([i, j]) {
    if (grid[i][j] == 1) {
      grid[i][j] = -1;
      const queue = [[i, j]];
      const nexts = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];
      while (queue.length > 0) {
        const node = queue.shift();
        for (const next of nexts) {
          const nextNode = [node[0] + next[0], node[1] + next[1]];
          if (!validate(nextNode)) continue;
          if (grid[nextNode[0]][nextNode[1]] == 1) {
            grid[nextNode[0]][nextNode[1]] = -1;
            queue.push(nextNode);
          }
        }
      }
    }
  }

  for (let i = 0; i < M; i++) {
    dfsAndMarkLand([i, 0]);
    dfsAndMarkLand([i, N - 1]);
  }

  for (let j = 0; j < N; j++) {
    dfsAndMarkLand([0, j]);
    dfsAndMarkLand([M - 1, j]);
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] == 1) {
        grid[i][j] = "0";
      } else if (grid[i][j] == -1) {
        grid[i][j] = "1";
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    console.log(grid[i].join(" "));
  }
})();
