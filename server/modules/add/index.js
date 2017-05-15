const add = (...operands) => {
  let result = 0;

  operands.forEach(operand => {
    result += operand;
  });

  return result;
};

module.exports = add;