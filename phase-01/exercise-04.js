/**
 * Implement a function `countVowels(text)` that counts the number of vowels (a, e, i, o, u) in a given string. The function should 
 * be case-insensitive, meaning it should treat both uppercase and lowercase vowels as the same. This exercise helps you practice 
 * string iteration, character comparison, and case handling. Consider edge cases like empty strings, strings with no vowels, 
 * and strings with special characters.
 */

/**
 * Counts the number of vowels (a, e, i, o, u) in a given string.
 * @param {string} text - The string to count the vowels in.
 * @returns {count} The number of vowels in the string.
 * @throws {Error} If the argument is not a string.
 */
function countVowels(text) {
  if (typeof text != 'string') {
    throw new Error('Argument must be a string');
  }

  if (text.length === 0) {
    return 0;
  }

  let count = 0;
  const vowels = 'aeiouAEIOU';

  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels('Hello'));      // <- Should return 2
console.log(countVowels('JavaScript')); // <- Should return 3
console.log(countVowels('xyz'));        // <- Should return 0
console.log(countVowels('AEIOU'));      // <- Should return 5