class MyPriorityQueue {
  constructor(initialValues = []) {
    this.array = [];
    this.size = 0;

    initialValues.forEach((initialValue) => {
      this.push(initialValue);
    });
  }

  push(x) {
    this.array.push(x);
    this.size++;
    this._shiftUp(this.size - 1);
  }
  pop() {
    if (this.size === 0) return void 0;
    this._swap(0, this.size - 1);
    const top = this.array.pop();
    this.size--;
    this._shiftDown(0);
    return top;
  }
  peak() {
    return this.array[0];
  }

  _swap(i, j) {
    const tmp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = tmp;
  }

  _shiftUp(i) {
    if (i === 0) return;
    let parentIndex = Math.trunc((i - 1) / 2);

    if (this.array[parentIndex] < this.array[i]) {
      /** 向上调整 */
      this._swap(parentIndex, i);
      /** 继续向上调整 */
      this._shiftUp(parentIndex);
    }
  }

  _shiftDown(i) {
    if (i > this.size - 1) return;
    let leftChildIndex = 2 * i + 1;
    let rightChildIndex = leftChildIndex + 1;

    let maxIndex = i;
    if (leftChildIndex < this.size) {
      /** 和 left 比 */
      maxIndex =
        this.array[maxIndex] > this.array[leftChildIndex]
          ? maxIndex
          : leftChildIndex;
    }
    if (rightChildIndex < this.size) {
      /** 和 right 比 */
      maxIndex =
        this.array[maxIndex] > this.array[rightChildIndex]
          ? maxIndex
          : rightChildIndex;
    }
    if (maxIndex !== i) {
      this._swap(maxIndex, i);
      this._shiftDown(maxIndex);
    }
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  /** 构造小顶堆 */
  const priorityQueue = new MyPriorityQueue(stones);

  while (priorityQueue.size > 1) {
    const stone1 = priorityQueue.pop();
    const stone2 = priorityQueue.pop();
    priorityQueue.push(Math.abs(stone1 - stone2));
  }

  return priorityQueue.pop();
};
