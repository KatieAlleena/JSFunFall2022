/**
 * @param {number} subtotal
 * @param {number} tax
 * @returns {number} the total cost, including the tax
 */
const calculateTotal = (subtotal, tax) => {
  return subtotal * tax + subtotal;
};

/**
 * You are paying your bill. You have a subtotal of $50.00 and tax is 2%.
 *
 * Create a variable called "total". The variable "total" should be equal to the result of "calculateTotal" (which is 60).
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let total = calculateTotal(50,.2)

console.log(total)
// if we want 60 as the answer, this is 20% rather than 2% tax. It would be 51 with 2% tax instead.