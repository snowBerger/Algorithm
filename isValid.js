/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1 || s.length % 2 !== 0) return false
  const _sArr = s.split('')
  let _stack = []
  for (let i = 0, l = _sArr.length; i < l; i++) {
    const _curr = _sArr[i]
    if (_curr === '(' || _curr === '[' || _curr === '{') {
      _stack.push(_curr)
    } else {
      const _tmp = _stack.slice(-1)[0]
      if ( _tmp === '(' && _curr === ')' || _tmp === '[' && _curr === ']' || _tmp === '{' && _curr === '}') {
        _stack.pop()
      } else {
        return false
      }
    }
  }
  return !_stack.length
};

// console.log(isValid("()[]{}"))

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true