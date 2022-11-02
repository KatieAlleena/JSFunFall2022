/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param {array} numbers array of numbers
 * @returns {number} the highest number that was in the array
 *
 * @example highestNumber([1, 10, 2, 3, 4]) // 10
 * @example highestNumber([-1, -5, -4]) // -1
 *
 */

const highestNumber = (numbers) => {
  // WRITE YOUR ANSWER HERE
  let highestNumber = numbers[0]; // has to be first before for loop otherwise errors out.
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }
  return highestNumber;
};

console.log(highestNumber([-1, -5, -4]))
// IGNORE THIS BELOW. It is for the tests.

export default highestNumber;
