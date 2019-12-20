var leftBound = function (nums, target) {
  if (!nums.length) return -1
  let l = 0, r = nums.length - 1

  while (l <= r) {
    let mid = (l + r) / 2

    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      if (mid === 0 || nums[mid - 1] !== target) {
        return mid
      } else {
        r = mid - 1
      }
    }
  }
  return -1
}

var rightBound = function (nums, target) {
  if (!nums.length) return -1
  let l = 0, r = nums.length - 1

  while (l <= r) {
    let mid = (l + r) / 2

    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        return mid
      } else {
        l = mid + 1
      }
    }
  }
  if (l === 0) return -1
  return nums[l - 1] === target ? (l - 1) : -1
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [leftBound(nums, target), rightBound(nums, target)]
};

// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 如果数组中不存在目标值，返回 [-1, -1]。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]