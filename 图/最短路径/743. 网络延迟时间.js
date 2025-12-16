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
  const adjacencyList = Array.from({ length: n+1 }, () => []);
  for (const time of times) {
    const [from, to, weight] = time;
    adjacencyList[from].push({
      index: to,
      weight,
    });
  }

  const dist = Array.from({ length: n+1 }, ()=>Infinity);
  const visited = Array.from({ length: n+1 }, () => false);
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

  const max =  Math.max(...dist.slice(1))
  return max === Infinity ? -1: max
};
