/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return -1;
  if (nums.length <= 3) return nums.indexOf(target);
  let L = 0, R = nums.length - 1

  while (L <= R) {
    let mid = (L + R) >> 1

    if (nums[mid] === target) {
      return mid
    }


    if (nums[L] <= nums[mid]) {
      // 左侧有序
      if (target >= nums[L] && target < nums[mid]) {
        R = mid - 1
      } else {
        L = mid + 1
      }
    } else {
      // 右侧有序
      if (target > nums[mid] && target <= nums[R]) {
        L = mid + 1
      } else {
        R = mid - 1
      }
    }
  }

  return -1
};

// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

// 你可以假设数组中不存在重复的元素。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 示例 1:

// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:

// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1