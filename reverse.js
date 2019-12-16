/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let _res = ('' + Math.abs(x)).split('').reverse().join('')
  if (_res.length > 10 || _res.length === 10 && _res > (x > 0 ? Math.pow(2, 31) - 1 : Math.pow(2, 31))) return 0
  return x >= 0 ? +_res : 0 - _res
};

console.log(reverse(-1563847412))