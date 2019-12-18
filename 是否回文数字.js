/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let _charArr = ('' + x).split('')
  let _mdNum = Math.floor(_charArr.length / 2);
  for (let i = 0, l = _mdNum; i < l; i++) {
    if (_charArr[i] !== _charArr[_charArr.length - i - 1]) return false
  }
  return true
};

console.log(isPalindrome(121))