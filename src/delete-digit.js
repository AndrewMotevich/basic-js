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
function deleteDigit(number) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const strNumber = number.toString();
  let numberArray = [];
  for (let i = 0; i < strNumber.length; i += 1) {
    numberArray.push(strNumber.slice(0, i) + strNumber.slice(i + 1))
  }
  return Math.max(...numberArray)
}

module.exports = {
  deleteDigit
};
