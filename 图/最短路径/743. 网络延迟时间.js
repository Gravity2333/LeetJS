// 有 n 个网络节点，标记为 1 到 n。

// 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。

// 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。

/** Dijkstra 在dist中求最大值 (有向)
 * @param {number[][]} times
 * @param {number} n 节点数量  1-n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const adjacencyList = Array.from({ length: n + 1 }, () => []);
  for (const time of times) {
    const [from, to, weight] = time;
    adjacencyList[from].push({
      index: to,
      weight,
    });
  }

  const dist = Array.from({ length: n + 1 }, () => Infinity);
  const visited = Array.from({ length: n + 1 }, () => false);
  // 从 k 开始
  let currentCollectedNode = k;
  let collected = 1;
  dist[currentCollectedNode] = 0;

  while (collected <= n) {
    visited[currentCollectedNode] = true;
    // 变更dist
    for (let i = 0; i < adjacencyList[currentCollectedNode].length; i++) {
      const { index, weight } = adjacencyList[currentCollectedNode][i];
      if (
        !visited[index] &&
        dist[currentCollectedNode] + weight < dist[index]
      ) {
        dist[index] = dist[currentCollectedNode] + weight;
      }
    }

    let minIndex = -1;
    let min = Infinity;
    // 找到最小的路径
    for (let i = 0; i < dist.length; i++) {
      if (visited[i]) continue;
      if (dist[i] < min) {
        min = dist[i];
        minIndex = i;
      }
    }

    if (min === Infinity) {
      break;
    }

    currentCollectedNode = minIndex;
    collected++;
  }

  const max = Math.max(...dist.slice(1));
  return max === Infinity ? -1 : max;
};

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const adj = Array.from({ length: n+1 }, () => []);

  for (const time of times) {
    const [from, to, power] = time;
    adj[from].push({
      to,
      power,
    });
  }

  const minDist = new Array(n+1).fill(Infinity);
  const visited = new Array(n+1).fill(false);
  visited[k] = true;
  minDist[k] = 0;
  let current = k;
  let finished = 0;

  while (finished < n) {
    visited[current] = true;
    const neighbors = adj[current];
    for (const neighbor of neighbors) {
      const { to, power } = neighbor;
      if (visited[to]) continue;
      // update minDist
      const totalPower = minDist[current] + power;
      minDist[to] = Math.min(minDist[to], totalPower);
    }

    let minIndex = 0;
    let minValue = Infinity;

    for (let i = 0; i < minDist.length; i++) {
      if (visited[i]) continue;
      if (minDist[i] < minValue) {
        minValue = minDist[i];
        minIndex = i;
      }
    }


    current = minIndex;
    finished++;
  }

  const max = Math.max(...minDist.slice(1))
  return max === Infinity ? -1 : max;
};
