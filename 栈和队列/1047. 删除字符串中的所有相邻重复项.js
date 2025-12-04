// 天天爱消除？
// 啥时候用stack啊 你要回溯查看前一个遍历过的元素时
// 遍历 ，，， 每次到一个元素看一下peak 如果一样 就pop 合并删除，如果不一样就push

// 类比 有效括号啊 
// 一个stack 每次push之前都先pop一下 看看前一个元素和当前元素是否相等 不相等就push当前元素 相等就弹出prev

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []
    for(let i = 0 ; i<s.length ; i++){
        if(stack.length === 0 || stack[stack.length-1]!==s[i]){
            stack.push(s[i])
        }else{
            stack.pop()
        }
    }
    return stack.join('')
};

