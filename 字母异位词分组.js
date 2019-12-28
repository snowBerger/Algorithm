/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let arr = {}

  for (let i = 0, l = strs.length; i < l; i++) {
    let sortStr = strs[i].split('').sort().join('')
    if (!arr[sortStr]) arr[sortStr] = []
    arr[sortStr].push(strs[i])
  }

  let res = []
  for (let key in arr) {
    res.push(arr[key])
  }
  return res
};


// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
