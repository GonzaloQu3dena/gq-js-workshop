/**
 * Implement a function `reverse(text)` that reverses a string manually without using the built-in `reverse()` method or any array methods. This exercise
 * focuses on manual string manipulation and helps you understand how to work with strings character by character. You'll need to iterate through the string
 * and build a new reversed string. Consider how to handle empty strings and single-character strings.
 */

/**
 * Reverses a string manually without using the built-in `reverse()` method or any array methods.
 * @param {string} text - The string to reverse.
 * @returns {string} The reversed string.
 * @throws {Error} If the argument is not a string.
 */
function reverse(text) {
  if (typeof text != "string") {
    throw new Error("Argument must be a string");
  }

  if (text.length === 0) {
    return "";
  }

  if (text.length === 1) {
    return text;
  }

  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed;
}

console.log(reverse("hello"));      // <- Should return 'olleh'
console.log(reverse("JavaScript")); // <- Should return 'tpircSavaJ'
console.log(reverse("a"));          // <- Should return 'a'
console.log(reverse(""));           // <- Should return ''
