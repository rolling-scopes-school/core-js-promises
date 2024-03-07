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
 * Returns containing the value of the first promise of a resolved or a rejected.
 *
 * @param {Array<Promise<number>>} promises
 * @return {Promise<number>}
 *
 * @example:
 * const promise1 = Promise.resolve(1)
 * const promise2 = Promise.reject(2)
 * const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 50))
 * const promise4 = new Promise((resolve) => setTimeout(() => resolve(4), 100))
 * const promise5 = new Promise((resolve) => setTimeout(() => resolve(5), 150))
 * const promise6 = new Promise((reject) => setTimeout(() => reject(6), 10))
 *
 * [promise3, promise6, promise1] => Promise fulfilled with 1
 * [promise4, promise3, promise5] => Promise fulfilled with 3
 * [promise3, promise6, promise2] => Promise rejected with 2
 * [promise3, promise4, promise6] => Promise rejected with 6
 */
function getFirstPromiseResult(/* promises */) {
  throw new Error('Not implemented');
}

/**
 * Returns an array of values if all promises completed successfully or a rejected promise if one of the source promises failed.
 *
 * @param {Array<Promise<number>>} promises
 * @return {Promise<Array<number>> }
 *
 * @example:
 * [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)] => Promise fulfilled with [1, 2, 3]
 * [Promise.resolve(1), Promise.reject(2), Promise.resolve(3)] => Promise rejected with 2
 */
function getAllOrNothing(/* promises */) {
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

/**
 * From the received array of promises creates a chain of promises, which will return the value of the last promice from the initial array
 *
 * @param {Array<Promise<number>>} promises
 * @return {Promise<number>}
 *
 * @example:
 */
function getChainPromises(/* promises */) {
  throw new Error('Not implemented');
}

/**
 * TBD
 */
function resolvePromiseHell(/* promises */) {
  throw new Error('Not implemented');
}

module.exports = {
  getPromise,
  getFirstResolvedPromiseResult,
  getFirstPromiseResult,
  getAllOrNothing,
  getAllPromisesResult,
  getChainPromises,
  resolvePromiseHell,
};
