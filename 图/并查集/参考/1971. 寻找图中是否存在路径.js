class UnionFind {
  constructor() {
    this.map = new Map();
  }

  /** 添加元素 */
  add(x) {
    if (!this.map.has(x)) {
      this.map.set(x, x);
    }
  }

  /** 查找元素的parent */
  find(x) {
    this.add(x);
    if (this.map.get(x) !== x) {
      this.map.set(x, /** 再次find(parent) */ this.find(this.map.get(x)));
    }
    return this.map.get(x);
  }

  /** 是否在一个集合内 */
  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  /** 加入 */
  join(x, y) {
    const parentX = this.find(x);
    const parentY = this.find(y);

    if (parentX !== parentY) {
      this.map.set(parentX, parentY);
    }
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const unionFind = new UnionFind();
  for (const edge of edges) {
    const [from, to] = edge;
    unionFind.join(from, to);
  }
  return unionFind.connected(source, destination);
};

class UnionFind {
  parent = new Map();
  add(x) {
    if (!this.parent.has(x)) this.parent.set(x, x);
  }

  find(x) {
    this.add(x);
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }

  join(x, y) {
    this.parent.set(this.find(x), this.find(y));
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const uf = new UnionFind()
  for(const edge of edges){
    uf.join(edge[0],edge[1])
  }

  return uf.isConnected(source,destination)
};

