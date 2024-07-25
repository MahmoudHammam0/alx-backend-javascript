const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber()', function() {
  it('should return sum of 2 rounded nums', function() {
    assert.equal(calculateNumber(2.6, 3.7), 7)
  });
});
