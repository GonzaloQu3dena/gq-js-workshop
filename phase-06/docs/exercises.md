# Phase 06 — Quality: Light Testing & Refactoring (10 exercises)

## Phase objective
<p align="justify">
Simulate interview conditions: write clean, testable, and refactored solutions with small testing utilities without frameworks. This phase focuses on code quality, maintainability, and the ability to write production-ready code that can be easily tested and understood. These skills are highly valued in technical interviews and real-world development.
</p>

## Topics covered
- Pure function design
- Edge cases and minimal tests
- Refactoring and readability
- Immutability (when appropriate)
- Complexity and trade-offs

## Working rules
- Implement each exercise in `exercise-XX.js`.
- Do not use external libraries.
- Add 3–5 minimal verifications at the end (`console.assert` or logs).
- Solutions should be refactored and explainable out loud.

## Exercises

### Exercise 01 — Mini assert
<p align="justify">
Implement `assertEqual(actual, expected, msg)` and `assertDeepEqual(a, b, msg)` functions for basic testing. `assertEqual` should compare primitive values, while `assertDeepEqual` should perform deep equality checks for objects and arrays. These utilities form the foundation of a simple testing framework. Consider edge cases like `NaN`, `null`, `undefined`, nested objects, and circular references.
</p>

**Examples:**
- `assertEqual(1 + 1, 2, "addition works")` (passes)
- `assertEqual(1, 2, "should fail")` (throws error)
- `assertDeepEqual({a: 1}, {a: 1}, "objects equal")` (passes)
- `assertDeepEqual([1, 2], [1, 2], "arrays equal")` (passes)

### Exercise 02 — Minimal runner
<p align="justify">
Implement `test(name, fn)` and `run()` functions that execute tests and report results. The `test` function should register a test case, and `run()` should execute all registered tests and print a summary of passed/failed tests. This exercise helps you understand how testing frameworks work internally. Consider features like test isolation, error handling, and clear output formatting.
</p>

**Examples:**
- `test("addition", () => assertEqual(2 + 2, 4)); run()` (executes and reports)
- `test("failing test", () => assertEqual(1, 2)); run()` (reports failure)

### Exercise 03 — Refactor: avoid duplication
<p align="justify">
Given a repetitive code snippet (create your own example), refactor it by extracting common functionality into reusable functions. This exercise focuses on the DRY (Don't Repeat Yourself) principle and improving code maintainability. Identify patterns, extract functions, and demonstrate how refactoring improves readability and reduces bugs. Document the before and after.
</p>

**Examples:**
- Refactor repeated validation logic into a `validateInput` function
- Extract common data transformation patterns into helper functions
- Consolidate similar conditional logic

### Exercise 04 — Immutability in transformations
<p align="justify">
Implement a function `updateUser(users, id, patch)` that updates a user in an array without mutating the original array. Return a new array with the updated user. This exercise emphasizes immutability, which is crucial in React, Redux, and functional programming. Consider edge cases like user not found, empty arrays, and nested object updates.
</p>

**Examples:**
- `updateUser([{id: 1, name: "Alice"}], 1, {name: "Bob"}) -> [{id: 1, name: "Bob"}]`
- Original array remains unchanged
- `updateUser([{id: 1}], 2, {name: "Bob"}) -> [{id: 1}]` (user not found)

### Exercise 05 — Normalize data (mini ETL)
<p align="justify">
Implement a function `normalizeUsers(raw)` that performs ETL (Extract, Transform, Load) operations: clean strings (trim, normalize), convert types (strings to numbers where appropriate), and remove invalid fields. This exercise simulates real-world data processing tasks. Consider edge cases like missing fields, invalid data types, and data that needs type coercion.
</p>

**Examples:**
- `normalizeUsers([{name: "  Alice  ", age: "25"}]) -> [{name: "Alice", age: 25}]`
- `normalizeUsers([{name: "", age: "invalid"}]) -> []` (removes invalid)

### Exercise 06 — Robust comparator
<p align="justify">
Implement a function `compareBy(...keys)` that returns a comparator function for sorting by multiple fields. The comparator should support sorting by multiple keys in order of priority. This is useful for complex sorting requirements. Consider edge cases like missing keys, different data types, and descending order.
</p>

**Examples:**
- `sortBy([{a: 1, b: 2}, {a: 1, b: 1}], compareBy("a", "b"))` (sorts by a, then b)
- `compareBy("age", "name")` (sorts by age first, then name)

### Exercise 07 — Validation by simple schema
<p align="justify">
Implement a function `validate(obj, schema)` where `schema` defines required and optional field types. The function should return `{ valid: true }` or `{ valid: false, errors: [...] }`. This exercise helps you understand schema validation patterns used in libraries like Joi or Yup. Consider edge cases like nested objects, arrays, and custom validation rules.
</p>

**Examples:**
- `validate({name: "Alice", age: 25}, {name: "string", age: "number"}) -> { valid: true }`
- `validate({name: 123}, {name: "string"}) -> { valid: false, errors: [...] }`

### Exercise 08 — Generate edge cases
<p align="justify">
Implement a function `generateEdgeCases()` for a chosen problem (e.g., string manipulation) and use it to test your solution. The function should return an array of test cases covering edge cases like empty inputs, null/undefined, extreme values, and boundary conditions. This exercise trains you to think comprehensively about test coverage.
</p>

**Examples:**
- `generateEdgeCases()` for string functions might return: `["", null, undefined, "   ", "a", "very long string..."]`
- Use these cases to test your string manipulation functions

### Exercise 09 — Simple performance measurement
<p align="justify">
Implement a function `measure(fn, n)` that executes function `fn` `n` times and returns the total execution time. This utility helps you understand performance characteristics and identify bottlenecks. Consider measuring both synchronous and asynchronous functions, and think about what metrics are useful (total time, average time, etc.).
</p>

**Examples:**
- `measure(() => sumArray([1,2,3]), 1000) -> { total: 5.2, average: 0.0052 }` (in milliseconds)
- `measure(async () => await fetchData(), 10)` (for async functions)

### Exercise 10 — Interview checklist (self-evaluation)
<p align="justify">
Create a function `evaluateSolution(meta)` that validates you've met interview criteria: edge cases covered, appropriate complexity, clear naming, no unnecessary mutations. This is a meta-exercise to train good habits. The function should check your code against a checklist and provide feedback. This helps you develop self-review skills that are valuable in interviews and code reviews.
</p>

**Examples:**
- `evaluateSolution({hasEdgeCases: true, complexity: "O(n)", clearNames: true}) -> { passed: true, feedback: "Good job!" }`
- `evaluateSolution({hasEdgeCases: false, ...}) -> { passed: false, feedback: "Missing edge cases" }`

## Definition of Done
- Minimal tests run with Node
- Refactored and explainable solutions
- Edge cases defined and tested
- Readable and consistent code
- Proper error handling where applicable
- Clear function documentation
- Immutability where appropriate
