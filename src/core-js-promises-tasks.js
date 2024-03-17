/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise    *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * Returns a Promise that is fulfilled with the input number if the number is non-negative (including zero),
 * and rejected if the number is negative.
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
 * It returns a promise that is always fulfilled with a string value: 'success' if the original promise was fulfilled,
 * and 'fail' if the original promise was rejected
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
 * Takes an array of promises and returns a promise that resolves with the value of the first successfully resolved promise From the given array.
 * If all promises in the array are rejected, it returns a promise that is rejected.
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
 * Attempts to resolve all provided promises. If all promises resolve successfully, it returns a promise that resolves with an array of their values.
 * If any of the promises are rejected, it returns a promise that is immediately rejected with the reason of the first promise that was rejected.
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
 * Processes an array of promises and returns a promise that resolves with an array of their results.
 * Each element in the returned array corresponds to the resolved value of the promise at the same index in the input array.
 * If a promise is rejected, the corresponding value in the output array will be null.
 *
 * @param {Array<Promise<number>>} promises
 * @return {Promise<Array<number | null>>}
 *
 * @example:
 * [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)] => Promise fulfilled with [1, 2, 3]
 * [Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]  => Promise fulfilled with [1, null, 3]
 */
function getAllResult(/* promises */) {
  throw new Error('Not implemented');
}

/**
 * Takes an array of promises and processes them sequentially, concatenating each resolved value into a single string.
 * The resolution order is determined by the order of the promises in the array, not by their resolution time.
 * Static methods of the Promise class are not to be used, necessitating a manual chaining approach to ensure sequential processing.
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
