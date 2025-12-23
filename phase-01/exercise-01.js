/**
 * Implement a function `sum(a, b)` that returns the sum of `a` and `b`. This exercise focuses on input validation and error handling. The
 * function must throw an error if either `a` or `b` is not a number. Consider edge cases such as `null`, `undefined`, strings, and other
 * non-numeric types. This is a fundamental pattern in defensive programming that you'll use throughout your JavaScript journey.
 */

/**
 * Returns the sum of `a` and `b`.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of `a` and `b`.
 * @throws {Error} - If either `a` or `b` is not a number.
 */
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

console.log(sum(1, 2));         
console.log(sum('1', 2));       // <- Should throw an error
console.log(sum(1, '2'));       // <- Should throw an error
console.log(sum(null, 2));      // <- Should throw an error
console.log(sum(undefined, 2)); // <- Should throw an error