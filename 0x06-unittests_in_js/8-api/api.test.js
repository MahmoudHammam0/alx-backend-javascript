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
});
