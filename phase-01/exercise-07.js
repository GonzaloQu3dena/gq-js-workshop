/**
 * Implement a function `minMax(nums)` that takes an array of numbers and returns an object with `min` and `max` properties containing the minimum and
 * maximum values respectively. If the array is empty, the function should throw an error. This exercise helps you practice array iteration, comparison
 * operations, and object creation. Consider edge cases like arrays with a single element, arrays with negative numbers, and arrays with duplicate values.
 */

/**
 * Takes an array of numbers and returns an object with `min` and `max` properties containing the minimum and maximum values respectively.
 * @param {number[]} nums - The array of numbers to find the minimum and maximum values of.
 * @returns {Object} An object with `min` and `max` properties containing the minimum and maximum values respectively.
 * @throws {Error} If the array is empty.
 */
function minMax(nums) {
  if (nums.length === 0) {
    throw new Error("Array must not be empty");
  }

  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return { min, max };
}

console.log(minMax([1, 2, 3, 4, 5])); // <- Should return { min: 1, max: 5 }
