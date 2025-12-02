// 4 4
// 1 2 -1
// 2 3 1
// 3 1 -1
// 3 4 1

const edges = [
  [1, 2, -1],
  [2, 3, 1],
  [3, 1, -1],
  [3, 4, 1],
];
const V = 4;
const E = 4;

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

function hasNegativeWeightCycle(edges, n) {
  const grid = initGrid(edges, n);
  const minDist = new Array(n + 1).fill(Infinity);
  minDist[1] = 0;

  function _losen() {
    let isLosen = false;
    for (const edge of edges) {
      const [from, to, weight] = edge;
      if (minDist[from] === Infinity) continue;
      if (minDist[from] + weight < minDist[to]) {
        minDist[to] = minDist[from] + weight;
        isLosen = true;
      }
    }
    if (!isLosen) return false;
    return true;
  }
  // n-1 次松弛操作
  for (let i = 0; i < n - 1; i++) {
    const needContinue = _losen();
    if (!needContinue) break;
  }

  const copied = [...minDist];

  _losen();

  return copied.join(" ") !== minDist.join(" ");
}

console.log(hasNegativeWeightCycle(edges, V));
console.log(
  hasNegativeWeightCycle(
    [
      [5, 6, -2],
      [1, 2, 1],
      [5, 3, 1],
      [2, 5, 2],
      [2, 4, -3],
      [4, 6, 4],
      [1, 3, 5],
    ],
    6
  )
);
