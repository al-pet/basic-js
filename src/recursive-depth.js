const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, res = [], n = 1) {
    res.push(n);
    arr.forEach((e) => {
      if (Array.isArray(e)) {
        this.calculateDepth(e, res, ++n);
        n--;
      }
    });
    return Math.max(...res);
  }

}


// calculateDepth(arr, res = [], n = 1) {
//   let n;
//   arr.forEach((e) => {
//     if (Array.isArray(e)) {
//       this.calculateDepth(e, res, ++n);
//       n--;
//     }
//   });
//   return Math.max(...res);
// }




module.exports = {
  DepthCalculator
};
