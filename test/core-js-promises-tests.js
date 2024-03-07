const assert = require('assert');
const tasks = require('../src/core-js-promises-tasks');
const forbidden = require('../extensions/forbidden');
const utility = require('../extensions/utility');
it.optional = require('../extensions/it-optional');

describe('core-js-promises', () => {
  it.optional(
    'getPromise should return a promise object with a fulfilled result for a positive number and a rejected result if negative number',
    (done) => {
      assert.equal(
        forbidden.isCommented(tasks.getPromise),
        false,
        `Be sure to remove comments from the final solution`
      );

      const sourceNumbers = [
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
      ];
      const promises = [];
      for (let i = 0; i < sourceNumbers.length; i += 1) {
        const promise = tasks.getPromise(sourceNumbers[i]);
        assert(promise instanceof Promise, `getPromise should return Promise`);
        promises.push(promise);
      }

      Promise.allSettled(promises).then((results) => {
        let isThrowed = false;
        for (let i = 0; i < sourceNumbers.length; i += 1) {
          if (sourceNumbers[i] >= 0 && results[i].status === 'rejected') {
            done(
              Error(
                `${sourceNumbers[i]} is great or equal than zero and the promis must fulfilled`
              )
            );
            isThrowed = true;
            break;
          } else if (
            sourceNumbers[i] < 0 &&
            results[i].status === 'fulfilled'
          ) {
            done(
              Error(
                `${sourceNumbers[i]} is less than zero and the promis must rejected`
              )
            );
            break;
          }
        }
        if (!isThrowed) {
          done();
        }
      });
    },
    true
  );

  it.optional(
    'getFirstResolvedPromiseResult should returns containing the value of the first promise of a successfully resolved',
    (done) => {
      assert.equal(
        forbidden.isCommented(tasks.getFirstResolvedPromiseResult),
        false,
        `Be sure to remove comments from the final solution`
      );

      const resolver = (number) =>
        number >= 0 ? Promise.resolve(number) : Promise.reject(number);
      const sourcePromises = [];
      let expectedResult = null;
      for (let i = 0; i < 10; i += 1) {
        const number = utility.getRandomNumberUtil(-10, 10);
        sourcePromises.push(resolver(number));
        if (expectedResult === null && number >= 0) {
          expectedResult = number;
        }
      }

      const promise = tasks.getFirstResolvedPromiseResult(sourcePromises);
      assert(
        promise instanceof Promise,
        `getFirstResolvedPromiseResult should return Promise`
      );
      promise
        .then((result) => {
          assert.equal(expectedResult, result);
          done();
        })
        .catch((error) => {
          if (typeof error === 'undefined' && expectedResult === null) {
            done();
          } else {
            throw new Error(error);
          }
        })
        .catch((error) => {
          if (error.code === 'ERR_ASSERTION') {
            done(error);
          } else {
            done(Error(`result must be fulfilled with ${expectedResult}`));
          }
        });
    },
    true
  );

  it.optional(
    'getFirstPromiseResult should returns containing the value of the first promise of a resolved or a rejected',
    (done) => {
      assert.equal(
        forbidden.isCommented(tasks.getFirstPromiseResult),
        false,
        `Be sure to remove comments from the final solution`
      );

      const resolver = (number, latency) =>
        number % 2 === 0
          ? new Promise((resolve) => {
              setTimeout(() => resolve(number), latency);
            })
          : new Promise((reject) => {
              setTimeout(() => reject(number), latency);
            });

      const sourcePromises = [];
      let expectedResult = null;
      let minLatency = 10;
      for (let i = 1; i <= 10; i += 1) {
        const latency = utility.getRandomNumberUtil(0, 10);
        sourcePromises.push(resolver(i, latency * 10));
        if (minLatency > latency) {
          expectedResult = i;
          minLatency = latency;
        }
      }

      const promise = tasks.getFirstPromiseResult(sourcePromises);
      assert(
        promise instanceof Promise,
        `getFirstPromiseResult should return Promise`
      );
      promise
        .then((result) => {
          assert.equal(expectedResult, result);
          done();
        })
        .catch((error) => {
          done(error);
        });
    },
    true
  );

  it.optional(
    'getAllOrNothing should return an array of values that are contained in the result of promises resolution',
    (done) => {
      assert.equal(
        forbidden.isCommented(tasks.getAllOrNothing),
        false,
        `Be sure to remove comments from the final solution`
      );

      const resolver = (number) =>
        number !== 0 ? Promise.resolve(number) : Promise.reject(number);
      const sourcePromises = [];
      const resultPromises = [];
      let failResult = null;
      for (let i = 0; i < 10; i += 1) {
        const number = utility.getRandomNumberUtil(0, 5);
        sourcePromises.push(resolver(number));
        if (number !== 0) {
          resultPromises.push(number);
        } else {
          failResult = number;
        }
      }

      const promise = tasks.getAllOrNothing(sourcePromises);
      assert(
        promise instanceof Promise,
        `getAllOrNothing should return Promise`
      );
      promise
        .then((results) => {
          assert.deepEqual(resultPromises, results);
          done();
        })
        .catch((error) => {
          if (typeof error === 'number' && error === failResult) {
            done();
          } else {
            throw new Error(error);
          }
        })
        .catch((error) => {
          if (error.code === 'ERR_ASSERTION') {
            done(error);
          } else {
            done(Error(`result must be rejected with ${failResult}`));
          }
        });
    },
    true
  );

  it.optional(
    'getAllPromisesResult should return an array of values that are contained in the result of promises resolution',
    (done) => {
      assert.equal(
        forbidden.isCommented(tasks.getAllPromisesResult),
        false,
        `Be sure to remove comments from the final solution`
      );

      const resolver = (number) =>
        number >= 0 ? Promise.resolve(number) : Promise.reject(number);
      const sourcePromises = [];
      const resultPromises = [];
      for (let i = 0; i < 10; i += 1) {
        const number = utility.getRandomNumberUtil(-10, 10);
        sourcePromises.push(resolver(number));
        resultPromises.push(number >= 0 ? number : null);
      }

      const promise = tasks.getAllPromisesResult(sourcePromises);
      assert(
        promise instanceof Promise,
        `getAllPromisesResult should return Promise`
      );
      promise
        .then((results) => {
          assert.deepEqual(resultPromises, results);
          done();
        })
        .catch((error) => {
          if (error.code === 'ERR_ASSERTION') {
            done(error);
          } else {
            done(Error('result must be fulfilled'));
          }
        });
    },
    true
  );
});
