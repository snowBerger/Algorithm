var sum = function (num1, num2) {
  const len = Math.max(num1.length, num2.length)
  let arr1 = num1.split('').reverse()
  let arr2 = num2.split('').reverse()
  let res = ''
  let flag = 0

  for (let i = 0; i < len; i++) {
    let temp = +(arr1[i] || 0) + +(arr2[i] || 0) + flag
    flag = Math.floor(temp / 10)
    res += temp % 10
  }
  if (flag) res += flag
  return res.split('').reverse().join('')
}


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let arr1, arr2
  if (num1.length >= num2.length) {
    arr1 = num2.split('')
    arr2 = num1.split('')
  } else {
    arr1 = num1.split('')
    arr2 = num2.split('')
  }

  let res = []
  let value = '0'

  for (let i = arr1.length - 1; i >= 0; i--) {
    let flag = 0
    res[i] = ''
    for (let j = arr2.length - 1; j >= 0; j--) {
      let temp = arr2[j] * arr1[i] + flag
      flag = Math.floor(temp / 10)
      res[i] = temp % 10 + res[i]
    }
    res[i] += [...new Array(arr1.length - 1 - i)].map(o => 0).join('')
    if (flag) res[i] = flag + res[i]
  }

  // 汇总
  for (let i = 0; i < res.length; i++) {
    value = sum(value, res[i])
  }
  return value
};


// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
// 说明：

// num1 和 num2 的长度小于110。
// num1 和 num2 只包含数字 0-9。
// num1 和 num2 均不以零开头，除非是数字 0 本身。
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
