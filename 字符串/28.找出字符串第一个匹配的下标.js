/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const next = getNext(needle)
    let i =0
    let j = 0
    while(i<haystack.length && j < needle.length){
        if(haystack[i] === needle[j]){
            i++;
            j++;
            continue
        }else{
            if( j === 0){
                i++
            }else{
                j = next[j-1]
            }
        }
    }
    return j === needle.length ? i - j: -1
};

/** 求 Next 数组 
 *  next 数组 定义 以 i 元素结尾的最长相等真前后缀长度
 *  aabaaf
 *  010120
 *  Next[0] 一定是0
 */
var getNext = (s) => {
    const next = new Array(s.length).fill(0)

    let j = 0 // 最大公共真前缀后一个元素 一开始为 ""
    let i = 1 // 要处理的元素 0默认为0

    while(i < s.length){
        // 如果i j 不一样 向前找 找到 0 或者一样为止
        while(j>0&&s[j]!==s[i]){
            // 找前一个元素的最大公共真子串长度
            j = next[j-1]
        }

        // 查看 i j是否相等 相等就能扩展
        if(s[i] === s[j]){
            j++
        }

        next[i] = j
        i++ // 下一个元素
    }

    return next
}