# Phase 01 — Fundamentals (10 exercises)

## Phase objective
<p align="justify">
Consolidate JavaScript foundations (types, control flow, functions, and basic structures) to solve simple problems with proper validation. This phase focuses on building a solid understanding of core JavaScript concepts that are essential for technical interviews and real-world problem solving.
</p>

## Topics covered
- Variables (`let`, `const`), primitive types and coercion
- Arithmetic, comparison, and logical operators
- Conditionals (`if/else`, `switch`)
- Loops (`for`, `while`)
- Functions (declaration, expression, arrow)
- Strings and arrays (manual iteration)
- Objects: reading/writing properties
- Defensive validation and error handling

## Working rules
- Implement each exercise in `exercise-XX.js`.
- Do not use external libraries.
- Add 3–5 minimal verifications at the end (`console.assert` or logs).

## Exercises

### Exercise 01 — Sum with validation
<p align="justify">
Implement a function `sum(a, b)` that returns the sum of `a` and `b`. This exercise focuses on input validation and error handling. The function must throw an error if either `a` or `b` is not a number. Consider edge cases such as `null`, `undefined`, strings, and other non-numeric types. This is a fundamental pattern in defensive programming that you'll use throughout your JavaScript journey.
</p>

**Examples:**
- `sum(2, 3) -> 5`
- `sum("2", 3) -> Error`
- `sum(null, 5) -> Error`
- `sum(10, -3) -> 7`

### Exercise 02 — Even or odd (integer)
<p align="justify">
Implement a function `isEven(n)` that determines if a number is even. The function should return `true` if `n` is an even integer, and `false` otherwise. This exercise helps you practice type checking and mathematical operations. Consider how to handle decimal numbers, negative numbers, and edge cases like zero. The function should validate that the input is actually an integer before checking if it's even.
</p>

**Examples:**
- `isEven(10) -> true`
- `isEven(2.5) -> false`
- `isEven(-4) -> true`
- `isEven(0) -> true`

### Exercise 03 — FizzBuzz
<p align="justify">
Generate a sequence from 1 to `n` where:
- Numbers divisible by 3 are replaced with `"Fizz"`
- Numbers divisible by 5 are replaced with `"Buzz"`
- Numbers divisible by both 3 and 5 are replaced with `"FizzBuzz"`
- All other numbers remain as-is

Return an array containing strings and/or numbers. This classic interview problem tests your understanding of loops, conditionals, and the modulo operator. It's a great exercise for practicing control flow and string manipulation.
</p>

**Examples:**
- `fizzBuzz(5) -> [1, 2, "Fizz", 4, "Buzz"]`
- `fizzBuzz(15) -> [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]`

### Exercise 04 — Count vowels
<p align="justify">
Implement a function `countVowels(text)` that counts the number of vowels (a, e, i, o, u) in a given string. The function should be case-insensitive, meaning it should treat both uppercase and lowercase vowels as the same. This exercise helps you practice string iteration, character comparison, and case handling. Consider edge cases like empty strings, strings with no vowels, and strings with special characters.
</p>

**Examples:**
- `countVowels("Hello") -> 2`
- `countVowels("JavaScript") -> 3`
- `countVowels("xyz") -> 0`
- `countVowels("AEIOU") -> 5`

### Exercise 05 — Reverse string (without reverse)
<p align="justify">
Implement a function `reverse(text)` that reverses a string manually without using the built-in `reverse()` method or any array methods. This exercise focuses on manual string manipulation and helps you understand how to work with strings character by character. You'll need to iterate through the string and build a new reversed string. Consider how to handle empty strings and single-character strings.
</p>

**Examples:**
- `reverse("hello") -> "olleh"`
- `reverse("JavaScript") -> "tpircSavaJ"`
- `reverse("a") -> "a"`
- `reverse("") -> ""`

### Exercise 06 — Simple palindrome
<p align="justify">
Implement a function `isPalindrome(text)` that checks if a string is a palindrome. A palindrome reads the same forwards and backwards. The function should ignore spaces and be case-insensitive. For example, "A man a plan a canal Panama" should be considered a palindrome. This exercise combines string manipulation, normalization, and comparison logic. As a bonus, consider ignoring non-alphanumeric characters as well.
</p>

**Examples:**
- `isPalindrome("racecar") -> true`
- `isPalindrome("A man a plan a canal Panama") -> true`
- `isPalindrome("hello") -> false`
- `isPalindrome("RaceCar") -> true`

### Exercise 07 — Min and Max
<p align="justify">
Implement a function `minMax(nums)` that takes an array of numbers and returns an object with `min` and `max` properties containing the minimum and maximum values respectively. If the array is empty, the function should throw an error. This exercise helps you practice array iteration, comparison operations, and object creation. Consider edge cases like arrays with a single element, arrays with negative numbers, and arrays with duplicate values.
</p>

**Examples:**
- `minMax([1, 2, 3, 4, 5]) -> { min: 1, max: 5 }`
- `minMax([-10, 0, 100]) -> { min: -10, max: 100 }`
- `minMax([5]) -> { min: 5, max: 5 }`
- `minMax([]) -> Error`

### Exercise 08 — Sum of evens
<p align="justify">
Implement a function `sumEvens(nums)` that sums only the even numbers from an array. If the array contains non-numeric values, ignore them (document this behavior). This exercise combines array filtering, type checking, and mathematical operations. You'll need to iterate through the array, check if each value is a number, check if it's even, and accumulate the sum. Consider how to handle mixed arrays with numbers and non-numbers.
</p>

**Examples:**
- `sumEvens([1, 2, 3, 4, 5, 6]) -> 12`
- `sumEvens([2, 4, 6]) -> 12`
- `sumEvens([1, 3, 5]) -> 0`
- `sumEvens([1, "2", 3, 4, null, 6]) -> 10` (ignores non-numbers)

### Exercise 09 — Word count
<p align="justify">
Implement a function `countWords(text)` that returns an object where keys are words (case-insensitive) and values are their occurrence counts. The function should handle multiple spaces between words and normalize the text appropriately. This exercise helps you practice string splitting, normalization, and object manipulation. As a bonus, clean punctuation marks like `.,;:!?` before counting. Consider edge cases like empty strings, strings with only spaces, and strings with special characters.
</p>

**Examples:**
- `countWords("hello world hello") -> { hello: 2, world: 1 }`
- `countWords("Hello  world   HELLO") -> { hello: 2, world: 1 }`
- `countWords("one") -> { one: 1 }`
- `countWords("") -> {}`

### Exercise 10 — Range and sum
<p align="justify">
Implement a function `rangeSum(start, end)` that returns an object with two properties: `range` (an array of numbers from `start` to `end` inclusive) and `sum` (the sum of all numbers in that range). If `start` is greater than `end`, you can either throw an error or reverse the range (choose one approach and document it). This exercise combines array generation, mathematical operations, and error handling. Consider how to handle equal start and end values, negative numbers, and large ranges.
</p>

**Examples:**
- `rangeSum(1, 5) -> { range: [1, 2, 3, 4, 5], sum: 15 }`
- `rangeSum(0, 3) -> { range: [0, 1, 2, 3], sum: 6 }`
- `rangeSum(5, 5) -> { range: [5], sum: 5 }`
- `rangeSum(10, 5) -> Error or { range: [5, 6, 7, 8, 9, 10], sum: 45 }` (document your choice)

## Definition of Done
- Edge cases defined and tested
- Readable and consistent code
- No unnecessary duplication
- Proper error handling where applicable
- Clear function documentation
