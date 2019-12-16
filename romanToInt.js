/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let _res = 0
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const _tmpArr = s.split('')
  for (let i = 0, l = _tmpArr.length; i < l; i++) {
    const _curr = _tmpArr[i]
    const _next = _tmpArr[i + 1]
    if (map[_curr] < map[_next]) _res -= map[_curr]
    else _res += map[_curr]
  }

  return _res
};

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900

// 输入: "III"
// 输出: 3

// 输入: "IV"
// 输出: 4

// 输入: "IX"
// 输出: 9

// 输入: "LVIII"
// 输出: 58
// 解释: L = 50, V= 5, III = 3

// 输入: "MCMXCIV"
// 输出: 1994
// 解释: M = 1000, CM = 900, XC = 90, IV = 4