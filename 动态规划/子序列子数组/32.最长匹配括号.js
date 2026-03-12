/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s.length <=1) return 0
    /**
     *  以i结尾的子串，其最大括号匹配长度为 dp[i]
     *  递推关系
     *  1. 如果 i 为 （ 那么 dp[i] = 0
     *  2. 如果 i 为 )
     *    (1) 如果 i-1为 （ 那么dp[i] = 2 + dp[i-2]
     *    (2) 如果 i-1 为 ) 那么 要看 i - dp[i-1] - 1 是不是 ( 如果是 dp[i] = 2 + dp[i-1] + dp[i-dp[i-1]-2]
     *    (3) 如果都不符合dp[i] = 0 
     *  3. 初始化 dp[0] = 0 dp[1] 如果 ( 则 0 如果 ) 看0 如果是( 则为2 否为0
     *  4. 顺序
     */

    const dp = new Array(s.length).fill(0)
    dp[0] = 0
    dp[1] = s[1] === '(' ? 0: s[0] === '(' ? 2 : 0
    let max = dp[1]
    for(let i=2;i<s.length;i++){
        if(s[i] === '('){
            dp[i] = 0
        }else if(s[i] === ')'){
            if(s[i-1] === '('){
                dp[i] = 2 + dp[i-2]
            }else if(s[i-dp[i-1]-1] === '('){
                dp[i] = 2 + dp[i-1] + (dp[i-dp[i-1] - 2] || 0)
            }else{
                dp[i] = 0
            }
        }

        max= Math.max(max,dp[i])
    }
    return max
};