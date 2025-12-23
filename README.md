# GQ JavaScript Workshop

## Overview

<p align="justify">
<b>GQ JavaScript Workshop</b> is a JavaScript practice repository designed to prepare for technical interviews by solving progressively harder exercises organized into <b>phases</b>.  
Each phase introduces a focused set of topics and provides <b>10 exercises</b> with clear constraints to build speed and accuracy.
</p>

## Goals

- Build strong JavaScript fundamentals and interview-ready problem solving.
- Practice with incremental complexity through phases.
- Keep solutions clean, readable, and easy to review in GitHub.

## Repository structure

```text
gq-js-workshop/
├─ phase-01/
│  ├─ docs/
│  │  └─ exercises.md
│  ├─ exercise-01.js
│  ├─ exercise-02.js
│  └─ ...
├─ phase-02/
│  ├─ docs/
│  │  └─ exercises.md
│  └─ ...
├─ phase-03/
│  ├─ docs/
│  │  └─ exercises.md
│  └─ ...
├─ phase-04/
│  ├─ docs/
│  │  └─ exercises.md
│  └─ ...
├─ phase-05/
│  ├─ docs/
│  │  └─ exercises.md
│  └─ ...
├─ phase-06/
│  ├─ docs/
│  │  └─ exercises.md
│  └─ ...
└─ README.md
```

## Phases

- **Phase 01 — Fundamentals:** control of flow, functions, basic arrays/objects, validation.
- **Phase 02 — Arrays & Objects:** transformations with `map/filter/reduce`, frequency maps, `Set/Map`.
- **Phase 03 — Strings & Patterns:** normalization, two pointers, windows, parsing.
- **Phase 04 — Algorithms & Structures:** stack/queue, binary search, merge, backtracking, quickselect.
- **Phase 05 — Asynchronous & APIs (Node):** promises, timeout, retry, limited concurrency, circuit breaker.
- **Phase 06 — Quality & Testing:** mini test runner, refactor, immutability, schemas, measurement.

## Prerequisites

- **Node.js 18+** (recommended)
- A code editor (VS Code suggested)

## Getting started (quick)

<p align="justify">Run an exercise with Node:</p>

```bash
node phase-01/exercise-01.js
```

## Working rules (recommended)

- Prefer **pure functions** (inputs → output) unless the exercise explicitly requires I/O.
- Avoid external libraries.
- Add a small self-check block at the end of each file using `console.assert(...)` or simple `console.log(...)`.
- Keep naming consistent: `exercise-01.js`, `exercise-02.js`, etc.

## Docs per phase

<p align="justify">Each phase includes its statement file:</p>
- `phase-XX/docs/exercises.md`

## Contributing
<p align="justify">
This repository is intended to be a community-friendly JavaScript interview practice workshop. Contributions help keep the content up to date, expand coverage of common interview patterns, and improve clarity for learners at different levels. If you'd like to collaborate, please follow the conventions used in the existing phases to keep the repository consistent and easy to review.
</p>

- Propose new exercises in the same format.
- Improve statements and examples.
- Add tests or a lightweight runner script.