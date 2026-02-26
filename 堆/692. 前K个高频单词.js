/**
 * 大顶堆
 */
class MyPriorityQueue {
  /**
   * ctor
   * @param {*} array 包含 sortIndex value
   */
  constructor(array) {
    this.data = [];
    this.size = 0;
    if (Array.isArray(array)) {
      for (const item of array) {
        this.size++;
        this.push(item);
      }
    }
  }

  peak() {
    return this.data[0]?.value;
  }

  /**
   *
   * @param {*} elem 包含 sortIndex value
   */
  push(elem) {
    this.data.push(elem);
    this._shiftUp(this.size);
    this.size++;
  }

  pop() {
    if (this.size === 0) return void 0;
    this._swap(0, this.size - 1);
    const popElem = this.data.pop();
    this.size--;
    this._shiftDown(0);
    return popElem.value;
  }

  _moreThan(i, j) {
    if (this.data[i].sortIndex === this.data[j].sortIndex) {
      return this.data[i].value < this.data[j].value;
    }
    return this.data[i].sortIndex > this.data[j].sortIndex;
  }
  _shiftDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = leftChildIndex + 1;

    let bigestIndex = index;
    if (
      leftChildIndex < this.size &&this._moreThan(leftChildIndex,bigestIndex)
    ) {
      bigestIndex = leftChildIndex;
    }
    if (
      rightChildIndex < this.size &&this._moreThan(rightChildIndex,bigestIndex)
    ) {
      bigestIndex = rightChildIndex;
    }

    if (bigestIndex !== index) {
      this._swap(bigestIndex, index);
      this._shiftDown(bigestIndex);
    }
  }

  _shiftUp(index) {
    let parentIndex = Math.trunc(index-1 / 2);
    if (this._moreThan(index,parentIndex)) {
      this._swap(parentIndex, index);

      this._shiftUp(parentIndex);
    }
  }

  _swap(i, j) {
    const tmp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = tmp;
  }
}

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  /** 统计 */
  const map = new Map();
  const pq = new MyPriorityQueue();
  for (const word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  map.forEach((feq, word) => {
    pq.push({
      sortIndex: feq,
      value: word,
    });
  });

  const results = [];
  for (let i = 0; i < k; i++) {
    results.push(pq.pop());
  }

  return results;
};