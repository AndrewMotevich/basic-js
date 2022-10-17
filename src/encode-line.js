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
function encodeLine(/* str */ str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let string = str;
  let result = []
  for (let i = 0; i < string.length; i += 1){
    if (string[i - 1] === string[i]) {
      if (typeof result[result.length - 2] === 'number') {
        result[result.length - 2] += 1;
      } else {
        result.push(string[i]);
        result[result.length - 2] = 2;
      }
      // string = string.slice(0, i) + string.slice(i + 1);
      // i -= 1;
    }
    else {
      result.push(string[i]);
    }
    debugger
  }
  return result.join('');
}
// encodeLine('aaadcddd');


module.exports = {
  encodeLine
};
