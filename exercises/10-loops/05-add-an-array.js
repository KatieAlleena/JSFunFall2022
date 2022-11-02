/**
 * Add all of the numbers in an array and return the sum.
 * @param {array} numbers an array of numbers
 * @returns {number} the sum of all the numbers in an array
 *
 * @example add([1, 2, 3]); // 6
 */

const add = (numbers) => {
  // WRITE YOUR ANSWER HERE
  let added = 0;
  for (let i = 0; i < numbers.length; i++) {
    added += numbers[i];
  }
  return added;
};
console.log(add([1, 2, 3]))
// IGNORE THIS BELOW. It is for the tests.

export default add;
