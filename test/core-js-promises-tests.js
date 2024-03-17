const assert = require('assert');
const tasks = require('../src/core-js-promises-tasks');
const forbidden = require('../extensions/forbidden');
const utility = require('../extensions/utility');
it.optional = require('../extensions/it-optional');

describe('core-js-promises', () => {
  it.optional(
    'getPromise should return a promise object with a fulfilled result for a positive number and a rejected result if negative number',
    (done) => {
      const sourceNumbers = [
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
            isThrowed = true;
            break;
          }
        }
        if (!isThrowed) {
          done();
        }
      });

      assert.equal(
        forbidden.isCommented(tasks.getPromise),
        false,
        `Be sure to remove comments from the final solution`
      );
    },
    true
  );

  it.optional(
    'getPromiseResult should returns a promise that will return a value of success or fail',
    (done) => {
      const resolver = (number) =>
        number % 2 === 0 ? Promise.resolve() : Promise.reject();

      const sourceNumbers = [
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
        utility.getRandomNumberUtil(-10, 10),
      ];
      const promises = [];
      for (let i = 0; i < sourceNumbers.length; i += 1) {
        const promise = tasks.getPromiseResult(resolver(sourceNumbers[i]));
        assert(
          promise instanceof Promise,
          `getPromiseResult should return Promise`
        );
        promises.push(promise);
      }

      Promise.allSettled(promises).then((results) => {
        let isThrowed = false;
        for (let i = 0; i < sourceNumbers.length; i += 1) {
          const expected = sourceNumbers[i] % 2 === 0 ? 'success' : 'fail';
          if (results[i].status === 'rejected') {
            done(Error(`the returned promis was in a rejected state`));
            isThrowed = true;
            break;
          } else {
            assert.equal(expected, results[i].value);
          }
        }
        if (!isThrowed) {
          done();
        }
      });

      assert.equal(
        forbidden.isCommented(tasks.getPromiseResult),
        false,
        `Be sure to remove comments from the final solution`
      );
    },
    true
  );

  it.optional(
    'getFirstResolvedPromiseResult should returns containing the value of the first promise of a successfully resolved',
    (done) => {
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

      assert.equal(
        forbidden.isCommented(tasks.getFirstResolvedPromiseResult),
        false,
        `Be sure to remove comments from the final solution`
      );
    },
    true
  );

  it.optional(
    'getFirstPromiseResult should returns containing the value of the first promise of a resolved or a rejected',
    (done) => {
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

      assert.equal(
        forbidden.isCommented(tasks.getFirstPromiseResult),
        false,
        `Be sure to remove comments from the final solution`
      );
    },
    true
  );

  it.optional(
    'getAllOrNothing should return an array of values that are contained in the result of promises resolution',
    (done) => {
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

      assert.equal(
        forbidden.isCommented(tasks.getAllOrNothing),
        false,
        `Be sure to remove comments from the final solution`
      );
    },
    true
  );

  it.optional(
    'getAllResult should return an array of values that are contained in the result of promises resolution',
    (done) => {
      const resolver = (number) =>
        number >= 0 ? Promise.resolve(number) : Promise.reject(number);
      const sourcePromises = [];
      const resultPromises = [];
      for (let i = 0; i < 10; i += 1) {
        const number = utility.getRandomNumberUtil(-10, 10);
        sourcePromises.push(resolver(number));
        resultPromises.push(number >= 0 ? number : null);
      }

      const promise = tasks.getAllResult(sourcePromises);
      assert(promise instanceof Promise, `getAllResult should return Promise`);
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

      assert.equal(
        forbidden.isCommented(tasks.getAllResult),
        false,
        `Be sure to remove comments from the final solution`
      );
    },
    true
  );

  it.optional(
    'queuPromises should return a promise that is solved by a string sequentially added together from the results of each promis in the array',
    (done) => {
      const resolver = (number, latency) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(number), latency);
        });

      const sourcePromises = [];
      let expectedResult = '';
      const countPromise = utility.getRandomNumberUtil(10, 15);
      for (let i = 0; i < countPromise; i += 1) {
        const number = utility.getRandomNumberUtil(1, 10);
        const latency = utility.getRandomNumberUtil(0, 10);
        sourcePromises.push(resolver(number, latency));
        expectedResult += `${number}`;
      }

      const promise = tasks.queuPromises(sourcePromises);
      assert(promise instanceof Promise, `queuPromises should return Promise`);

      promise
        .then((results) => {
          assert.deepEqual(expectedResult, results);
          done();
        })
        .catch((error) => {
          if (error.code === 'ERR_ASSERTION') {
            done(error);
          } else {
            done(Error('result must be fulfilled'));
          }
        });

      assert.equal(
        forbidden.isCommented(tasks.queuPromises),
        false,
        `Be sure to remove comments from the final solution`
      );
      assert.equal(
        forbidden.isPromiseUsed(tasks.queuPromises),
        false,
        `The use of static methods of the Promise classe is not allowed`
      );
    },
    true
  );
});
