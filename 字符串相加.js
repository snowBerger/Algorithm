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
