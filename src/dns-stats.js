const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  domains.forEach((el) => {
    let splittedDomain = el.split('.');
    let i = splittedDomain.length;
    let domain = '';
    while (i > 0) {
      domain = domain + '.' + splittedDomain[i - 1];
      if (result.hasOwnProperty(domain)) {
        result[`${domain}`] += 1;
      } else {
        result[`${domain}`] = 1;
      }
      i -= 1;
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
