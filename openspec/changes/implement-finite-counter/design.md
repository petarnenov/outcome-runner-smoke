# Design: Implement finite counter

## Context

`src/counter` contains only `requirements.md`. The task asks for an ES module
`src/counter/result.mjs` exporting `next(n)` plus tests in the same scope.

## Goals / Non-Goals

**Goals**

- Provide `next(n)` returning `n + 1` for finite numbers.
- Reject invalid input with `TypeError`.
- Keep tests colocated in `src/counter` and dependency-free.

**Non-Goals**

- Coercing strings, BigInt, boxed `Number` objects or other values to numbers.
- Overflow or safe-integer handling beyond normal IEEE-754 `n + 1` semantics.
- Modifying `src/counter/requirements.md` or any file outside `src/counter`.

## Decisions

1. **Validation**: accept input only when `typeof n === 'number' &&
   Number.isFinite(n)`. This rejects non-numbers (including strings, `null`,
   `undefined`, BigInt, objects and boxed numbers) and the non-finite values
   `NaN`, `Infinity` and `-Infinity` in one check. `Number.isFinite` does not
   coerce, so the explicit `typeof` check is kept for clarity.
2. **Error type**: throw `new TypeError(...)` with a descriptive message for every
   rejected input, as required by the task.
3. **Module format**: named ES module export `export function next(n)` in
   `result.mjs`.
4. **Tests**: `src/counter/result.test.mjs` using `node:test` and
   `node:assert/strict`, covering finite values (positive, zero, negative,
   fractional) and every rejection category.

## Risks / Trade-offs

- Values with magnitude above `Number.MAX_SAFE_INTEGER` lose precision under
  `n + 1`; this is accepted because the requirement is simply `n + 1`.
- `next(Number.MAX_VALUE)` returns `Number.MAX_VALUE` (finite); acceptable.
