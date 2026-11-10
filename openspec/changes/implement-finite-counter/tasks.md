# Tasks: Implement finite counter

## 1. Implementation

- [x] 1.1 Create `src/counter/result.mjs` exporting a named function `next(n)`.
- [x] 1.2 Return `n + 1` when `typeof n === 'number'` and `Number.isFinite(n)`.
- [x] 1.3 Throw `TypeError` for non-number inputs, `NaN`, `Infinity` and `-Infinity`.

## 2. Tests

- [x] 2.1 Add `src/counter/result.test.mjs` using `node:test` and `node:assert/strict`.
- [x] 2.2 Cover finite inputs: positive integer, zero, negative number, fractional number.
- [x] 2.3 Cover rejection of non-numbers (string, `null`, `undefined`, BigInt, object, boxed `Number`) with `TypeError`.
- [x] 2.4 Cover rejection of `NaN`, `Infinity` and `-Infinity` with `TypeError`.

## 3. Verification

- [x] 3.1 Confirm `src/counter/requirements.md` is unchanged.
- [x] 3.2 Confirm all changes are within `src/counter`.
- [x] 3.3 Run project checks and confirm they pass.
