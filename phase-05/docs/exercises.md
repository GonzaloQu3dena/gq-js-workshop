# Phase 05 — Asynchronous & APIs (Node) (10 exercises)

## Phase objective
<p align="justify">
Master promises, `async/await`, concurrency control, and common patterns (retry, timeout) that are very frequent in backend/frontend interviews. This phase focuses on asynchronous programming in JavaScript, which is crucial for modern web development and Node.js applications. Understanding these patterns will help you write robust, production-ready code.
</p>

## Topics covered
- Promises and `async/await`
- Limited concurrency
- `Promise.all`, `allSettled`, `race`
- Timeout, retry, backoff strategies
- Asynchronous error handling

## Working rules
- Implement each exercise in `exercise-XX.js`.
- Do not use external libraries.
- Add 3–5 minimal verifications at the end (`console.assert` or logs).
- Proper error handling and timeout cancellation when applicable.

## Exercises

### Exercise 01 — Sleep
<p align="justify">
Implement a function `sleep(ms)` that returns a promise that resolves after `ms` milliseconds. This is a fundamental utility function for asynchronous programming and is commonly used in testing, rate limiting, and animation. The function should return a promise that resolves (not rejects) after the specified delay. Consider edge cases like zero or negative milliseconds.
</p>

**Examples:**
- `await sleep(1000)` (waits 1 second)
- `sleep(0).then(() => console.log("immediate"))`
- `sleep(100).then(() => "done") -> Promise<"done">` (after 100ms)

### Exercise 02 — Timeout wrapper
<p align="justify">
Implement a function `withTimeout(promise, ms)` that wraps a promise with a timeout. If the original promise resolves or rejects before the timeout, return that result. If the timeout expires first, reject with a timeout error. This pattern is essential for preventing hanging requests in production systems. Consider how to handle cleanup and whether the original promise should continue executing after timeout.
</p>

**Examples:**
- `withTimeout(fetchData(), 5000)` (rejects if fetchData takes > 5s)
- `withTimeout(Promise.resolve("fast"), 1000) -> Promise<"fast">`
- `withTimeout(sleep(2000), 1000) -> Promise<Error>` (timeout error)

### Exercise 03 — Retry with backoff
<p align="justify">
Implement a function `retry(fn, { retries, delayMs })` where `fn` is an async function that returns a promise. If `fn` rejects, retry up to `retries` times with a delay between attempts. Use either linear or exponential backoff (choose one and document it). This pattern is crucial for handling transient failures in distributed systems. Consider edge cases like immediate success, all retries failing, and different backoff strategies.
</p>

**Examples:**
- `retry(fetchData, { retries: 3, delayMs: 100 })` (retries 3 times with 100ms delay)
- `retry(() => Promise.resolve("success"), { retries: 2 }) -> Promise<"success">` (no retries needed)

### Exercise 04 — Concurrency limit
<p align="justify">
Implement a function `mapLimit(items, limit, asyncMapper)` that processes an array of items using an async mapper function, but limits the number of concurrent operations to `limit`. This pattern is essential for rate limiting and preventing resource exhaustion. Process items in batches, ensuring no more than `limit` promises are running simultaneously. Consider edge cases like empty arrays, limit of 1 (sequential), and limit larger than array length.
</p>

**Examples:**
- `mapLimit([1, 2, 3, 4], 2, async (x) => x * 2)` (processes 2 at a time)
- `mapLimit([], 5, asyncMapper) -> Promise<[]>`
- `mapLimit([1, 2, 3], 10, asyncMapper)` (all processed concurrently)

### Exercise 05 — Execute in series (generic)
<p align="justify">
Implement a function `series(fns)` where `fns` is an array of async functions. Execute each function sequentially (one after another), waiting for each to complete before starting the next. Return an array of results in the same order. This is a more generic version of sequential execution that works with any async functions. Consider edge cases like empty arrays, function rejections, and mixed sync/async functions.
</p>

**Examples:**
- `series([() => Promise.resolve(1), () => Promise.resolve(2)]) -> Promise<[1, 2]>`
- `series([async () => "a", async () => "b"]) -> Promise<["a", "b"]>`

### Exercise 06 — Async cache (memoization)
<p align="justify">
Implement a function `memoizeAsync(fn)` that memoizes an async function. For the same arguments, reuse the cached promise/response instead of calling the function again. This pattern is useful for expensive async operations like API calls or database queries. Consider edge cases like cache invalidation, different argument types, and error caching (should errors be cached?).
</p>

**Examples:**
- `const memoized = memoizeAsync(fetchUser); memoized(1); memoized(1)` (second call uses cache)
- `memoized(1) === memoized(1)` (same promise reference)

### Exercise 07 — Safe JSON parse
<p align="justify">
Implement a function `safeJsonParse(s)` that safely parses a JSON string and returns an object with `{ ok: true, value }` on success or `{ ok: false, error }` on failure. This pattern avoids try-catch blocks and provides a functional approach to error handling. Consider edge cases like invalid JSON, empty strings, and non-string inputs.
</p>

**Examples:**
- `safeJsonParse('{"a": 1}') -> { ok: true, value: { a: 1 } }`
- `safeJsonParse('invalid') -> { ok: false, error: SyntaxError }`
- `safeJsonParse('') -> { ok: false, error: ... }`

### Exercise 08 — Retry only on certain errors
<p align="justify">
Implement a function `retryIf(fn, predicate, options)` that retries an async function only if the `predicate(error)` returns `true` for the error. This allows selective retrying based on error type, which is common in production systems where some errors are retryable (network errors) and others are not (validation errors). Consider edge cases like predicate always returning false, and how to handle non-error results.
</p>

**Examples:**
- `retryIf(fetchData, (err) => err.code === 'NETWORK_ERROR', { retries: 3 })`
- `retryIf(fn, () => false, { retries: 5 })` (never retries)

### Exercise 09 — Simple circuit breaker
<p align="justify">
Implement a `CircuitBreaker` class that opens after N consecutive failures and closes after a cooldown window. When open, the circuit breaker should immediately reject requests without calling the underlying function. This pattern protects systems from cascading failures. Consider edge cases like the first request after cooldown, resetting the failure count on success, and different cooldown strategies.
</p>

**Examples:**
- `const breaker = new CircuitBreaker(fn, { threshold: 5, cooldown: 60000 });`
- After 5 failures, breaker opens and rejects immediately
- After cooldown period, breaker closes and allows attempts again

### Exercise 10 — Async pipeline
<p align="justify">
Implement a function `pipeAsync(...fns)` where each function can be async. The pipeline should pass the result of each function as input to the next, handling promises appropriately. This is an async version of function composition. Consider edge cases like empty pipelines, error propagation, and functions that return promises vs values.
</p>

**Examples:**
- `pipeAsync(async (x) => x + 1, async (x) => x * 2)(5) -> Promise<12>`
- `pipeAsync(fetchUser, processUser, saveUser)(userId)`

## Definition of Done
- Correct error handling and timeout cancellation when applicable
- Minimal tests with `console.log` and timers
- Edge cases defined and tested
- Readable and consistent code
- Proper promise handling and cleanup
- Clear function documentation
