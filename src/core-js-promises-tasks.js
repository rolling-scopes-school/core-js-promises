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
 * -1   => promise that will be rejected
 * 0    => promise that will be fulfilled
 * 1    => promise that will be fulfilled
 */
function getPromise(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns a promise that will always fulfilled and return a value of success or fail.
 * If the original promis is fulfilled, the value 'success' will be returned in fulfilled promise.
 * If the original promis is rejected, the value 'fail' will be returned in fulfilled promise.
 *
 * @param {Promise} source
 * @return {Promise<string>}
 *
 * @example:
 * Promise.resolve('success') => promise that will be fulfilled with 'success' value
 * Promise.reject('fail')     => promise that will be fulfilled with 'fail' value
 */
function getPromiseResult(/* source */) {
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
function getAllResult(/* promises */) {
  throw new Error('Not implemented');
}

/**
 * Return a promise that is solved by a string sequentially added together from the results of each promis in the array.
 * In this task, the use of static methods of the Promise classe is not allowed.
 *
 * @param {Array<Promise<number>>} promises
 * @return {Promise<string>}
 *
 * @example:
 * const promise1 = Promise.resolve(10)
 * const promise2 = Promise.resolve(20)
 * const promise3 = Promise.resolve(30)
 * const promise4 = new Promise((resolve) => setTimeout(() => resolve(40), 10))
 *
 * [promise1, promise3, promise2] => Promise.resolved('103020')
 * [promise1, promise4, promise3] => Promise.resolved('104030')
 * [promise1, promise4, promise3, promise2] => Promise.resolved('10403020')
 */
function queuPromises(/* promises */) {
  throw new Error('Not implemented');
}

module.exports = {
  getPromise,
  getPromiseResult,
  getFirstResolvedPromiseResult,
  getFirstPromiseResult,
  getAllOrNothing,
  getAllResult,
  queuPromises,
};
