# Phase 04 — Algorithms & Data Structures (10 exercises)

## Phase objective
<p align="justify">
Practice core interview data structures and algorithms: hashing, stacks, queues, recursion, and sorting. This phase focuses on implementing fundamental data structures from scratch and applying algorithmic techniques that are essential for technical interviews. Understanding these concepts deeply will help you solve more complex problems efficiently.
</p>

## Topics covered
- Hash maps / sets
- Stack / queue
- Recursion
- Binary search
- Sorting and comparators
- Complexity analysis (basic concepts)

## Working rules
- Implement each exercise in `exercise-XX.js`.
- Do not use external libraries.
- Add 3–5 minimal verifications at the end (`console.assert` or logs).
- Avoid O(n) operations inside loops when not appropriate.

## Exercises

### Exercise 01 — Implement Stack
<p align="justify">
Create a class or object `Stack` that implements a stack data structure with the following methods: `push(item)` to add an item, `pop()` to remove and return the top item, `peek()` to view the top item without removing it, `isEmpty()` to check if the stack is empty, and `size()` to get the number of items. This exercise helps you understand the Last-In-First-Out (LIFO) principle and is fundamental for many algorithm problems. Consider edge cases like popping from an empty stack and peeking at an empty stack.
</p>

**Examples:**
- `const stack = new Stack(); stack.push(1); stack.push(2); stack.pop() -> 2`
- `stack.peek() -> 1`
- `stack.isEmpty() -> false`
- `stack.size() -> 1`

### Exercise 02 — Implement Queue
<p align="justify">
Create a `Queue` class or object with the following methods: `enqueue(item)` to add an item, `dequeue()` to remove and return the front item, `peek()` to view the front item without removing it, `isEmpty()` to check if the queue is empty, and `size()` to get the number of items. Avoid using `shift()` for efficiency—implement it using indices to achieve O(1) dequeue operations. This exercise helps you understand the First-In-First-Out (FIFO) principle and efficient array manipulation.
</p>

**Examples:**
- `const queue = new Queue(); queue.enqueue(1); queue.enqueue(2); queue.dequeue() -> 1`
- `queue.peek() -> 2`
- `queue.isEmpty() -> false`
- `queue.size() -> 1`

### Exercise 03 — Binary Search
<p align="justify">
Implement a function `binarySearch(sortedNums, target)` that performs binary search on a sorted array and returns the index of the target, or `-1` if not found. Binary search is a fundamental algorithm that runs in O(log n) time by repeatedly dividing the search space in half. This exercise helps you understand divide-and-conquer algorithms. Consider edge cases like empty arrays, target not found, and arrays with duplicate values (define which index to return).
</p>

**Examples:**
- `binarySearch([1, 2, 3, 4, 5], 3) -> 2`
- `binarySearch([1, 2, 3, 4, 5], 6) -> -1`
- `binarySearch([], 1) -> -1`
- `binarySearch([1, 3, 5, 7, 9], 5) -> 2`

### Exercise 04 — Merge two sorted arrays
<p align="justify">
Implement a function `mergeSorted(a, b)` that merges two sorted arrays into a single sorted array. The function should run in O(n + m) time where n and m are the lengths of the input arrays. This exercise helps you practice the merge step of merge sort and two-pointer techniques. Consider edge cases like empty arrays, arrays of different lengths, and arrays with duplicate values.
</p>

**Examples:**
- `mergeSorted([1, 3, 5], [2, 4, 6]) -> [1, 2, 3, 4, 5, 6]`
- `mergeSorted([1, 2, 3], [4, 5, 6]) -> [1, 2, 3, 4, 5, 6]`
- `mergeSorted([], [1, 2]) -> [1, 2]`
- `mergeSorted([1, 2, 2, 3], [2, 4]) -> [1, 2, 2, 2, 3, 4]`

### Exercise 05 — Sort by key (stable if possible)
<p align="justify">
Implement a function `sortBy(people, key)` that sorts an array of objects by a specified key using a comparator function. If possible, make the sort stable (preserve the relative order of equal elements). This exercise helps you understand custom sorting and comparator functions, which are essential for complex data manipulation. Consider edge cases like missing keys, different data types, and sorting in descending order.
</p>

**Examples:**
- `sortBy([{name: "Bob", age: 30}, {name: "Alice", age: 25}], "age") -> [{name: "Alice", age: 25}, {name: "Bob", age: 30}]`
- `sortBy([{x: 3}, {x: 1}, {x: 2}], "x") -> [{x: 1}, {x: 2}, {x: 3}]`

### Exercise 06 — Detect cycle (tortoise-hare) in simulated linked list
<p align="justify">
Given a node structure `{ value, next }` representing a linked list, implement a function `hasCycle(head)` that detects if the list contains a cycle using Floyd's cycle-finding algorithm (tortoise and hare). This algorithm uses two pointers moving at different speeds and runs in O(n) time with O(1) space. Consider edge cases like empty lists, single-node lists, and lists with cycles at different positions.
</p>

**Examples:**
- `hasCycle({value: 1, next: {value: 2, next: null}}) -> false`
- `hasCycle(createCyclicList()) -> true` (where the list loops back)

### Exercise 07 — Min Stack
<p align="justify">
Design a `MinStack` class that supports all standard stack operations plus `getMin()` which retrieves the minimum element in O(1) time. All operations should maintain O(1) time complexity. This exercise tests your ability to design efficient data structures by maintaining auxiliary information. Consider edge cases like getting the minimum from an empty stack and handling duplicate minimum values.
</p>

**Examples:**
- `const minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3); minStack.getMin() -> -3`
- `minStack.pop(); minStack.getMin() -> -2`

### Exercise 08 — Evaluate Reverse Polish Notation (RPN)
<p align="justify">
Implement a function `evalRPN(tokens)` that evaluates an arithmetic expression in Reverse Polish Notation. RPN is a mathematical notation where operators follow their operands. Use a stack to evaluate the expression. This exercise combines stack usage with arithmetic operations and is a classic interview problem. Consider edge cases like division by zero, invalid expressions, and single-number expressions.
</p>

**Examples:**
- `evalRPN(["2", "1", "+", "3", "*"]) -> 9` (equivalent to ((2 + 1) * 3))
- `evalRPN(["4", "13", "5", "/", "+"]) -> 6` (equivalent to (4 + (13 / 5)))
- `evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]) -> 22`

### Exercise 09 — Generate permutations (recursion/backtracking)
<p align="justify">
Implement a function `permutations(nums)` that generates all permutations of an array of numbers using recursion or backtracking. This exercise helps you understand recursive thinking and backtracking algorithms, which are essential for combinatorial problems. Consider edge cases like empty arrays, single-element arrays, and arrays with duplicate values (decide whether to include duplicates or filter them).
</p>

**Examples:**
- `permutations([1, 2, 3]) -> [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]`
- `permutations([1]) -> [[1]]`
- `permutations([]) -> [[]]`

### Exercise 10 — Quickselect (k-th smallest)
<p align="justify">
Implement a function `kthSmallest(nums, k)` that finds the k-th smallest element in an unsorted array without fully sorting it. Use the Quickselect algorithm, which has an average time complexity of O(n). This exercise introduces you to selection algorithms and partitioning techniques. Consider edge cases like k being out of bounds, arrays with duplicates, and single-element arrays.
</p>

**Examples:**
- `kthSmallest([3, 2, 1, 5, 6, 4], 2) -> 2` (2nd smallest)
- `kthSmallest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4) -> 3` (4th smallest)
- `kthSmallest([1], 1) -> 1`

## Definition of Done
- Correct and interview-justifiable implementations
- Avoid O(n) operations inside loops when not appropriate
- Edge cases defined and tested
- Readable and consistent code
- Proper error handling where applicable
- Clear function documentation
