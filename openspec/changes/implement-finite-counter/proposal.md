# Proposal: Implement finite counter

## Why

Task SMOKE-1 requires a small, well-defined counter primitive in `src/counter`.
The directory currently only holds `requirements.md` ("Create next(n) in this
directory."), so there is no implementation yet.

## What Changes

- Add `src/counter/result.mjs`, an ES module exporting a named function `next(n)`.
- `next(n)` returns `n + 1` when `n` is a finite number.
- `next(n)` throws `TypeError` when `n` is not of type `number`, or is `NaN`,
  `Infinity` or `-Infinity`.
- Add tests for `next(n)` inside `src/counter` (e.g. `src/counter/result.test.mjs`).
- `src/counter/requirements.md` is preserved unchanged.

## Capabilities

### New Capabilities

- `finite-counter`: increment of finite numbers with strict input validation.

### Modified Capabilities

- None.

## Impact

- Scope limited to `src/counter`.
- No new dependencies; tests use the Node.js built-in `node:test` and
  `node:assert` modules.
- No changes to other files or public APIs.
