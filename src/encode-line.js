const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let result = '';
  let prevChar = str[0] ? str[0] : '';
  let count = 0;
  str = str.split("");

  str.forEach(e => {
    if (e === prevChar) {
      count++;
    } else {
      result += count + prevChar;
      result = result.replace('1', '');
      count = 1;
      prevChar = e;
    }
  });
  result += count + prevChar;
  result = result.replace('1', '');
  result = result.replace('0', '');

  return result;
}
module.exports = {
  encodeLine
};
