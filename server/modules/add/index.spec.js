const test = require('tape');
const add = require('./index');

test('add Function: Should exist.', (assert) => {
  const actual = typeof add;
  const expected = 'function';
  assert.equal(actual, expected);
  assert.end();
});

test('add Function: Given any number of integer argurments, should return the sum of them all.', (assert) => {
  let operands = [5, 5, 5, 5];
  let actual = add(...operands);
  let expected = 20;
  assert.equal(actual, expected);

  operands = [1, 2, 3, 4];
  actual = add(...operands);
  expected = 10;
  assert.equal(actual, expected);

  operands = [55, 10, 4, 20];
  actual = add(...operands);
  expected = 89;
  assert.equal(actual, expected);

  assert.end();
});