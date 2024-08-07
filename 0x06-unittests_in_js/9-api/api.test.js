const expect = require('chai').expect;
const request = require('request');

describe('index page testing', function() {
  it('should respond successfully with welcome message', function(done) {
    request('http://localhost:7865', (error, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      expect(res.statusCode).to.equal(200);
      expect(res.request.method).to.equal('GET');
      done();
    });
  });

  it('should respond successfully to num cart ids', function(done) {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      expect(res.statusCode).to.equal(200);
      expect(res.request.method).to.equal('GET');
      done();
    });
  });

  it('should fail with strings as id for cart', function(done) {
    request('http://localhost:7865/cart/hello', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should fail with non numeric values as id for cart', function(done) {
    request('http://localhost:7865/cart/d200-44a5-9de6', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('should fail with and object as id for cart', function(done) {
    request('http://localhost:7865/cart/{"num": 5}', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  
});
