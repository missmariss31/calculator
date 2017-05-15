const makeNumbers = (numStr) => {
  let result;
  // Break apart the string into an array of strings
  result = numStr.split(',');
  // Cast each string into a number.
  result = result.map(num => parseFloat(num));
  // Return the result
  return result;
};

module.exports = makeNumbers;