var Trie = function () {
  this.root = {
    val: "head",
    map: new Map(),
    isEnd: false,
  };
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (const c of word) {
    if (!current.map.has(c)) {
      current.map.set(c, {
        val: c,
        map: new Map(),
        isEnd: false,
      });
    }
    current = current.map.get(c);
  }
  current.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this.root;
  for (const c of word) {
    if (!current.map.has(c)) {
      return false;
    }
    current = current.map.get(c);
  }
  return current.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;
  for (const c of prefix) {
    if (!current.map.has(c)) {
      return false;
    }
    current = current.map.get(c);
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
