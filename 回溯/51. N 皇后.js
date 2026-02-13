// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

// 下一步可以走的点
// const nextSteps = [
//   [-2, -1],
//   [-2, 1],
//   [-1, 2],
//   [1, 2],
//   [2, -1],
//   [2, 1],
//   [1, -2],
//   [-1, -2],
// ];

// function isValidate(pos, broad) {
//   return (
//     pos[0] >= 0 &&
//     pos[0] < broad.length &&
//     pos[1] >= 0 &&
//     pos[1] < broad[pos[0]].length
//   );
// }

// function canPos(pos, broad) {
//   const posRow = pos[0];
//   const posColumn = pos[1];

//   // chech rows
//   for (let i = 0; i < posRow; i++) {
//     if (broad[i][posColumn] === "Q") return false;
//   }

//   // checkColumns
//   for (let i = 0; i < posColumn; i++) {
//     if (broad[posRow][i] === "Q") return false;
//   }

//   // checkCenter
//   for (let i = pos[0], j = pos[1]; i >= 0 && j >= 0; i--, j--) {
//     if (broad[i][j] === "Q") return false;
//   }

//   for (let i = pos[0], j = pos[1]; i >= 0 && j < broad.length; i--, j++) {
//     if (broad[i][j] === "Q") return false;
//   }

//   for (
//     let i = pos[0], j = pos[1];
//     i < broad.length && j < broad[i].length;
//     i++, j++
//   ) {
//     if (broad[i][j] === "Q") return false;
//   }

//   for (
//     let i = pos[0], j = pos[1];
//     i >= 0 && j < broad[i].length;
//     i--, j++
//   ) {
//     if (broad[i][j] === "Q") return false;
//   }

//   return true;
// }

// /**
//  * @param {number} n
//  * @return {string[][]}
//  */
// var solveNQueens = function (n) {
//   const result = [];
//   for (let i = 0; i < n; i++) {
//     solveNQueensImpl(
//       n,
//       [0, i],
//       Array.from({ length: n }, () => new Array(n).fill(".")),
//       result,
//     );
//   }
//   return result;
// };

// var solveNQueensImpl = function (n, pos, broad, result) {
//   if (n === 0) {
//     result.push(broad.map((row) => row.join("")));
//     return;
//   } else {
//     if (canPos(pos, broad)) {
//       broad[pos[0]][pos[1]] = "Q";

//       for (const nextStep of nextSteps) {
//         const nextPost = [pos[0] + nextStep[0], pos[1] + nextStep[1]];
//         if (!isValidate(nextPost, broad)) continue;
//         solveNQueensImpl(n - 1, nextPost, broad, result);
//       }
//     }
//     return;
//   }
// };

function isValidate(pos, broad) {
  return (
    pos[0] >= 0 &&
    pos[0] < broad.length &&
    pos[1] >= 0 &&
    pos[1] < broad[pos[0]].length
  );
}

function canPos(pos, broad) {
  const posRow = pos[0];
  const posColumn = pos[1];

  // chech rows
  for (let i = 0; i < posRow; i++) {
    if (broad[i][posColumn] === "Q") return false;
  }

  // checkColumns
  for (let i = 0; i < posColumn; i++) {
    if (broad[posRow][i] === "Q") return false;
  }

  // checkCenter
  for (let i = pos[0], j = pos[1]; i >= 0 && j >= 0; i--, j--) {
    if (broad[i][j] === "Q") return false;
  }

  for (let i = pos[0], j = pos[1]; i >= 0 && j < broad.length; i--, j++) {
    if (broad[i][j] === "Q") return false;
  }

  for (
    let i = pos[0], j = pos[1];
    i < broad.length && j < broad[i].length;
    i++, j++
  ) {
    if (broad[i][j] === "Q") return false;
  }

  for (let i = pos[0], j = pos[1]; i >= 0 && j < broad[i].length; i--, j++) {
    if (broad[i][j] === "Q") return false;
  }

  return true;
}

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (
  n,
  currentRow = 0,
  broad = Array.from({ length: n }, () => new Array(n).fill(".")),
  result = [],
) {
  if (currentRow === n) {
    result.push(broad.map((row) => row.join("")));
  } else {
    for (let i = 0; i < n; i++) {
      if (canPos([currentRow, i], broad)) {
        broad[currentRow][i] = "Q";
        solveNQueens(n, currentRow + 1, broad, result);
        broad[currentRow][i] = ".";
      }
    }
  }
  return result;
};
