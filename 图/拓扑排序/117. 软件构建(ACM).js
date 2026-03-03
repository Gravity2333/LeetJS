// 5 4
// 0 1
// 0 2
// 1 3
// 2 4

(async () => {
  const interface = require("readline").createInterface({
    input: process.stdin,
  });
  const iterator = interface[Symbol.asyncIterator]();
  const readline = async () => (await iterator.next()).value;

  // M 数量 N 关系
  const [M, N] = (await readline()).split(" ");

  const relations = [];
  for (let i = 0; i < N; i++) {
    relations.push((await readline()).split(" "));
  }

  const deps = new Array(+M).fill(0);
  for (const relation of relations) {
    const [from,to] = relation;
    deps[to]++;
  }
  const results = [];
  while (results.length < M) {
    let founded = false;
    for (let i = 0; i < M; i++) {
      if (deps[i] === -1) continue;
      if (deps[i] === 0) {
        deps[i] = -1;
        founded = true;
        results.push(i);
        for (const relation of relations) {
          if (relation[0] == i) {
            deps[relation[1]]--;
          }
        }
      }
    }

    if (!founded) {
      console.log(-1);
      return 
    }
  }
  console.log(results.join(' '));
})();
