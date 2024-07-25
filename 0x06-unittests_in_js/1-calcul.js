function calculateNumber(type, a, b) {
  const roundA = Math.round(a);
  const roundB = Math.round(b);
  if (type === 'DIVIDE' && roundB === 0) {
    return 'Error';
  }

  const ops = {
    'SUM': (a, b) => a + b,
    'SUBTRACT': (a, b) => a - b,
    'DIVIDE': (a, b) => a / b
  }

  return ops[type](roundA, roundB);
}

module.exports = calculateNumber;
