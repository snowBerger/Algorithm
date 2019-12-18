/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let res = []
  for (let i = 0; i < n; i++) res[i] = []

  let l = 0, t = 0, r = n - 1, b = n - 1
  let num = 1
  while (num <= n * n) {
    for (let i = l; i <= r; i++) res[t][i] = num++
    t++

    for (let i = t; i <= b; i++) res[i][r] = num++
    r--

    for (let i = r; i >= l; i--) res[b][i] = num++
    b--

    for (let i = b; i >= t; i--) res[i][l] = num++
    l++
  }

  return res
};

// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]