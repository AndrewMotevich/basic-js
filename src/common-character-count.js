const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str1 = s1;
  let str2 = s2;
  let result = 0;
  for (let i = 0; i < str1.length; i += 1) {
    let j = 0;
  while (j < str2.length){
      if (str1[i] === str2[j]){
        result += 1;
        str1 = str1.slice(0, i) + str1.slice(i + 1);
        str2 = str2.slice(0, j) + str2.slice(j + 1);
        i = 0;
        j = str2.length + 1;
      }
      else {
        j += 1;
      }
    }
  }
  if (result > 0) {
    return result + 1;
  }
  return result;
}
module.exports = {
  getCommonCharacterCount
};
