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
  // throw new NotImplementedError('Not implemented');
  if (!(arr instanceof Array)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let result = [...arr];
  if (arr[0] === '--double-prev' || arr[0] === '--discard-prev'){
    result.shift();
  }
  if (arr[arr.length - 1] === '--double-next' || arr[arr.length - 1] === '--discard-next'){
    result.pop();
  }

  for (let i = 0; i < arr.length; i += 1){
    //first
    if (result[i] == '--double-next'){
      if (typeof(result[i+1]) == 'number'){
        result = [].concat(result.slice(0, i-1), result[i-1], result[i+1], result.slice(i+1));
      }
    }
    //second
    if (result[i] == '--double-prev'){
      if (typeof(result[i-1]) == 'number'){
        result = [].concat(result.slice(0, i-1), result[i-1], result[i-1], result.slice(i+1));
      }
    }
    //third
    if (result[i] == '--discard-next'){

      if (result[i + 2] === '--double-prev') {
        result  = [].concat(result.slice(0, result.indexOf('--double-prev')), result.slice(result.indexOf('--double-prev') + 1));
      }
      if (result[i + 2] === '--discard-prev') {
        result  = [].concat(result.slice(0, result.indexOf('--discard-prev')), result.slice(result.indexOf('--discard-prev') + 1));
      }

      if (typeof(result[i+1]) == 'number'){
        result = [].concat(result.slice(0, i-1), result[i-1], result.slice(i+2));
        i = i - 1;
      }
    }
    //fourth
    if (result[i] == '--discard-prev'){
      if (typeof(result[i-1]) == 'number'){
        result = [].concat(result.slice(0, i-1), result.slice(i+1));
        i = i - 1;
      }
    }
  }
  return result;
}

module.exports = {
  transform
};
