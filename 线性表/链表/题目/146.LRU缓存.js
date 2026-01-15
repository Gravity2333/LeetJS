/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  /** 头部为插入节点 新的节点 */
  this.head = {
    val: "HEAD",
    prev: null,
    next: null,
  };
  /** 尾部为需要清理的节点 */
  this.tail = {
    val: "TAIL",
    prev: null,
    next: null,
  };
  // 连接
  this.head.next = this.tail
  this.tail.prev = this.head
};

LRUCache.prototype.move2Head = function (node) {
  // remove node
  node.prev.next = node.next;
  node.next.prev = node.prev;
  // 插入at head
  node.next = this.head.next;
  node.prev = this.head;
  this.head.next.prev = node;
  this.head.next = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;
  const node = this.map.get(key);
  this.move2Head(node);
  return node.val[1]; //[key,value]
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.val[1] = value;
    this.move2Head(node);
  } else {
    if (this.map.size === this.capacity) {
      // 删除 tail
      // del node
      const delNode = this.tail.prev;
      delNode.prev.next = this.tail;
      this.tail.prev = delNode.prev;
      // 从map删除
      this.map.delete(delNode.val[0]);
    }

    // 插入头部
    const node = {
      val: [key, value],
      prev: this.head,
      next: this.head.next,
    };
    this.head.next.prev = node;
    this.head.next = node;
    // 插入map
    this.map.set(key, node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
