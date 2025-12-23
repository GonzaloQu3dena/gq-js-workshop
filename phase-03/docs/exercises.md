# Phase 03 — Strings & Interview Patterns (10 exercises)

## Phase objective
<p align="justify">
Solve typical string problems with focus on edge cases, normalization, and complexity analysis. This phase covers common string manipulation patterns that frequently appear in technical interviews, including two-pointer techniques, sliding windows, and parsing challenges.
</p>

## Topics covered
- String normalization
- Two pointers technique
- Character frequency counting
- Substrings and sliding windows
- Basic parsing

## Working rules
- Implement each exercise in `exercise-XX.js`.
- Do not use external libraries.
- Add 3–5 minimal verifications at the end (`console.assert` or logs).
- Prefer O(n) solutions when applicable.

## Exercises

### Exercise 01 — Anagram
<p align="justify">
Implement a function `areAnagrams(a, b)` that checks if two strings are anagrams of each other. Anagrams are words or phrases formed by rearranging the letters of another. The function should ignore case differences and spaces. This exercise helps you practice character frequency counting and string normalization. Consider edge cases like empty strings, strings with different lengths, and strings with special characters.
</p>

**Examples:**
- `areAnagrams("listen", "silent") -> true`
- `areAnagrams("The Morse Code", "Here come dots") -> true`
- `areAnagrams("hello", "world") -> false`
- `areAnagrams("", "") -> true`

### Exercise 02 — First non-repeated character
<p align="justify">
Implement a function `firstNonRepeated(s)` that returns the first character in the string that appears exactly once, or `null` if no such character exists. This exercise combines frequency counting with string iteration. Consider edge cases like strings where all characters repeat, single-character strings, and strings with only repeated characters.
</p>

**Examples:**
- `firstNonRepeated("abccba") -> null`
- `firstNonRepeated("abccbad") -> "d"`
- `firstNonRepeated("aabbcc") -> null`
- `firstNonRepeated("abc") -> "a"`

### Exercise 03 — Length of last word
<p align="justify">
Implement a function `lengthOfLastWord(s)` that returns the length of the last word in a string. Words are separated by spaces. Handle trailing spaces appropriately. This exercise helps you practice string parsing and edge case handling. Consider cases with multiple trailing spaces, strings with only spaces, and single-word strings.
</p>

**Examples:**
- `lengthOfLastWord("Hello World") -> 5`
- `lengthOfLastWord("   fly me   to   the moon  ") -> 4`
- `lengthOfLastWord("luffy is still joyboy") -> 6`
- `lengthOfLastWord("a") -> 1`

### Exercise 04 — Validate strict palindrome
<p align="justify">
Implement a function `isStrictPalindrome(s)` that checks if a string is a palindrome, ignoring non-alphanumeric characters and case differences. Only letters and numbers should be considered when checking if the string reads the same forwards and backwards. This exercise combines string filtering, normalization, and comparison. Consider edge cases like strings with only special characters, empty strings after filtering, and strings with numbers.
</p>

**Examples:**
- `isStrictPalindrome("A man, a plan, a canal: Panama") -> true`
- `isStrictPalindrome("race a car") -> false`
- `isStrictPalindrome("") -> true`
- `isStrictPalindrome("No 'x' in Nixon") -> true`

### Exercise 05 — RLE compression
<p align="justify">
Implement two functions: `compressRLE(s)` that compresses a string using Run-Length Encoding (RLE) and `decompressRLE(s)` that decompresses it. RLE represents consecutive identical characters as the character followed by its count. For example, "aaabbc" compresses to "a3b2c1". This exercise helps you practice string iteration, counting, and parsing. Consider edge cases like single characters, empty strings, and strings with numbers.
</p>

**Examples:**
- `compressRLE("aaabbc") -> "a3b2c1"`
- `compressRLE("abc") -> "a1b1c1"`
- `compressRLE("") -> ""`
- `decompressRLE("a3b2c1") -> "aaabbc"`

### Exercise 06 — Longest substring without repeating characters
<p align="justify">
Implement a function `longestUniqueSubstringLen(s)` that returns the length of the longest substring without repeating characters. Use a sliding window technique to achieve O(n) time complexity. This is a classic sliding window problem that tests your ability to efficiently track character occurrences. Consider edge cases like empty strings, strings with all unique characters, and strings with all repeated characters.
</p>

**Examples:**
- `longestUniqueSubstringLen("abcabcbb") -> 3` ("abc")
- `longestUniqueSubstringLen("bbbbb") -> 1` ("b")
- `longestUniqueSubstringLen("pwwkew") -> 3` ("wke")
- `longestUniqueSubstringLen("") -> 0`

### Exercise 07 — Find pattern (without includes/indexOf)
<p align="justify">
Implement a function `findSubstring(text, pattern)` that returns the index of the first occurrence of `pattern` in `text`, or `-1` if not found. Do not use built-in methods like `includes()` or `indexOf()`. Use manual character-by-character comparison. This exercise helps you understand how string searching works under the hood. Consider edge cases like empty pattern, pattern longer than text, and multiple occurrences.
</p>

**Examples:**
- `findSubstring("hello world", "world") -> 6`
- `findSubstring("hello world", "xyz") -> -1`
- `findSubstring("ababc", "abc") -> 2`
- `findSubstring("hello", "") -> 0` or `-1` (define your behavior)

### Exercise 08 — Normalize spaces
<p align="justify">
Implement a function `normalizeSpaces(s)` that removes repeated spaces and trims leading/trailing spaces. Multiple consecutive spaces should be replaced with a single space. This exercise helps you practice string manipulation and normalization patterns commonly needed in data processing. Consider edge cases like strings with only spaces, strings with tabs or other whitespace characters, and empty strings.
</p>

**Examples:**
- `normalizeSpaces("  hello   world  ") -> "hello world"`
- `normalizeSpaces("hello    world") -> "hello world"`
- `normalizeSpaces("   ") -> ""`
- `normalizeSpaces("hello") -> "hello"`

### Exercise 09 — Sum numbers in text
<p align="justify">
Implement a function `sumNumbersInText(s)` that extracts all numbers from a string and returns their sum. Numbers can have multiple digits. This exercise combines string parsing with number extraction. You'll need to identify numeric sequences and convert them to numbers. Consider edge cases like negative numbers (if they appear with minus signs), decimal numbers, and strings with no numbers.
</p>

**Examples:**
- `sumNumbersInText("a12b3") -> 15`
- `sumNumbersInText("5hello5world5") -> 15`
- `sumNumbersInText("abc") -> 0`
- `sumNumbersInText("1a2b3c4") -> 10`

### Exercise 10 — Validate slug
<p align="justify">
Implement a function `toSlug(s)` that converts a string into a URL-friendly slug. The function should: convert to lowercase, replace spaces with hyphens, remove non-alphanumeric characters (except hyphens), and eliminate consecutive hyphens. This exercise combines multiple string transformations and is commonly needed in web development. Consider edge cases like strings with only special characters, strings with leading/trailing hyphens, and empty strings.
</p>

**Examples:**
- `toSlug("Hello World") -> "hello-world"`
- `toSlug("Hello  World!!!") -> "hello-world"`
- `toSlug("--Hello--World--") -> "hello-world"`
- `toSlug("JavaScript & TypeScript") -> "javascript-typescript"`

## Definition of Done
- Correct handling of edge cases
- Efficient solution (prefer O(n) when applicable)
- Readable and consistent code
- Proper error handling where applicable
- Clear function documentation
