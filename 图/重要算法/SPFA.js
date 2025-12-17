// 生成测试数据函数
function generateTestData() {
  const testCases = [
    // ========== 有负环的测试用例 ==========
    {
      name: "简单负环（3个节点）",
      edges: [
        [1, 2, -1],
        [2, 3, 1],
        [3, 1, -1],
      ],
      n: 3,
      hasNegativeCycle: true,
      expectedCycle: [1, 2, 3, 1], // 可能的负环路径
    },
    {
      name: "含正权边的负环",
      edges: [
        [1, 2, 2],
        [2, 3, 3],
        [3, 4, -10],
        [4, 1, 1],
      ],
      n: 4,
      hasNegativeCycle: true,
    },
    {
      name: "大负环（5个节点）",
      edges: [
        [1, 2, 1],
        [2, 3, 1],
        [3, 4, 1],
        [4, 5, -5],
        [5, 1, 1],
      ],
      n: 5,
      hasNegativeCycle: true,
    },
    {
      name: "多个负环",
      edges: [
        [1, 2, -1],
        [2, 1, -1],
        [2, 3, -2],
        [3, 2, -2],
        [3, 4, 1],
        [4, 5, 1],
      ],
      n: 5,
      hasNegativeCycle: true,
    },

    // ========== 无负环的测试用例 ==========
    {
      name: "无环图",
      edges: [
        [1, 2, 2],
        [1, 3, 4],
        [2, 3, 1],
        [2, 4, 7],
        [3, 4, 3],
      ],
      n: 4,
      hasNegativeCycle: false,
    },
    {
      name: "有负边但无负环",
      edges: [
        [1, 2, -2],
        [2, 3, -1],
        [3, 4, -3],
        [1, 3, 1],
        [2, 4, 2],
      ],
      n: 4,
      hasNegativeCycle: false,
    },
    {
      name: "DAG图（拓扑排序）",
      edges: [
        [1, 2, 3],
        [1, 3, 2],
        [2, 4, -1],
        [3, 4, -2],
        [4, 5, 1],
      ],
      n: 5,
      hasNegativeCycle: false,
    },

    // ========== 特殊测试用例 ==========
    {
      name: "自环负边",
      edges: [
        [1, 1, -5],
        [1, 2, 2],
        [2, 3, 3],
      ],
      n: 3,
      hasNegativeCycle: true, // 自环负边形成负环
    },
    {
      name: "所有边权重为负但无环",
      edges: [
        [1, 2, -1],
        [2, 3, -2],
        [3, 4, -3],
      ],
      n: 4,
      hasNegativeCycle: false, // 线性结构，无环
    },
    {
      name: "大图测试（10个节点）",
      edges: [
        [1, 2, 1],
        [2, 3, -2],
        [3, 4, 3],
        [4, 5, -4],
        [5, 6, 5],
        [6, 7, -6],
        [7, 8, 7],
        [8, 9, -8],
        [9, 10, 9],
        [10, 1, -10], // 形成负环
        [1, 3, 2],
        [2, 4, -3],
        [3, 5, 4],
      ],
      n: 10,
      hasNegativeCycle: true,
    },
  ];

  // 随机生成额外测试用例
  const randomTests = generateRandomTestCases(5);

  return [...testCases, ...randomTests];
}

// 生成随机测试用例
function generateRandomTestCases(count) {
  const randomTests = [];

  for (let i = 0; i < count; i++) {
    const n = Math.floor(Math.random() * 15) + 5; // 5-20个节点
    const edgeCount = Math.floor(Math.random() * 30) + 10; // 10-40条边

    const edges = [];
    for (let j = 0; j < edgeCount; j++) {
      const u = Math.floor(Math.random() * n) + 1;
      const v = Math.floor(Math.random() * n) + 1;
      // 权重范围：-10到10
      const w = Math.floor(Math.random() * 21) - 10;
      edges.push([u, v, w]);
    }

    // 随机决定期望结果（用于验证）
    const hasNegativeCycle = Math.random() > 0.5;

    randomTests.push({
      name: `随机测试 ${i + 1} (${n}节点, ${edgeCount}边)`,
      edges,
      n,
      hasNegativeCycle: null, // 未知，需要算法判断
      isRandom: true,
    });
  }

  return randomTests;
}

// 测试运行器
function runTests(bellmanFordFunction) {
  const testCases = generateTestData();
  console.log(`🚀 开始测试 ${testCases.length} 个测试用例\n`);

  let passed = 0;
  let failed = 0;
  let unknown = 0;

  for (const testCase of testCases) {
    console.log(`📋 测试: ${testCase.name}`);
    console.log(`   节点数: ${testCase.n}, 边数: ${testCase.edges.length}`);

    try {
      const result = bellmanFordFunction(testCase.edges, testCase.n);

      if (testCase.isRandom) {
        console.log(`   🔍 算法结果: ${result ? "有负环" : "无负环"}`);
        console.log("   ℹ️  随机测试，无法验证正确性\n");
        unknown++;
      } else {
        const expected = testCase.hasNegativeCycle;
        const actual = result;

        if (expected === actual) {
          console.log(
            `   ✅ 通过: 期望 ${expected ? "有负环" : "无负环"}, 实际 ${
              actual ? "有负环" : "无负环"
            }\n`
          );
          passed++;
        } else {
          console.log(
            `   ❌ 失败: 期望 ${expected ? "有负环" : "无负环"}, 实际 ${
              actual ? "有负环" : "无负环"
            }`
          );
          console.log("   边列表:", testCase.edges);
          console.log();
          failed++;
        }
      }
    } catch (error) {
      console.log(`   💥 异常: ${error.message}\n`);
      failed++;
    }
  }

  console.log("=".repeat(50));
  console.log(`📊 测试结果:`);
  console.log(`   ✅ 通过: ${passed}`);
  console.log(`   ❌ 失败: ${failed}`);
  console.log(`   🔍 未知: ${unknown}`);
  console.log(`   📈 总计: ${passed + failed + unknown}`);

  if (failed === 0 && unknown === 0) {
    console.log("🎉 所有测试通过！");
  }
}

function hasNegativeWeightCycleSPFA(edges, n) {
  /** dist 数组 */
  const dist = new Array(n + 1).fill(Infinity);
  /** losen函数 */
  function losen(edge) {
    const [from, to, weight] = edge;
    if (dist[from] === Infinity) return;
    if (dist[from] + weight < dist[to]) {
      dist[to] = dist[from] + weight;
    }
  }

  function spfa() {
    const queue = [1];
    const visitiedSet = new Set();
    visitiedSet.add(1);
    while (queue.length > 0) {
      const top = queue.shift();
      for (let edge of edges) {
        const [from, to] = edge;
        if (from === top) {
          losen(edge);
          if (!visitiedSet.has(to)) {
            visitiedSet.add(to);
            queue.push(to);
          }
        }
      }
    }
  }

  /** 开始点距离为 0  */
  dist[1] = 1;
  for (let i = 1; i < n - 1; i++) {
    spfa();
  }

  const sum = dist.slice(1).reduce((prev, curr) => prev + curr, 0);
  spfa();
  const sum2 = dist.slice(1).reduce((prev, curr) => prev + curr, 0);
  return sum !== sum2;
}

// 运行测试
console.log("🔄 开始测试你的Bellman-Ford算法...\n");
runTests(hasNegativeWeightCycleSPFA);
