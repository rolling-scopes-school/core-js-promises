/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise    *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * Returns a promise object with a fulfilled result for a positive number and a rejected result if negative number.
 * Zero is a positive number.
 *
 * @param {number} number
 * @return {Promise<number>}
 *
 * @example:
 * -1   => Promise rejected
 * 0    => Promise fulfilled
 * 1    => Promise fulfilled
 */
function getPromise(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns containing the value of the first promise of a successfully resolved.
 * If all promise is rejected, return rejected Promise.
 *
 * @param {Array<Promise<number>>} promises
 * @return {Promise<number>}
 *
 * @example:
 * [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)] => Promise fulfilled with 1
 * [Promise.reject(1), Promise.resolve(2), Promise.resolve(3)]  => Promise fulfilled with 2
 * [Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]  => Promise fulfilled with 1
 * [Promise.reject(1), Promise.reject(2), Promise.reject(3)]    => Promise rejected
 */
function getFirstResolvedPromiseResult(/* promises */) {
  throw new Error('Not implemented');
}

/**
 * Returns an array of values that are contained in the result of promises resolution.
 * If promise is rejected, place a value of null.
 *
 * @param {Array<Promise<number>>} promises
 * @return {Promise<Array<number>>}
 *
 * @example:
 * [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)] => Promise fulfilled with [1, 2, 3]
 * [Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]  => Promise fulfilled with [1, null, 3]
 */
function getAllPromisesResult(/* promises */) {
  throw new Error('Not implemented');
}

module.exports = {
  getPromise,
  getFirstResolvedPromiseResult,
  getAllPromisesResult,
};
