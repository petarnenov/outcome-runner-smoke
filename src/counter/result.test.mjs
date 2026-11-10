import { test } from 'node:test';
import assert from 'node:assert/strict';
import { next } from './result.mjs';

test('exports next as a function', () => {
  assert.equal(typeof next, 'function');
});

test('increments finite numbers', () => {
  assert.equal(next(1), 2);
  assert.equal(next(0), 1);
  assert.equal(next(-5), -4);
  assert.equal(next(1.5), 2.5);
});

test('rejects non-number inputs with TypeError', () => {
  for (const value of ['1', null, undefined, 1n, {}, new Number(1)]) {
    assert.throws(() => next(value), TypeError);
  }
});

test('rejects NaN, Infinity and -Infinity with TypeError', () => {
  for (const value of [NaN, Infinity, -Infinity]) {
    assert.throws(() => next(value), TypeError);
  }
});
