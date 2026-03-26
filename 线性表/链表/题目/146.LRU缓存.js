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
  this.head.next = this.tail;
  this.tail.prev = this.head;
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

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = {
      val: "virtual Head",
      next: null,
      prev: null,
    };
    this.tail = {
      val: "virtual Tail",
      next: null,
      prev: null,
    };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  move2Head(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;

    node.next = this.head.next;
    node.next.prev = node;

    node.prev = this.head;
    this.head.next = node;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.move2Head(node);
      return node.val;
    }

    return -1;
  }

  put(key, val) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.move2Head(node);
      node.val = val;
    } else {
      const node = {
        key,
        val,
        next: null,
        prev: null,
      };
      if (this.map.size >= this.capacity) {
        const needDelNode = this.tail.prev;
        this.tail.prev = needDelNode.prev;
        this.tail.prev.next = this.tail;
        this.map.delete(needDelNode.key);
      }

      node.next = this.head.next;
      node.next.prev = node;
      node.prev = this.head;
      this.head.next = node;
      this.map.set(key, node);
    }
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = {
      val: "head",
      next: null,
      prev: null,
    };
    this.tail = {
      val: "tail",
      next: null,
      prev: null,
    };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  move2Head(node) {
    // remove node
    node.prev.next = node.next;
    node.next.prev = node.prev;

    // 插入到 head后
    node.next = this.head.next;
    node.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
  }

  deleteAtTail() {
    if (this.head.next === this.tail) return;
    const delNode = this.tail.prev;
    this.tail.prev = delNode.prev;
    delNode.prev.next = this.tail;

    this.map.delete(delNode.key);
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.move2Head(node);
      return node.val;
    }
    return -1;
  }

  put(key, val) {
    if (this.map.has(key)) {
      // 改值
      const node = this.map.get(key);
      this.move2Head(node);
      node.val = val;
    } else {
      // 插入
      if (this.map.size >= this.capacity) {
        // 先删除
        this.deleteAtTail();
      }

      const node = {
        key,
        val,
        next: null,
        prev: null,
      };

      // 插入到 head后
      node.next = this.head.next;
      node.next.prev = node;
      node.prev = this.head;
      this.head.next = node;

      this.map.set(key, node);
    }
  }
}

// ---------------------

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.head = {
    key: "head",
    value: "head",
    next: null,
    prev: null,
  };

  this.tail = {
    key: "tail",
    value: "tail",
    next: null,
    prev: null,
  };

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.move2Head = function (node) {
  node.next = this.head.next;
  node.next.prev = node;
  node.prev = this.head;
  this.head.next = node;
};

LRUCache.prototype.deleteAtTail = function () {
  const needDelNode = this.tail.prev;
  this.tail.prev = needDelNode.prev;
  needDelNode.prev.next = this.tail;
  this.map.delete(needDelNode.key);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.move2Head(node);
    return node.value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.move2Head(node);
    node.value = value;
  } else {
    while (this.map.size >= this.capacity) {
      this.deleteAtTail();
    }

    const node = {
      key,
      value,
      next: null,
      prev: null,
    };
    this.map.set(key, node);
    this.move2Head(node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
