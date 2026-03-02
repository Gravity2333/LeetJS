// // 1 1 0 0 0
// // 1 1 0 0 0
// // 0 0 1 0 0
// // 0 0 0 1 1

// const map = [
//   [1, 1, 0, 0, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 1],
// ];

// /** 定义四个方向 */
// const directions = [
//   [1, 0],
//   [0, 1],
//   [-1, 0],
//   [0, -1],
// ];

// function isValid(map, x, y) {
//   return x < map.length && x >= 0 && y >= 0 && y < map[x].length;
// }

// function bfs(map, i, j) {
//   const queue = [[i, j]];
//   while (queue.length > 0) {
//     const [currentX, currentY] = queue.shift();
//     map[currentX][currentY] = 0;
//     for (const direction of directions) {
//       const next = [currentX + direction[0], currentY + direction[1]];
//       if (isValid(map, next[0], next[1]) && map[next[0]][next[1]] === 1) {
//         queue.push(next);
//       }
//     }
//   }
// }

// function islandAreas(map) {
//   // 清除边界陆地
//   for (let i = 0; i < map.length; i++) {
//     // 左右边
//     if (map[i][0] === 1) {
//       bfs(map, i, 0);
//     }

//     if (map[i][map[0].length - 1] === 1) {
//       bfs(map, i, map[0].length - 1);
//     }
//   }

//   for (let i = 0; i < map[0].length; i++) {
//     // 上下边
//     if (map[0][i] === 1) {
//       bfs(map, 0, i);
//     }

//     if (map[map.length - 1][i] === 1) {
//       bfs(map, map.length - 1, i);
//     }
//   }

//   let areas = 0;
//   for (let i = 0; i < map.length; i++) {
//     for (let j = 0; j < map[i].length; j++) {
//       if (map[i][j] === 1) {
//         areas++;
//       }
//     }
//   }

//   return areas;
// }

// // console.log(islandAreas(map));

// function testIslandAreas() {
//   const testCases = [
//     {
//       name: "示例用例",
//       map: [
//         [1, 1, 0, 0, 0],
//         [1, 1, 0, 0, 0],
//         [0, 0, 1, 0, 0],
//         [0, 0, 0, 1, 1],
//       ],
//       expected: 1,
//     },
//     {
//       name: "没有孤岛（陆地接边界）",
//       map: [
//         [1, 1, 0],
//         [1, 0, 0],
//         [1, 0, 1],
//       ],
//       expected: 0,
//     },
//     {
//       name: "单个孤岛在中心",
//       map: [
//         [0, 0, 0, 0, 0],
//         [0, 1, 1, 1, 0],
//         [0, 1, 1, 1, 0],
//         [0, 0, 0, 0, 0],
//       ],
//       expected: 6,
//     },
//     {
//       name: "多个孤岛",
//       map: [
//         [0, 0, 0, 0, 0],
//         [0, 1, 0, 1, 0],
//         [0, 1, 0, 1, 0],
//         [0, 0, 0, 0, 0],
//       ],
//       expected: 4, // 左右两个孤岛，每个面积 2
//     },
//     {
//       name: "孤岛紧贴边界不算",
//       map: [
//         [0, 1, 0, 1, 0],
//         [1, 1, 0, 1, 1],
//         [0, 1, 0, 1, 0],
//       ],
//       expected: 0,
//     },
//   ];

//   for (const { name, map, expected } of testCases) {
//     // 深拷贝 map 避免原数组被修改
//     const mapCopy = map.map(row => [...row]);
//     const result = islandAreas(mapCopy);
//     console.log(`${name} => 结果: ${result}, 期望: ${expected}`);
//   }
// }

// // 调用测试
// testIslandAreas();

(async () => {
  const interface = require("readline").createInterface({
    input: process.stdin,
  });
  const iterator = interface[Symbol.asyncIterator]();
  const readLine = async () => (await iterator.next()).value;

  let matrix = [];

  // init
  const [M, N] = (await readLine()).split(" ");

  for (let i = 0; i < M; i++) {
    const row = (await readLine()).split(" ");
    matrix.push(row);
  }
  const nexts = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let areas = 0;

  function isValidPos([i, j]) {
    return i >= 0 && i < M && j >= 0 && j < N;
  }

  // BFS
  function bfsAndRemove([i, j]) {
  
    if (matrix[i][j] == 1) {
      matrix[i][j] = 0;

      for (const next of nexts) {
        const nextPos = [next[0] + i, next[1] + j];
        if (!isValidPos(nextPos)) continue;
        if (matrix[nextPos[0]][nextPos[1]] === 0) continue;
        bfsAndRemove(nextPos);
      }
    }
  }

  for (let j = 0; j < N; j++) {
    bfsAndRemove([0, j]);
    bfsAndRemove([M - 1, j]);
  }

  for (let i = 0; i < M; i++) {
    bfsAndRemove([i, 0]);
    bfsAndRemove([i, N - 1]);
  }

  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (matrix[i][j] == 1) {
        areas += 1;
      }
    }
  }

  console.log(areas)
})();
