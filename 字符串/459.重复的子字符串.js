/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const doubleS = s+s
    const subDoubleS = doubleS.slice(1,-1)
    return subDoubleS.includes(s)
};


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return (s + s).slice(1,-1).includes(s)
};