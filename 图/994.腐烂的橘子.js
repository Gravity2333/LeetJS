/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const nexts = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function isValidate(node, grid) {
    return (
      node[0] >= 0 &&
      node[0] < grid.length &&
      node[1] >= 0 &&
      node[1] < grid[0].length
    );
  }

  let totalCnt = 0;
  let rotCnt = 0;
  const queue = [];
  // 统计腐烂
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) continue;
      if (grid[i][j] === 2) {
        rotCnt++;
        queue.push([i, j]);
      }
      totalCnt++;
    }
  }
  let minutes = 0;
  while (queue.length > 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const rotOrange = queue.shift();
      for (const next of nexts) {
        const nextOrange = [rotOrange[0] + next[0], rotOrange[1] + next[1]];
        if (!isValidate(nextOrange, grid)) continue;
        if (grid[nextOrange[0]][nextOrange[1]] !== 1) continue;
        grid[nextOrange[0]][nextOrange[1]] = 2;
        rotCnt++;
        queue.push(nextOrange);
      }
    }

    if (queue.length > 0) {
      minutes++;
    }
  }

  return rotCnt === totalCnt ? minutes : -1;
};
