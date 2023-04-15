const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  result = String(n).split('');
  for (let i = 0; i < result.length; i++) {
    if (result[i] < result[i + 1]) {
      result.splice(i, 1);
      return Number(result.join(''));
    }
  }
  return Number(result.slice(0, -1).join(''));
}

module.exports = {
  deleteDigit
};
