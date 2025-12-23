/**
 * Implement a function `sumEvens(nums)` that sums only the even numbers from an array. If the array contains non-numeric values, ignore them (document 
 * this behavior). This exercise combines array filtering, type checking, and mathematical operations. You'll need to iterate through the array, check if 
 * each value is a number, check if it's even, and accumulate the sum. Consider how to handle mixed arrays with numbers and non-numbers.
*/

/**
 * Sums only the even numbers from an array.
 * @param {number[]} nums - The array of numbers to sum the even numbers of.
 * @returns {number} The sum of the even numbers.
 * @throws {Error} If the array is empty.
 */
function sumEvens(nums) {
  if (nums.length === 0) {
    throw new Error("Array must not be empty");
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number') {
      continue;
    }
    if (nums[i] % 2 !== 0) {
      continue;
    }
    sum += nums[i];
  }
  return sum;
}

console.log(sumEvens([1, 2, 3, 4, 5, 6]));      // <- Should return 12
console.log(sumEvens([2, 4, 6]));               // <- Should return 12
console.log(sumEvens([1, 3, 5]));               // <- Should return 0
console.log(sumEvens([1, "2", 3, 4, null, 6])); // <- Should return 10