/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const keys = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let res = ''

  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      num -= values[i]
      res += keys[i]
    }
  }
  return res
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