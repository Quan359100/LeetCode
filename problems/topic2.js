// Two Pointers Pattern (Trong trường hợp mảng đã sắp xếp)
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};
module.exports = isPalindrome;