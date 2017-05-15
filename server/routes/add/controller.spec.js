const test = require('tape');
const controller = require('./controller');

test('Route /add: controller Function: Should exist.', (assert) => {
  const actual = typeof controller;
  const expected = 'function';
  assert.equal(actual, expected);
  assert.end();
});

test('Route /add: controller Function: Given no "operands" parameter, should return a 400-1 error.', (assert) => {
  const args = undefined;
  const actual = () => controller(args);
  const expected = "{ code: '400-1', message: 'The /add action requires a query paramater \"operands\" and none was provided.', status: 'Bad Request' }";
  assert.throws(actual, expected);
  assert.end();
});

test('Route /add: controller Function: Given an "operands" parameter that is not a comma separated string of numbers, should return a 400-2 error.', (assert) => {
  const args = 'hello,goodbye';
  const actual = () => controller(args);
  const expected = "{ code: '400-2', message: 'The /add action requires a query paramater \"operands\" and the value must be a comma separated string of numbers. The operands sent was hello,goodbye', status: 'Bad Request' }";
  assert.throws(actual, expected);
  assert.end();
});

test('Route /add: controller Function: Given a proper "operands" parameter, should return the success object.', (assert) => {
  let args = '5,5';
  let actual = () => controller(args);
  assert.doesNotThrow(actual);

  actual = controller(args);
  let expected = {
    operands: [5, 5],
    operation: "add",
    result: 10
  };
  assert.deepEqual(actual, expected);

  args = '5.5,5.5';
  actual = controller(args);
  expected = {
    operands: [5.5, 5.5],
    operation: "add",
    result: 11
  };
  assert.deepEqual(actual, expected);
  assert.end();
});
