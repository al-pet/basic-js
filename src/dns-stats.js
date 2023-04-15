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

  const result = {};

  domains = domains.map((e) => e.split(".").reverse());
  domains.forEach(e => {
    let domain = '';
    e.forEach(e => {
      domain += '.' + e;
      result[domain] = result[domain] ? result[domain] + 1 : 1;
    });
  });

  return result;

}

module.exports = {
  getDNSStats
};
