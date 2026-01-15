var MyLinkedList = function () {
  return Object.assign(Object.create(MyLinkedList.prototype), {
    head: "virtualHead",
    next: null,
  });
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let current = this;
  for (let i = 0; i < index; i++) {
    current = current?.next;
    if (!current) return -1;
  }
  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.next = { val, next: this.next };
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let current = this;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = { val, next: null };
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let current = this.next;
  let prev = this;
  for (let i = 0; i < index; i++) {
    prev = current;
    current = current?.next;
    if (!current && i !== index - 1) return -1;
  }
  prev.next = { val, next: prev.next };
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let current = this.next;
  let prev = this;
  for (let i = 0; i < index; i++) {
    prev = current;
    current = current?.next;
    if (!current) return -1;
  }
  prev.next = current.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
