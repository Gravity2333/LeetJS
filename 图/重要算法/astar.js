        // PriorityQueue
        class PriorityQueue {
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
                const popItem = this.data[0];
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
                    if (
                        right < n &&
                        this.compare(this.data[right], this.data[smallest]) < 0
                    ) {
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

        const moves = [
            [-1, 0],
            [0, -1],
            [1, 0],
            [0, 1],
        ];

        function initGrid(N) {
            return Array.from({ length: N }, () => new Array(N).fill(Infinity));
        }

        // 计算曼哈顿距离
        function countPredictDist(from, to) {
            return Math.abs(from[0] - to[0]) + Math.abs(from[1] - to[1]);
        }

        // 是否有效
        function isValid(pos) {
            return pos[0] >= 0 && pos[0] < 100 && pos[1] >= 0 && pos[1] < 100;
        }

        function astar(from, to) {
            // 100 行列 格子
            const grid = initGrid(100);

            grid[from[0]][from[1]] = 0;

            const queue = new PriorityQueue([], (a, b) => a.steps - b.steps);

            // 开始点
            queue.push({
                pos: from,
                steps: 0,
            });

            while (queue.size > 0) {
                const peak = queue.pop();
                /** 当前位置 */
                const currPos = peak.pos;
                /** 当前step */
                const currSteps = peak.steps;
                if (currPos[0] === to[0] && currPos[1] === to[1]) break;
                for (const move of moves) {
                    /** 下一个节点位置 */
                    const nextPos = [currPos[0] + move[0], currPos[1] + move[1]];
                    if (!isValid(nextPos)) continue
                    /** 预测距离 */
                    const prediceDist = countPredictDist(nextPos, to);
                    /** rankVal */
                    const guideValue = prediceDist + currSteps + 1;
                    /** 设置距离 */
                    if (currSteps + 1 < grid[nextPos[0]][nextPos[1]]) {
                        grid[nextPos[0]][nextPos[1]] = currSteps + 1;
                        /** 加入 queue */
                        queue.push({
                            pos: nextPos,
                            steps: guideValue,
                        });
                    }
                }
            }
            return [grid[to[0]][to[1]], grid];
        }