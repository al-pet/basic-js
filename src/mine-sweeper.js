const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let res = [];
    result.push(res);
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      count += miner(matrix, i - 1, j - 1);
      count += miner(matrix, i - 1, j);
      count += miner(matrix, i - 1, j + 1);
      count += miner(matrix, i, j - 1);
      count += miner(matrix, i, j + 1);
      count += miner(matrix, i + 1, j - 1);
      count += miner(matrix, i + 1, j);
      count += miner(matrix, i + 1, j + 1);
      result[i][j] = count;
    }
  }

  return result;
};


function miner(array, k, l) {
  let n = 0;
  if (k >= 0 && k < array.length && l >= 0 && l < array[k].length) {
    if (array[k][l]) {
      n = 1;
    }
  }
  return n;
};



module.exports = {
  minesweeper
};
