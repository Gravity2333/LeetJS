// 有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

// 这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。

// 岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

// 返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci] 表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。

/**
 * 一般想法都是按照题目描述走
 * 从每个节点开始 深度优先 / 广度优先搜素，如果能到达两个大洋，就记录
 * 这种方法的复杂度是 ( m * n )^2 肯定会超时
 *
 * 我们反过来思考
 * 从2个大洋的海岸向上搜索，把能到达的点标记！ 最后看一下哪些点能共同到达即可!
 */

/** 移动方向 */
var moves = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

/** 是否在有效访问 */
function isValid(i, j, grid) {
  return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
}

function hasCurrentSign(i, j, result, sign) {
  return (result[i][j] & sign) === sign;
}

function mergeSign(i, j, result, sign) {
  result[i][j] |= sign;
}

/** 遍历到的节点 标记*/
function BFSAndRecord(i, j, heights, sign, result) {
  const queue = [[i, j]];

  while (queue.length > 0) {
    const [posX, posY] = queue.shift();
    const currHeight = heights[posX][posY];
    mergeSign(posX, posY, result, sign);
    for (const move of moves) {
      const next = [posX + move[0], posY + move[1]];
      if (!isValid(...next, heights) || hasCurrentSign(...next, result, sign))
        continue;
      if (heights[next[0]][next[1]] >= currHeight) {
        // 可以流动
        queue.push(next);
      }
    }
  }
}

var PacificSign = 0b01;
var AtlanticSign = 0b10;

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const result = Array.from({ length: heights.length }, () =>
    new Array(heights[0].length).fill(0),
  );

  // 2 横 边
  for (let i = 0; i < heights[0].length; i++) {
    BFSAndRecord(0, i, heights, PacificSign, result);
    BFSAndRecord(heights.length - 1, i, heights, AtlanticSign, result);
  }

  // 2列
  for (let i = 0; i < heights.length; i++) {
    BFSAndRecord(i, 0, heights, PacificSign, result);
    BFSAndRecord(i, heights[0].length - 1, heights, AtlanticSign, result);
  }

  const list = [];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (hasCurrentSign(i, j, result, PacificSign | AtlanticSign)) {
        list.push([i, j]);
      }
    }
  }
  return list;
};

// -------
/** 移动方向 */

var PacificSign = 0b01;
var AtlanticSign = 0b10;

var moves = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

/** 是否在有效访问 */
function isValid(i, j, grid) {
  return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
}

function hasCurrentSign(i, j, result, sign) {
  return (result[i][j] & sign) === sign;
}

function mergeSign(i, j, result, sign) {
  result[i][j] |= sign;
}

/** 遍历到的节点 标记*/
function BFSAndRecordFast(initQueue, heights, sign, result) {
  const queue = initQueue;

  while (queue.length > 0) {
    const [posX, posY] = queue.shift();
    const currHeight = heights[posX][posY];
    for (const move of moves) {
      const next = [posX + move[0], posY + move[1]];
      if (!isValid(...next, heights) || hasCurrentSign(...next, result, sign))
        continue;
      if (heights[next[0]][next[1]] >= currHeight) {
        // 可以流动
        mergeSign(...next, result, sign);
        queue.push(next);
      }
    }
  }
}

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const result = Array.from({ length: heights.length }, () =>
    new Array(heights[0].length).fill(0),
  );

  // 2 横 边
  const pacQueue1 = [];
  const atlQueue1 = [];
  for (let i = 0; i < heights[0].length; i++) {
    mergeSign(0, i, result, PacificSign);
    pacQueue1.push([0, i]);
    mergeSign(heights.length - 1, i, result, AtlanticSign);
    atlQueue1.push([heights.length - 1, i]);
  }

  BFSAndRecordFast(pacQueue1, heights, PacificSign, result);
  BFSAndRecordFast(atlQueue1, heights, AtlanticSign, result);

  // 2列
  const pacQueue2 = [];
  const atlQueue2 = [];
  for (let i = 0; i < heights.length; i++) {
    mergeSign(i, 0, result, PacificSign);
    pacQueue2.push([i, 0]);
    mergeSign(i, heights[0].length - 1, result, AtlanticSign);
    atlQueue2.push([i, heights[0].length - 1]);
  }
  BFSAndRecordFast(pacQueue2, heights, PacificSign, result);
  BFSAndRecordFast(atlQueue2, heights, AtlanticSign, result);

  const list = [];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (hasCurrentSign(i, j, result, PacificSign | AtlanticSign)) {
        list.push([i, j]);
      }
    }
  }
  return list;
};

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const flow = Array.from({ length: heights.length }, () =>
    new Array(heights[0].length).fill(0b00),
  );

  const nexts = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function isValid([i, j]) {
    return i >= 0 && i < heights.length && j >= 0 && j < heights[i].length;
  }

  const pacFlag = 0b01;
  const atlFlag = 0b10;

  function hasFlag(flags, flag) {
    return (flags & flag) === flag;
  }

  function bfsAndMark([i, j], flag) {
    flow[i][j] |= flag;
    const queue = [[i, j]];

    while (queue.length > 0) {
      const node = queue.shift();
      const currentHeight = heights[node[0]][node[1]];
      for (const next of nexts) {
        const nextPos = [node[0] + next[0], node[1] + next[1]];
        if (!isValid(nextPos)) continue;
        if (
          !hasFlag(flow[nextPos[0]][nextPos[1]], flag) &&
          heights[nextPos[0]][nextPos[1]] >= currentHeight
        ) {
          flow[nextPos[0]][nextPos[1]] |= flag;
          queue.push(nextPos);
        }
      }
    }
  }

  for (let i = 0; i < heights.length; i++) {
    // pacFlag
    bfsAndMark([i, 0], pacFlag);
  }

  for (let j = 0; j < heights[0].length; j++) {
    // pacFlag
    bfsAndMark([0, j], pacFlag);
  }

  for (let i = 0; i < heights.length; i++) {
    // atl
    bfsAndMark([i, heights[0].length - 1], atlFlag);
  }

  for (let j = 0; j < heights[0].length; j++) {
    // atl
    bfsAndMark([heights.length - 1, j], atlFlag);
  }
  const results = [];
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[i].length; j++) {
      if (flow[i][j] === 0b11) {
        results.push([i, j]);
      }
    }
  }
  return results;
};
