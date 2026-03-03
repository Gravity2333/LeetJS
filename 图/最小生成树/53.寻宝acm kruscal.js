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


class UnionFind {
  constructor() {
    this.parent = new Map();
  }

  add(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
    }
  }

  find(x) {
    this.add(x);
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  join(x, y) {
    this.parent.set(this.find(x), this.find(y));
  }
}

(async () => {
  const interface = require("readline").createInterface({
    input: process.stdin,
  });
  const iterator = interface[Symbol.asyncIterator]();
  const readline = async () => (await iterator.next()).value;

  const [V, E] = (await readline()).split(" ");
  let relations = [];
  for (let i = 0; i < E; i++) {
    relations.push((await readline()).split(" "));
  }
  let total = 0;
  relations = relations.sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind();
  for (const relation of relations) {
    const [from, to, power] = relation;
    if (!uf.connected(from, to)) {
      uf.join(from, to);
      total += +power;
    }
  }
  console.log(total);
})();


