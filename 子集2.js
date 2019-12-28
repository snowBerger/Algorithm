/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (!nums || !nums.length) return [[]]
  nums = nums.sort((a, b) => a - b)
  let res = []

  function DFS(start, tempArr) {
    res.push(tempArr)

    for (let i = start, l = nums.length; i < l; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue
      DFS(i + 1, tempArr.concat([nums[i]]))
    }
  }

  DFS(0, [])
  return res
};


// 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

// 示例:

// 输入: [1,2,2]
// 输出:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]