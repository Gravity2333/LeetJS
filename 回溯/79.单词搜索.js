// 79. 单词搜索
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

/** 定义下一个点的四个方向a */
const next = [
  /** 行 列 */
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function PosInRange(pos, board) {
  const rows = board.length || 0;
  const columns = board?.[0].length || 0;

  return pos[0] >= 0 && pos[0] < rows && pos[1] >= 0 && pos[1] < columns;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const result = existImple(board, word, [i, j]);
      if (result) return true;
    }
  }
  return false;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var existImple = function (
  board,
  word,
  pos = [0, 0],
  used = Array.from({ length: board.length }, () =>
    new Array(board[0].length).fill(0),
  ),
) {
  if (word === "") return true;
  if (used[pos[0]][pos[1]] == 0 && board[pos[0]][pos[1]] === word[0]) {
    if (word.length === 1) return true;
    used[pos[0]][pos[1]] = 1;
    for (const nextOffset of next) {
      const nextPost = [pos[0] + nextOffset[0], pos[1] + nextOffset[1]];
      if (!PosInRange(nextPost, board)) continue;
      // 可以从当前点开始找
      const founded = existImple(board, word.slice(1), nextPost, used);
      if (founded) return true;
    }
     used[pos[0]][pos[1]] = 0;
  }
  return false;
};
