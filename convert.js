/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) return s
  const sArr = s.split('')
  let _index = 0
  let flag = true
  let res = []

  for (let i = 0, l = sArr.length; i < l; i++) {
    if (!res[_index]) res[_index] = ''
    res[_index] += sArr[i]
    // 反转标记位
    if (_index + 1 === numRows) flag = false
    else if (_index === 0) flag = true
    if (flag) _index++
    else _index--
  }
  return res.join('')
};

// 示例 1:

// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:

// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G