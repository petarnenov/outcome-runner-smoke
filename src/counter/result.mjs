/**
 * Return n + 1 for a finite number n.
 * @param {number} n
 * @returns {number}
 * @throws {TypeError} when n is not a finite value of type number.
 */
export function next(n) {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError(`next(n) requires a finite number, received ${describe(n)}`);
  }
  return n + 1;
}

function describe(value) {
  if (typeof value === 'number') return String(value);
  if (value === null) return 'null';
  return typeof value;
}
