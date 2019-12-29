/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return ['']
  if (n === 1) return ['()']

  let res = []
  res[0] = ['none']
  res[1] = ['()']

  for (let i = 2; i < n + 1; i++) {
    let l = []

    for (let j = 0; j < i; j++) {
      let L = res[j]
      let R = res[i - j - 1]

      for (let v1 of L) {
        for (let v2 of R) {
          if (v1 === 'none') v1 = ''
          if (v2 === 'none') v2 = ''
          l.push(`(${v1})${v2}`)
        }
      }
    }
    res.push(l)
  }

  return res[n]
};

// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
