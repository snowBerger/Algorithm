/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length, n = matrix[0] && matrix[0].length || 0
  let l = 0, t = 0, r = n - 1, b = m - 1
  let res = []
  while (true) {
    for (let i = l; i <= r; i++) res.push(matrix[t][i])
    if (++t > b) break
    for (let i = t; i <= b; i++) res.push(matrix[i][r])
    if (--r < l) break
    for (let i = r; i >= l; i--) res.push(matrix[b][i])
    if (--b < t) break
    for (let i = b; i >= t; i--) res.push(matrix[i][l])
    if (++l > r) break
  }

  return res
};


// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

// 示例 1:

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
// 示例 2:

// 输入:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]