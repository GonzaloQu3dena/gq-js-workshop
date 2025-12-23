/**
 * Implement a function `rangeSum(start, end)` that returns an object with two properties: `range` (an array of numbers from `start`
 * to `end` inclusive) and `sum` (the sum of all numbers in that range). If `start` is greater than `end`, you can either throw an
 * error or reverse the range (choose one approach and document it). This exercise combines array generation, mathematical operations,
 * and error handling. Consider how to handle equal start and end values, negative numbers, and large ranges.
 */

/**
 * Returns an object with two properties: `range` (an array of numbers from `start` to `end` inclusive) and `sum` (the sum of all numbers in that range).
 * @param {number} start - The start of the range.
 * @param {number} end - The end of the range.
 * @returns {Object} An object with the range and sum.
 * @throws {Error} If the arguments are not numbers.
 */
function rangeSum(start, end) {
  if (typeof start != "number" || typeof end != "number") {
    throw new Error("Arguments must be numbers");
  }

  if (start === end) {
    return {
      range: [start],
      sum: start,
    };
  }

  if (start > end) {
    const range = Array.from({ length: start - end + 1 }, (_, i) => start - i);
    return {
      range: range,
      sum: range.reduce((acc, curr) => acc + curr, 0),
    };
  }

  const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return {
    range: range,
    sum: range.reduce((acc, curr) => acc + curr, 0),
  };
}

console.log(rangeSum(1, 5));  // <- Should return { range: [1, 2, 3, 4, 5], sum: 15 }
console.log(rangeSum(0, 3));  // <- Should return { range: [0, 1, 2, 3], sum: 6 }
console.log(rangeSum(5, 5));  // <- Should return { range: [5], sum: 5 }
console.log(rangeSum(10, 5)); // <- Should return { range: [5, 6, 7, 8, 9, 10], sum: 45 }
