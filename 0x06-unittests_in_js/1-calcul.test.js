const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber()', function() {
  describe('SUM operation', function() {
    it('should return the SUM of 2 rounded numbers', function() {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6)
      assert.equal(calculateNumber('SUM', 1.1, 3), 4)
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return the SUBTRACT of 2 rounded numbers', function() {
      assert.equal(calculateNumber('SUBTRACT', 3.8, 2), 2)
    });
  });

  describe('DIVIDE operation', function() {
    it('should return the SUBTRACT of 2 rounded numbers', function() {
      assert.equal(calculateNumber('DIVIDE', 3.8, 2), 2)
      assert.equal(calculateNumber('DIVIDE', 3.8, 0.1), 'Error')
    });
  });
});
