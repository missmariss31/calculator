const makeNumbers = require('../../modules/make-numbers');
const add = require('../../modules/add');

const controller = (args) => {
  let error;
  
  // Handle empty request
  if (args === undefined) {
    error = {
      code: '400-1',
      status: 'Bad Request',
      message: 'The /add action requires a query paramater "operands" and none was provided.'
    };

    throw error;
  }

  // Check the args to make sure it is a comma separated string of numbers.
  if ( /^(\d+(.{1}\d+)?(,{1}(\d+(.{1}\d+)?))*)+$/.test(args) === false ) {
    error = {
      code: '400-2',
      status: 'Bad Request',
      message: `The /add action requires a query paramater "operands" and the value must be a comma separated string of numbers. The operands sent was ${args}`
    };

    throw error;
  }

  // Break the args string into an array of numbers.
  operands = makeNumbers(args);

  // Create the reponse body
  const responseBody = {
    operands,
    operation: 'add',
    result: add(...operands)
  };

  return responseBody;
}

module.exports = controller;