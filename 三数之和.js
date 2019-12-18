/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  const length = nums.length
  if (!nums || length < 3) return res

  nums.sort((a, b) => a - b)

  for (i = 0; i < length; i++) {
    if (nums[i] > 0) break
    if (nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = length - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]

      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        L++
        R--
      } else if (sum > 0) {
        R--
      } else if (sum < 0) {
        L++
      }
    }
  }

  return res
};


// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]