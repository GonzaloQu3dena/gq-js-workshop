# Phase 02 — Arrays & Objects (10 exercises)

## Phase objective
<p align="justify">
Master data transformations using array methods and object operations, which are the most common patterns in technical interviews. This phase focuses on functional programming concepts, efficient data manipulation, and understanding when to use different array methods and data structures like `Set` and `Map`.
</p>

## Topics covered
- `map`, `filter`, `reduce`, `find`, `some`, `every`
- Frequency counting
- Grouping operations (`groupBy`)
- Sorting and stability
- `Set` / `Map` (practical usage)
- Destructuring, spread/rest operators

## Working rules
- Implement each exercise in `exercise-XX.js`.
- Do not use external libraries.
- Add 3–5 minimal verifications at the end (`console.assert` or logs).
- Focus on data-oriented, reusable solutions.

## Exercises

### Exercise 01 — Group by category
<p align="justify">
Implement a function `groupByCategory(items)` that takes an array of objects with `name` and `category` properties. The function should normalize the `name` field using `trim()` and normalize the `category` field using `trim()` and `toLowerCase()`. Return an object where keys are normalized categories and values are arrays of normalized names. This exercise helps you practice array transformations, object manipulation, and data normalization patterns commonly used in real-world applications.
</p>

**Examples:**
- `groupByCategory([{name: " Apple ", category: " Fruit "}, {name: "Banana", category: "FRUIT"}]) -> { fruit: ["Apple", "Banana"] }`
- `groupByCategory([{name: "Car", category: "Vehicle"}, {name: "Bike", category: "Vehicle"}]) -> { vehicle: ["Car", "Bike"] }`
- `groupByCategory([]) -> {}`

### Exercise 02 — Two Sum (indices)
<p align="justify">
Implement a function `twoSum(nums, target)` that finds two numbers in the array that add up to the target value. Return the indices of these two numbers. The solution should run in **O(n)** time complexity using a map (hash table) instead of nested loops. This is a classic interview problem that tests your understanding of hash maps and efficient algorithms. Consider edge cases like no solution existing, duplicate numbers, and negative numbers.
</p>

**Examples:**
- `twoSum([2, 7, 11, 15], 9) -> [0, 1]`
- `twoSum([3, 2, 4], 6) -> [1, 2]`
- `twoSum([3, 3], 6) -> [0, 1]`
- `twoSum([1, 2, 3], 10) -> null` or `[]` (no solution)

### Exercise 03 — Unique preserving order
<p align="justify">
Implement a function `unique(nums)` that returns an array containing only unique values from the input array, preserving the original order of first occurrence. This exercise helps you practice array manipulation and understand the difference between `Set` and manual filtering. As a bonus, implement a version using `Set` and compare the approaches. Consider edge cases like empty arrays, arrays with all duplicates, and arrays with mixed types.
</p>

**Examples:**
- `unique([1, 2, 2, 3, 1, 4]) -> [1, 2, 3, 4]`
- `unique([5, 5, 5]) -> [5]`
- `unique([1, 3, 2, 3, 1]) -> [1, 3, 2]`
- `unique([]) -> []`

### Exercise 04 — Top K frequent
<p align="justify">
Implement a function `topKFrequent(nums, k)` that returns the `k` most frequent elements in the array. The result can be in any order. This exercise combines frequency counting with sorting or selection algorithms. You'll need to count frequencies, then select the top K elements. Consider edge cases like `k` being larger than the number of unique elements, arrays with all unique elements, and handling ties in frequency.
</p>

**Examples:**
- `topKFrequent([1, 1, 1, 2, 2, 3], 2) -> [1, 2]`
- `topKFrequent([1], 1) -> [1]`
- `topKFrequent([1, 2, 3, 4, 5], 3) -> [1, 2, 3]` (or any 3 elements if all have same frequency)
- `topKFrequent([4, 1, -1, 2, -1, 2, 3], 2) -> [-1, 2]`

### Exercise 05 — Flatten one level (without flat)
<p align="justify">
Implement a function `flatten1(arr)` that flattens an array by exactly one level. Do not use the built-in `flat()` method. This exercise helps you understand nested arrays and manual iteration. Consider edge cases like empty arrays, arrays with mixed types, and deeply nested structures (which should only be flattened one level).
</p>

**Examples:**
- `flatten1([1, [2, 3], [4, 5]]) -> [1, 2, 3, 4, 5]`
- `flatten1([[1, 2], [3, 4], [5]]) -> [1, 2, 3, 4, 5]`
- `flatten1([1, [2, [3, 4]], 5]) -> [1, 2, [3, 4], 5]` (only one level)
- `flatten1([]) -> []`

### Exercise 06 — Balanced parentheses validation
<p align="justify">
Implement a function `isBalanced(s)` that checks if a string containing parentheses, brackets, and braces (`()[]{}`) is balanced. A string is balanced if every opening bracket has a corresponding closing bracket in the correct order. Use a stack data structure to solve this efficiently. This is a classic stack problem that appears frequently in interviews. Consider edge cases like empty strings, strings with only opening brackets, and strings with other characters mixed in.
</p>

**Examples:**
- `isBalanced("()") -> true`
- `isBalanced("()[]{}") -> true`
- `isBalanced("(]") -> false`
- `isBalanced("([)]") -> false`
- `isBalanced("{[]}") -> true`
- `isBalanced("") -> true`

### Exercise 07 — Pipe (higher-order functions)
<p align="justify">
Implement a function `pipe(...fns)` that takes multiple functions as arguments and returns a new function. When called, this new function should apply each function from left to right, passing the result of each function as the input to the next. This exercise introduces you to functional programming concepts and function composition. Consider edge cases like no functions provided, functions that return different types, and error handling.
</p>

**Examples:**
- `pipe(x => x + 1, x => x * 2)(5) -> 12` (5+1=6, then 6*2=12)
- `pipe(x => x.toUpperCase(), x => x + "!")("hello") -> "HELLO!"`
- `pipe()(5) -> 5` (identity when no functions)

### Exercise 08 — Sum values in simple tree
<p align="justify">
Implement a function `sumTree(root)` that sums all numeric values in a simple tree structure using recursion. The tree is represented as an object with a `value` property and a `children` array (which may contain more tree nodes). This exercise helps you practice recursive thinking and tree traversal. Consider edge cases like empty trees, trees with negative numbers, and trees with non-numeric values.
</p>

**Examples:**
- `sumTree({value: 1, children: [{value: 2}, {value: 3}]}) -> 6`
- `sumTree({value: 10, children: []}) -> 10`
- `sumTree({value: 5, children: [{value: 1, children: [{value: 2}]}]}) -> 8`

### Exercise 09 — Execute promises in series
<p align="justify">
Implement a function `executeInSeries(tasks)` where `tasks` is an array of functions that return promises. Execute each task sequentially (one after another), waiting for each to complete before starting the next. Return an array of results in the same order. This exercise helps you understand promise chaining and sequential async operations. Consider edge cases like empty arrays, promise rejections, and mixed sync/async functions.
</p>

**Examples:**
- `executeInSeries([() => Promise.resolve(1), () => Promise.resolve(2)]) -> Promise<[1, 2]>`
- `executeInSeries([() => sleep(100).then(() => "a"), () => Promise.resolve("b")]) -> Promise<["a", "b"]>`

### Exercise 10 — Sliding window: maximum sum
<p align="justify">
Implement a function `maxSubarraySum(nums, k)` that finds the maximum sum of any contiguous subarray of length `k` using a sliding window technique. The solution should run in **O(n)** time complexity. This exercise introduces the sliding window pattern, which is essential for many array problems. Consider edge cases like `k` being larger than the array length, arrays with all negative numbers, and arrays with a single element.
</p>

**Examples:**
- `maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) -> 39` (sum of [4, 2, 10, 23])
- `maxSubarraySum([100, 200, 300, 400], 2) -> 700`
- `maxSubarraySum([-1, -2, -3], 2) -> -3`

## Definition of Done
- Data-oriented and reusable solutions
- Complexity aligned when specified
- Edge cases defined and tested
- Readable and consistent code
- Proper error handling where applicable
