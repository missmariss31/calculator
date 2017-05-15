const test = require('tape');
const makeNumbers = require('./index');

test('makeNumbers Function: Should exist.', (assert) => {
  const actual = typeof makeNumbers;
  const expected = 'function';
  assert.equal(actual, expected);
  assert.end();
});

test('makeNumbers Function: Given a comma-delimited string of numbers, should return an array of those numbers.', (assert) => {
  let numbers = '1,2,3,4,5,6,7';
  let actual = makeNumbers(numbers);
  let expected = [1, 2, 3, 4, 5, 6, 7];
  assert.deepEqual(actual, expected);

  numbers = '1.5,2.5,3,4,5';
  actual = makeNumbers(numbers);
  expected = [1.5, 2.5, 3, 4, 5];
  assert.deepEqual(actual, expected);

  numbers = '123,234,345,4.5';
  actual = makeNumbers(numbers);
  expected = [123, 234, 345, 4.5];
  assert.deepEqual(actual, expected);

  assert.end();
});