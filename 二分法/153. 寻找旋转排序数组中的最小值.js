/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    /** 如何找分界点？
     *  nums[0] < nums[mid] 分界点在右边
     *  nums[len] > nums[mid] 分界点在左边
     * 
     *  分界点是个低点 /_ 
     *  nums[mid-1]>  nums[mid]
     */

    let left =0,right=nums.length-1
    while(left <= right){
        const mid = Math.trunc((left + right)/2)
        if(nums[mid-1] >= nums[mid]) return nums[mid]
        else if(nums[0] <= nums[mid]){left = mid+1}
        else{
            right=mid-1
        }
    }
    // 没有分割点
    return nums[0]
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length ===0) return null
    let left =0,right = nums.length-1

    while(left <= right){
        const mid = Math.trunc((left + right)/2)
        if(nums[mid-1] > nums[mid]){
            return nums[mid]
        }else if(nums[0] <= nums[mid]){
            left = mid+1
        }else{
            right = mid - 1
        }
    }

    return nums[0]
};