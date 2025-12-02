// 6 7
// 5 6 -2
// 1 2 1
// 5 3 1
// 2 5 2
// 2 4 -3
// 4 6 4
// 1 3 5

const edges = [
  [5, 6, -2],
  [1, 2, 1],
  [5, 3, 1],
  [2, 5, 2],
  [2, 4, -3],
  [4, 6, 4],
  [1, 3, 5],
];

function initGrid(edges, n) {
  const grid = Array.from({ length: n + 1 }, () =>
    new Array(n + 1).fill(Infinity)
  );
  for (const edge of edges) {
    const [from, to, value] = edge;
    grid[from][to] = value;
  }

  return grid;
}

function bellmanFord(edges, n) {
  const grid = initGrid(edges, n);
  const minDist = new Array(n + 1).fill(Infinity);
  minDist[1] = 0;
  // n-1 次松弛操作
  for (let i = 0; i < n - 1; i++) {
    const queue = [1];
    let isLosen = false;
    while (queue.length > 0) {
      const top = queue.shift();
      const neighbors = grid[top];

      for (let i = 1; i <= n; i++) {
        if (
          neighbors[i] !== Infinity &&
          minDist[top] + neighbors[i] < minDist[i]
        ) {
          minDist[i] = minDist[top] + neighbors[i];
          queue.push(i);
          isLosen = true;
        }
      }
    }
    if (!isLosen) break;
  }

  return minDist;
}

console.log(bellmanFord(edges, 6));
