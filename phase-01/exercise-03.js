/**
 * Generate a sequence from 1 to `n` where:
 * - Numbers divisible by 3 are replaced with `"Fizz"`
 * - Numbers divisible by 5 are replaced with `"Buzz"`
 * - Numbers divisible by both 3 and 5 are replaced with `"FizzBuzz"`
 * - All other numbers remain as-is
 *
 * Return an array containing strings and/or numbers. This classic interview problem tests your understanding of loops, conditionals, and
 * the modulo operator. It's a great exercise for practicing control flow and string manipulation.
 */

/**
 * Generates a sequence from 1 to `n` where:
 * - Numbers divisible by 3 are replaced with `"Fizz"`
 * - Numbers divisible by 5 are replaced with `"Buzz"`
 * - Numbers divisible by both 3 and 5 are replaced with `"FizzBuzz"`
 * - All other numbers remain as-is
 *
 * Returns an array containing strings and/or numbers.
 *
 * @param {number} n - The number to generate the sequence for.
 * @returns {Array} - An array containing strings and/or numbers.
 * @throws {Error} - If the argument is not a number or an integer.
 * @throws {Error} - If the argument is not a positive integer.
 */
function fizzBuzz(n) {
  if (typeof n != "number") {
    throw new Error("The argument must be a number");
  }
  if (!Number.isInteger(n)) {
    throw new Error("The argument must be an integer");
  }
  if (n <= 0) {
    throw new Error("The argument must be a positive integer");
  }

  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(fizzBuzz(5));
console.log(fizzBuzz(15));