/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (!nums.length) return 0
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  let cTarget = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < len; i++) {
    let L = i + 1
    let R = len - 1

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (Math.abs(target - sum) < Math.abs(target - cTarget)) {
        cTarget = sum
      }
      if (sum > target) {
        R--
      } else if (sum < target) {
        L++
      } else {
        return cTarget
      }
    }
  }
  return cTarget
};

// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
