/**
 * 排序算法全能测试器
 * @param {Function} sortFn - 你的排序函数
 */
function runExtremeTests(sortFn) {
  const generateRandom = (len, max) =>
    Array.from({ length: len }, () => Math.floor(Math.random() * max));

  const testSuite = [
    // 1. 基础边界 (少的)
    { name: "空数组", data: [] },
    { name: "单个元素", data: [99] },
    { name: "两个元素-顺序", data: [1, 2] },
    { name: "两个元素-逆序", data: [2, 1] },

    // 2. 规律性长数组 (长的)
    { name: "百位正向有序", data: Array.from({ length: 100 }, (_, i) => i) },
    {
      name: "百位逆向有序",
      data: Array.from({ length: 100 }, (_, i) => 100 - i),
    },
    {
      name: "大量重复元素",
      data: Array(100).fill(5).concat(Array(100).fill(1)),
    },
    { name: "锯齿状数组", data: [1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 1, 10, 2, 9] },

    // 3. 极端数值
    { name: "包含负数与零", data: [0, -1, 5, -100, 200, -50, 0, 15] },
    {
      name: "极大极小值",
      data: [Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER, 0, 1, -1],
    },

    // 4. 随机压力测试 (超长)
    { name: "500位随机小范围(多重复)", data: generateRandom(500, 10) },
    { name: "1000位随机大范围", data: generateRandom(1000, 10000) },
    {
      name: "2000位随机浮点数",
      data: Array.from({ length: 2000 }, () => Math.random() * 1000),
    },
  ];

  console.log(
    `\x1b[36m%s\x1b[0m`,
    `🚀 开始执行极限测试 (共 ${testSuite.length} 个用例)...`,
  );
  console.time("总耗时");

  let passedCount = 0;

  testSuite.forEach((caseItem, index) => {
    const { name, data } = caseItem;

    // 准备标答 (注意：JS 原生 sort 必须传 (a,b)=>a-b，否则按字符串排 10 < 2)
    const expected = [...data].sort((a, b) => a - b);

    // 执行你的函数
    const startTime = performance.now();
    let result;
    try {
      result = sortFn([...data]);
    } catch (e) {
      result = `崩溃: ${e.message}`;
    }
    const endTime = performance.now();

    // 验证结果
    const isOk =
      Array.isArray(result) &&
      result.length === expected.length &&
      result.every((val, i) => val === expected[i]);

    if (isOk) {
      passedCount++;
      console.log(
        `✅ [${index + 1}] ${name.padEnd(25)} | 长度: ${data.length
          .toString()
          .padEnd(5)} | 耗时: ${(endTime - startTime).toFixed(3)}ms`,
      );
    } else {
      console.error(`❌ [${index + 1}] ${name.padEnd(25)} | 失败！`);
      if (data.length < 20) {
        console.log(`   输入: [${data}]`);
        console.log(`   预期: [${expected}]`);
        console.log(`   实际: [${result}]`);
      } else {
        console.log(`   错误摘要: 数组长度 ${data.length}，结果不匹配。`);
      }
    }
  });

  console.timeEnd("总耗时");
  console.log(
    `\n\x1b[32m%s\x1b[0m`,
    `测试完成: ${passedCount}/${testSuite.length} 通过`,
  );
}

// runExtremeTests(require("./简单排序/bubbleSort"));
// runExtremeTests(require("./简单排序/selectSort"));
// runExtremeTests(require("./简单排序/insertSort"));

// runExtremeTests(require("./高级排序/merge"));
// runExtremeTests(require("./高级排序/quick"));
runExtremeTests(require("./高级排序/shell"));