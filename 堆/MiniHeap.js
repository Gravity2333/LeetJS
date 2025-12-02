class MiniHeap {
    constructor(init = [], compare = (a, b) => a - b) {
      this.data = [];
      this.compare = compare;
      this.size = 0;
      init.forEach((elem) => this.push(elem));
    }
  
    push(elem) {
      const lastPos = this.size++;
      this.data[lastPos] = elem;
      this._shiftUp(lastPos);
    }
  
    peak() {
      return this.data[0];
    }
  
    pop() {
      if (this.size === 0) return;
  
      const lastPos = this.size-- - 1;
      const popItem = this.data[0]
      const lastElem = this.data.pop();
      if (lastPos > 0) {
        this.data[0] = lastElem;
        this._shiftDown(0);
      }
      return popItem;
    }
  
    _swap(i, j) {
      const tmp = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = tmp;
    }
  
    _shiftUp(i) {
      let currentIndex = i;
      while (currentIndex > 0) {
        const parentIndex = Math.trunc((currentIndex - 1) / 2);
        if (this.compare(this.data[parentIndex], this.data[currentIndex]) > 0) {
          this._swap(parentIndex, currentIndex);
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    _shiftDown(i) {
      const n = this.size;
      let currentIndex = i;
  
      while (true) {
        const left = currentIndex * 2 + 1;
        const right = left + 1;
        let smallest = currentIndex;
  
        // 左子更小？
        if (left < n && this.compare(this.data[left], this.data[smallest]) < 0) {
          smallest = left;
        }
  
        // 右子更小？
        if (right < n && this.compare(this.data[right], this.data[smallest]) < 0) {
          smallest = right;
        }
  
        // 如果最小的不是当前节点，则交换
        if (smallest !== currentIndex) {
          this._swap(currentIndex, smallest);
          currentIndex = smallest;
        } else {
          break;
        }
      }
    }
  }