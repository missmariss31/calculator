// Import express
const express = require('express');
const add = require('../modules/add');
const makeNumbers = require('../modules/make-numbers');

// Create a router
const router = express.Router();

// Handle GET requests
router.get('/', (req, res) => {
  let error;
  let operands; 
  // Get the operans out of the query params.
  const args = req.query.operands;
  
  // Handle empty request
  if (args === undefined) {
    error = {
      status: 'Bad Request',
      message: 'The /add action requires a query paramater "operands" and none was provided.'
    };

    res.status(400).json(error);
    return;
  }

  // Check the args to make sure it is a comma separated string of numbers.
  if ( /^(\d+(.{1}\d+)?(,{1}(\d+(.{1}\d+)?))*)+$/.test(args) === false ) {
    error = {
      status: 'Bad Request',
      message: `The /add action requires a query paramater "operands" and the value must be a comma separated string of numbers. The query paramaters sent were ${JSON.stringify(req.query, null, 2)}`
    };

    res.status(400).json(error);
    return;
  }

  // Break the args string into an array of numbers.
  operands = makeNumbers(args);

  // Create the reponse body
  const responseBody = {
    operands,
    operation: 'add',
    result: add(...operands)
  };

  res.json(responseBody);
  return;
});

module.exports = router;