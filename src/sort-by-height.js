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
function sortByHeight(/* arr */ arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // return arr.sort((a, b) => {
  //   if (a === undefined || b === undefined) {
  //     return 0;
  //   }
    // return a - b;
  // })
  let array = new Array(arr.length);
  for (let i = 0; i< arr.length; i+= 1){
    if(arr[i] === -1) {
      array[i] = -1;
    }
  }
  arr.sort((a,b) => {return a-b});
  for (let i = 0; i< arr.length; i+= 1){
    if(arr[i] === -1) {
      arr.shift();
      i -= 1;
    }
    debugger
  }
  for (let i = 0; i< array.length; i+= 1) {
    if (array[i] === undefined){
      array[i] = arr.shift();
    }
  }
  return array;
}
module.exports = {
  sortByHeight
};