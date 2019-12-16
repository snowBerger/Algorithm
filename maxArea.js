/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let _res = 0
  for (let i = 0, l = height.length - 1; i < l; i++) {
    for (let j = 1, m = height.length; j < m; j++) {
      _res = Math.max(_res, (j - i) * Math.min(height[i], height[j]))
    }
  }
  return _res
};

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let _res = 0, l = 0, r = height.length - 1
  while (l < r) {
    _res = Math.max(_res, (r - l) * Math.min(height[l], height[r]))
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return _res
};

// 示例:

// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49