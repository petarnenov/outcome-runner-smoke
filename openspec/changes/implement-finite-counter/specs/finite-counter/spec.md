# finite-counter Specification Delta

## ADDED Requirements

### Requirement: Counter module export

The system SHALL provide an ES module at `src/counter/result.mjs` that exports a named function `next(n)`.

#### Scenario: Module exports next

- **WHEN** a consumer imports `{ next }` from `src/counter/result.mjs`
- **THEN** `next` is a function

### Requirement: Increment finite numbers

The `next(n)` function SHALL return `n + 1` when `n` is a value of type `number` that is finite.

#### Scenario: Positive integer

- **WHEN** `next(1)` is called
- **THEN** it returns `2`

#### Scenario: Zero

- **WHEN** `next(0)` is called
- **THEN** it returns `1`

#### Scenario: Negative number

- **WHEN** `next(-5)` is called
- **THEN** it returns `-4`

#### Scenario: Fractional number

- **WHEN** `next(1.5)` is called
- **THEN** it returns `2.5`

### Requirement: Reject non-number input

The `next(n)` function SHALL throw a `TypeError` when `n` is not of type `number`, without coercion.

#### Scenario: String input

- **WHEN** `next("1")` is called
- **THEN** it throws a `TypeError`

#### Scenario: Null or undefined input

- **WHEN** `next(null)` or `next(undefined)` is called
- **THEN** it throws a `TypeError`

#### Scenario: BigInt input

- **WHEN** `next(1n)` is called
- **THEN** it throws a `TypeError`

#### Scenario: Object input

- **WHEN** `next({})` or `next(new Number(1))` is called
- **THEN** it throws a `TypeError`

### Requirement: Reject non-finite numbers

The `next(n)` function SHALL throw a `TypeError` when `n` is `NaN`, `Infinity` or `-Infinity`.

#### Scenario: NaN input

- **WHEN** `next(NaN)` is called
- **THEN** it throws a `TypeError`

#### Scenario: Positive infinity input

- **WHEN** `next(Infinity)` is called
- **THEN** it throws a `TypeError`

#### Scenario: Negative infinity input

- **WHEN** `next(-Infinity)` is called
- **THEN** it throws a `TypeError`

### Requirement: Preserve requirements file

The change SHALL leave `src/counter/requirements.md` unmodified, and tests for `next(n)` SHALL reside within `src/counter`.

#### Scenario: Requirements file intact

- **WHEN** the change is applied
- **THEN** `src/counter/requirements.md` content is identical to its prior content

#### Scenario: Tests within scope

- **WHEN** the change is applied
- **THEN** tests exercising `next(n)` exist under `src/counter`
