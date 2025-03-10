const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let array = arr.reduce((a, e, i) => {
    e === -1 ? a.push(i) : false;
    return a;
  }, []);
  arr = arr.filter((e) => (e === -1 ? false : e)).sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    arr.splice(array[i], 0, -1);
  }

  return arr;

}

module.exports = {
  sortByHeight
};
