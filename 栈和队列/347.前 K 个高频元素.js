class PriorityQueue1 {
  constructor(compare = (a, b) => a - b) {
    this.array = [];
    this.compare = compare;
    this.size = 0;
  }

  _swap(i, j) {
    const tmp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = tmp;
  }

  push(x, priority) {
    const element = {
      data: x,
      priority,
    };
    this.array.push(element);
    this.size++;
    this._shiftUp(this.size - 1);
  }

  pop() {
    if (this.size === 0) return;
    this._swap(0, this.size - 1);
    const result = this.array.pop();
    this.size--;
    this._shiftDown(0);
    return result?.data;
  }

  _shiftUp(i) {
    const parentIndex = Math.trunc((i - 1)/ 2);
    if (
      this.compare(this.array[parentIndex]?.priority, this.array[i]?.priority) >
      0
    ) {
      this._swap(parentIndex, i);
      this._shiftUp(parentIndex);
    }
  }

  _shiftDown(i) {
    let leftChildIndex = 2 * i + 1;
    let rightChildIndex = leftChildIndex + 1;

    let minIndex = i;
    if (
      leftChildIndex < this.size &&
      this.compare(
        this.array[leftChildIndex]?.priority,
        this.array[minIndex]?.priority
      ) < 0
    ) {
      minIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.size &&
      this.compare(
        this.array[rightChildIndex]?.priority,
        this.array[minIndex]?.priority
      ) < 0
    ) {
      minIndex = rightChildIndex;
    }

    if (i !== minIndex) {
      this._swap(minIndex, i);
      this._shiftDown(minIndex);
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const priorityQueue = new PriorityQueue1((a, b) => b - a);
  const map = new Map();
  /** 统计数量 */
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  map.entries().forEach(([key, value]) => {
    priorityQueue.push(key, value);
  });

  const results = [];
  for (let i = 0; i < k; i++) {
    results.push(priorityQueue.pop());
  }

  return results;
};