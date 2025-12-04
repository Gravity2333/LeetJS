// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

 

// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]
 

// 提示：

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

// 思路。 单调队列： 每次有新的元素进来时，如果前面的元素有比自己小的就都弹出 直到找到一个大于自己的停止
// 需要实现 pop push getMaxValue

// 单调队列可以保证，其内部的元素一直是递减排序的
// 每次push的时候，会把更小的元素都pop 
// 可以保证队列的最大值 一直在 0 的位置

// pop 需要传入要删除的元素x 如果x等于对头元素删除，否则不操作!

// 所以 这个题目就很简单了，构造单调队列 每次移动都取头部值 并且弹出窗口外的元素!

class DescQueue{
    /** 实现递减队列 */
    constructor(){
        this.queue = []
    }

    push(x){
       while(this.queue.length > 0){
        /** 去掉所有更小的元素 */
        const last = this.queue.pop()
        if(last >= x){
            this.queue.push(last)
            break;
        }
       }
      this.queue.push(x)
    }

    pop(x){
        if(this.queue?.[0] === x){
            this.queue.shift()
        }
    }

    getMax(){
        return this.queue?.[0] 
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const descQueue = new DescQueue()

    /** 把窗口内元素加入 */
    for(let i=0;i<k;i++){
        descQueue.push(nums[i])
    }

    const results = []
    /** 移动窗口 */
    for(let i=0;i<=nums.length-k;i++){
        results.push(descQueue.getMax())
        descQueue.pop(nums[i])
        descQueue.push(nums[i+k])
    }

    return results
};