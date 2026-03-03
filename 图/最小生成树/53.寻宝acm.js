// 7 11
// 1 2 1
// 1 3 1
// 1 5 2
// 2 6 1
// 2 4 2
// 2 3 2
// 3 4 1
// 4 5 1
// 5 6 2
// 5 7 1
// 6 7 1

(async () => {
  const interface = require("readline").createInterface({
    input: process.stdin,
  });
  const iterator = interface[Symbol.asyncIterator]();
  const readline = async () => (await iterator.next()).value;

  const [V, E] = (await readline()).split(" ");
  const relations = [];
  for (let i = 0; i < E; i++) {
    relations.push((await readline()).split(" "));
  }

  const grid = Array.from({ length: (+V) + 1 }, () =>
    new Array((+V) + 1).fill(Infinity),
  );

  for (const relation of relations) {
    const [from, to, power] = relation;
    grid[from][to] = grid[to][from] = power;
  }
     
  let total = 0;
  const visited = new Array((+V) + 1).fill(false);
  const dists = new Array((+V) + 1).fill(Infinity);
  visited[0] = true;
  dists[0] = 0;
  let visitedCnt = 0;
  let current = 1;

  while (visitedCnt < +V) {
    visited[current] = true;
    visitedCnt++;
    const neihbors = grid[current];

    for (let i = 0; i < neihbors.length; i++) {
      dists[i] = Math.min(neihbors[i], dists[i]);
    }

    let minIndex = -1;
    let minDist = Infinity;

    for (let i = 0; i < dists.length; i++) {
      if (visited[i]) continue;
      if (dists[i] < minDist) {
        minDist = dists[i];
        minIndex = i;
      }
    }

    if (minIndex >= 0) {
      current = minIndex;
      total += dists[minIndex];
    }
  }

  console.log(total);
})();
