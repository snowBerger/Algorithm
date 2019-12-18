/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  const l = nums.length
  for (let i = 1; i < l; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[i - count] = nums[i]
    } else {
      count++
    }
  }
  return l - count
};

console.log(removeDuplicates[1, 1, 2, 3, 4, 4, 5, 7, 8, 8, 8, 8, 9])