var maxSubArray = function (nums) {
  let sum = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
   if(sum + nums[i] <  nums[i]){
    sum =  nums[i]
   }else{
    sum = sum + nums[i]
   }

   max= Math.max(max,sum)
  }
  return max
};
