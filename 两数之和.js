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

const res = twoSum([1, 3, 5, 7, 9], 10);
console.log(res);