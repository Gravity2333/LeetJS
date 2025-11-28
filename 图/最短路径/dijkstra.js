// 输入示例

// 7 9
// 1 2 1
// 1 3 4
// 2 3 2
// 2 4 5
// 3 4 2
// 4 5 3
// 2 6 4
// 5 7 4
// 6 7 9
// 输出示例：12

const edges = [
  [1, 2, 1],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 5],
  [3, 4, 2],
  [4, 5, 3],
  [2, 6, 4],
  [5, 7, 4],
  [6, 7, 9],
];

const V = 7; // node
const E = 9; // edge

function edgesToGrid(edges, n) {
  const grid = Array.from({ length: n + 1 }, () =>
    new Array(n + 1).fill(Infinity)
  );

  for (let i = 0; i < grid.length; i++) {
    grid[i][i] = 0;
  }

  edges.forEach((edge) => {
    const [from, to, weight] = edge;
    grid[from][to] = grid[to][from] = weight;
  });

  return grid;
}

function getMinPathIndex(minPath, visited) {
  let minIndex = Infinity;
  let minValue = Infinity;
  for (let i = 0; i < minPath.length; i++) {
    if (minPath[i] < minValue && !visited[i]) {
      minIndex = i;
      minValue = minPath[i];
    }
  }
  return minIndex == Infinity ? -1 : minIndex;
}


function dijkstra(edges, V, E) {
  const grid = edgesToGrid(edges, V+1);
  /** 节点是否被访问过 */
  const visited = new Array(V+1).fill(false);
  /** 最短路径数组，每个节点到原始点的最短路径 */
  const minPath = new Array(V+1).fill(Infinity);

  let currentNode = 1;
  minPath[currentNode] = 0;

  while (currentNode && currentNode !== -1) {
    visited[currentNode] = true;
    const neighbours = grid[currentNode];
    for (let neighbourIndex =0; neighbourIndex< neighbours.length ; neighbourIndex++) {
        const neighbour = neighbours[neighbourIndex]
      if (neighbour === Infinity || visited[neighbourIndex]) continue;
      const maybeMinPath = minPath[currentNode] + neighbour;
      if (maybeMinPath < minPath[neighbourIndex]) {
        minPath[neighbourIndex] = maybeMinPath;
      }
    }
    // 找到最小值
    currentNode = getMinPathIndex(minPath, visited);
  }

  return minPath
}


console.log(dijkstra(edges,V,E))