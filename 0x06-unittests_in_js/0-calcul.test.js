const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber()', function() {
  it('should return sum of 2 rounded nums', function() {
    assert.equal(calculateNumber(2.6, 3.7), 7)
  });
  it('should return sum of 2 rounded nums', function() {
    assert.equal(calculateNumber(1, 3), 4)
  });
  it('should return sum of 2 rounded nums', function() {
    assert.equal(calculateNumber(1, 3.7), 5)
  });
  it('should return sum of 2 rounded nums', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5)
  });
  it('should return sum of 2 rounded nums', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6)
  });
});
