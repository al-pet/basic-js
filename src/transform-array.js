const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (Array.isArray(arr)) {
    return arr.reduce((a, e, i, arr) => {
      switch (e) {
        case "--double-next":
          a.push(arr[i + 1]);
          break;
        case "--discard-prev":
          a.splice(i - 1, 1);
          break;
        case "--discard-next":
          arr.splice(i + 1, 1);
          break;
        case "--double-prev":
          a.splice(i, 0, a[i - 1]);
          break;
        case e:
          a.push(e);
          break;
      }
      return a;
    }, [])
      .filter((e) => e);
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

}

module.exports = {
  transform
};
