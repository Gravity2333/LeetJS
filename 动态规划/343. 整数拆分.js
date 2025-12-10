// 注意 回溯会超时
function multArr(arr){
    return arr.reduce((prev,curr)=>prev*curr,1)
}
/** 回溯方法 （超时）
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n,currentResult=[],conext={max: 0}) {
    if(n===0){
        if(currentResult.length == 1)return
        const maybeMax = multArr(currentResult)
        if(maybeMax > conext.max){
            conext.max= maybeMax
        }
    }else{
        for(let i=1;i<=n;i++){
            integerBreak(n-i,[...currentResult,i],conext)
        }
    }
    return conext.max
};

/** 
 * dp[i] 表示数字 i 被拆分成的最大值
 * 比如 6 可以拆分为 1 5 , 2 4 , 3 3 那么1 5的情况下，还要看 5 是不是能继续拆分 那么就需要把1*5 和 1* dp[5] 比较
 * dp[i] = for(1->i) max(i*i-j,i*dp[i-j]) 2 <= n <= 58
 * 初始化 dp[0] = 0 dp[1] = 1 dp[2] = 2
 * 
 *  拆分成 j i-j 和 拆分成 j 并且 继续拆分j的可能性比较
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1] = 0
    for(let i=2;i<=n;i++){
        let max = 0
        for(let j = 1;j < i;j++){
            const maybeMax = Math.max(j*(i-j),j*dp[i-j]) // 拆分成 j i-j 和 拆分成 j 并且 继续拆分j的可能性比较
            if(maybeMax > max){
                max = maybeMax
            }
        }
        dp[i] = max
    }

    return dp[n]
};