/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length < 2)
  let _tempArr = []
  let _res = 0, i = 0

  while(i < s.length) {
    if (_tempArr.includes(s[i])) {
      _tempArr.shift()
      continue
    } else {
      _tempArr.push(s[i])
    }
    _res = Math.max(_res, _tempArr.length)
    i++
  }

  return _res
};

console.log(lengthOfLongestSubstring('abcabcbb'))

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3