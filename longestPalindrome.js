/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  if (s.length < 2) return s
  let _maxStr = s[0]
  const arr = s.split('')

  for (let i = 0, l = arr.length; i < l; i++) {
    for (let j = i + 1, m = arr.length; j < m; j++) {
      const _temp = arr.slice(i, j + 1)
      const length = Math.ceil(j / 2)
      const _left = _temp.slice(0, length).join('')
      const _right = _temp.slice(-length).reverse().join('')
      if (_left === _right) {
        const _key = _temp.join('')
        _maxStr = _key.length > _maxStr.length ? _key : _maxStr
      }
    }
  }

  return _maxStr
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  if (s.length < 2) return s
  let _start = 0, _end = 0;

  for (let i = 0, l = s.length; i < l; i++) {
    const len = Math.max(getPalindLength(s, i, i), getPalindLength(s, i, i + 1))
    if (len > _end - _start) {
      _start = Math.ceil(i - (len - 1) / 2)
      _end = Math.floor(i + len / 2)
    }
  }

  return s.substring(_start, _end + 1)
};

/**
 * 
 * @param {*} s 
 * @param {*} i 
 * @param {*} j 
 */
const getPalindLength = (s, i, j) => {
  let left = i, right = j
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return right - left - 1
}

console.log(longestPalindrome("babad"))

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案

// 示例 2：

// 输入: "cbbd"
// 输出: "bb"