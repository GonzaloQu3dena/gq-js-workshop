/**
 * Implement a function `isEven(n)` that determines if a number is even. The function should return `true` if `n` is an even integer,
 * and `false` otherwise. This exercise helps you practice type checking and mathematical operations. Consider how to handle decimal
 * numbers, negative numbers, and edge cases like zero. The function should validate that the input is actually an integer before checking if it's even.
 */

/**
 * Determines if a number is even.
 * @param {number} n - The number to check.
 * @returns {boolean} - `true` if the number is even, `false` otherwise.
 * @throws {Error} - If the argument is not a number or an integer.
 * @throws {Error} - If the argument is not a positive integer.
 */
function isEven(n) {
  if (typeof n != "number") {
    throw new Error("The argument must be a number");
  }
  if (!Number.isInteger(n)) {
    throw new Error("The argument must be an integer");
  }
  return n % 2 === 0;
}

console.log(isEven(0)); 
console.log(isEven(-4));
console.log(isEven(10));
console.log(isEven("10")); // <- Should throw an error
console.log(isEven(2.5));  // <- Should throw an error 
