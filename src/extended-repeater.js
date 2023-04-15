const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let result = '';

  if (options.addition === undefined)
    options.addition = "";
  if (options.separator === undefined)
    options.separator = "+";
  if (options.additionSeparator === undefined)
    options.additionSeparator = "|";

  result += options.addition + options.additionSeparator;
  result = str + result.repeat(options.additionRepeatTimes - 1) + options.addition;
  result = (result + options.separator).repeat(options.repeatTimes - 1) + result;

  return result;
}

module.exports = {
  repeater
};
