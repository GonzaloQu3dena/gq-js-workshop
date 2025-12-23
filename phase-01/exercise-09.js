/**
 * Implement a function `countWords(text)` that returns an object where keys are words (case-insensitive) and values are their occurrence counts. The
 * function should handle multiple spaces between words and normalize the text appropriately. This exercise helps you practice string splitting,
 * normalization, and object manipulation. As a bonus, clean punctuation marks like `.,;:!?` before counting. Consider edge cases like empty strings,
 * strings with only spaces, and strings with special characters.
 */

/**
 * Counts the number of words in a string.
 * @param {string} text - The string to count the words of.
 * @returns {Object} An object with the words as keys and the number of occurrences as values.
 * @throws {Error} If the argument is not a string.
 */
function countWords(text) {
  if (typeof text != "string") {
    throw new Error("Argument must be a string");
  }

  if (text.length === 0) {
    return {};
  }

  const words = text.toLowerCase().split(/\s+/);
  const wordCount = {};
  for (const word of words) {
    if (word.length === 0) {
      continue;
    }
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  return wordCount;
}

console.log(countWords("hello world hello"));     // <- Should return { hello: 2, world: 1 }
console.log(countWords("Hello  world   HELLO"));  // <- Should return { hello: 2, world: 1 }
console.log(countWords("one"));                   // <- Should return { one: 1 }
console.log(countWords(""));                      // <- Should return {}