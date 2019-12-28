/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (!nums.length) return [[]]

  let [num, ...rest] = nums
  let restSubSets = subsets(rest)
  return restSubSets.map(item => [...item, num]).concat(restSubSets)
};

var subsets = function (nums) {
  let res = [[]]

  for (let i = 0, l = nums.length; i < l; i++) {
    for (let j = 0, len = res.length; j < len; j++) {
      res.push(res[j].concat([nums[i]]))
    }
  }
  return res
}

var subsets = function(nums) {
  if (!nums || !nums.length) return []
  nums = nums.sort((a, b) => a - b)
  let res = []

  function DFS (start, tempArr) {
    res.push(tempArr)
    for (let i = start, l = nums.length; i < l; i++) {
      DFS(i + 1, tempArr.concat([nums[i]]))
    }
  }

  DFS(0, [])

  return res
}

// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

// 示例:

// 输入: nums = [1,2,3]
// 输出:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]