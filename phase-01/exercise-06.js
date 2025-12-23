/**
 * Implement a function `isPalindrome(text)` that checks if a string is a palindrome. A palindrome reads the same forwards and backwards. The function
 * should ignore spaces and be case-insensitive. For example, "A man a plan a canal Panama" should be considered a palindrome. This exercise combines 
 * string manipulation, normalization, and comparison logic. As a bonus, consider ignoring non-alphanumeric characters as well.
 */

/**
 * Checks if a string is a palindrome.
 * @param {string} text - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * @throws {Error} If the argument is not a string.
 */
function isPalindrome(text) {
  if (typeof text != "string") {
    throw new Error("Argument must be a string");
  }

  const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedText = cleanedText.split("").reverse().join("");
  return cleanedText === reversedText;
}

console.log(isPalindrome("racecar"));                     // <- Should return true
console.log(isPalindrome("A man a plan a canal Panama")); // <- Should return true
console.log(isPalindrome("hello"));                       // <- Should return false
console.log(isPalindrome("RaceCar"));                     // <- Should return true