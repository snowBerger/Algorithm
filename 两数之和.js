/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const _diff = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === _diff) return [i, j];
    }
  }
};

const twoSum2 = function (nums, target) {
  let tmpArr = []
  for (let i = 0; i < nums.length; i++) {
    const _diff = target - nums[i];
    if (tmpArr[_diff] !== undefined) return [tmpArr[_diff], i]
    tmpArr[nums[i]] = i;
  }
};

// const res = twoSum([1, 3, 5, 7, 9], 10);
// console.log(res);

// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
