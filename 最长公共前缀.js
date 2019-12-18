var hasElem = function (strs, index) {
  const _elem = strs[0].substring(index, index + 1)
  if (!_elem) return false
  for (let i = 0, l = strs.length; i < l; i++) {
    if (strs[i].substring(index, index + 1) !== _elem) {
      return false
    }
  }
  return true
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  let _length = 0
  while(hasElem(strs, _length)) {
    _length++;
  }
  return strs[0].substring(0, _length);
};



// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。