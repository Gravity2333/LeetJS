// 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

 

// 示例 1 ：

// 输入：nums = [2,2,1]

// 输出：1

// 示例 2 ：

// 输入：nums = [4,1,2,1,2]

// 输出：4

// 示例 3 ：

// 输入：nums = [1]

// 输出：1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const set = new Set()
    for(const num of nums){
        if(set.has(num)){
            set.delete(num)
        }else{
            set.add(num)
        }
    }

    return set.values().next().value
};


/**
 * 
 * 方法2 异或 ！
 * 异或 可以交换 一个数出现偶数次数 异或之后为0 
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = nums[0]
    for(let i=1;i<nums.length;i++){
       result ^= nums[i]
    }

    return result
};