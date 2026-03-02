// 树可以看成是一个连通且 无环 的 无向 图。

// 给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。

// 请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的边。

// 示例 1：
// 输入: edges = [[1,2],[1,3],[2,3]]
// 输出: [2,3]
// 示例 2：
// 输入: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// 输出: [1,4]

/**
 * 思路
 *  无向图 可以考虑用并查集
 *  依次遍历边 并且加入并查集
 *  由于只多了一条边，所以每次加入unionFind之前 检查一下2个节点是否已经联通 即
 */

class UnionFind {
  constructor() {
    this.map = new Map();
  }

  add(x) {
    if (!this.map.has(x)) {
      this.map.set(x, x);
    }
  }

  find(x) {
    this.add(x);
    if (this.map.get(x) !== x) {
      this.map.set(x, this.find(this.map.get(x)));
    }
    return this.map.get(x);
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  join(x, y) {
    const parentX = this.find(x);
    const parentY = this.find(y);
    if (parentX !== parentY) {
      this.map.set(parentX, parentY);
    }
  }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const unionFind = new UnionFind();
  for (const edge of edges) {
    const [from, to] = edge;
    if (unionFind.connected(from, to)) {
      return edge;
    }
    unionFind.join(from, to);
  }
};

class UnionFind {
  parent = new Map();
  add(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
    }
  }

  // 找到parent
  find(x) {
    this.add(x);
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  join(x, y) {
    const xParent = this.find(x);
    const yParent = this.find(y);

    this.parent.set(xParent, yParent);
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const uf = new UnionFind();
  for (const [node1, node2] of edges) {
    if (uf.isConnected(node1, node2)) return [node1, node2];
    uf.join(node1, node2);
  }
};
