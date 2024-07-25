const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai.js");

describe('calculateNumber()', function() {
  describe('SUM operation', function() {
    it('should return the SUM of 2 rounded numbers', function() {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 1.1, 3)).to.equal(4);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return the SUBTRACT of 2 rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 3.8, 2)).to.equal(2);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return the SUBTRACT of 2 rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 3.8, 2)).to.equal(2);
      expect(calculateNumber('DIVIDE', 3.8, 0.1)).to.equal('Error');
    });
  });
});
