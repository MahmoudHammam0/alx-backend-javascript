const expect = require('chai').expect;
const request = require('request');

describe('index page testing', function() {
  it('should respond successfully with welcome message', function() {
    request('http://localhost:7865', (error, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      expect(res.statusCode).to.equal(200);
      expect(res.request.method).to.equal('GET');
    });
  });

  it('should respond successfully to num cart ids', function() {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      expect(res.statusCode).to.equal(200);
      expect(res.request.method).to.equal('GET');
    });
  });

  it('should fail with strings as id for cart', function() {
    request('http://localhost:7865/cart/hello', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });

  it('should fail with non numeric values as id for cart', function() {
    request('http://localhost:7865/cart/d200-44a5-9de6', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });

  it('should fail with and object as id for cart', function() {
    request('http://localhost:7865/cart/{"num": 5}', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });

it('should return the available payment object', function() {
    request('http://localhost:7865/available_payments', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({ payment_methods: {credit_cards: true, paypal: false} });
      expect(res.request.method).to.equal('GET');
    });
  });

  it('should return a welcome message with the sent userName', function() {
    request.post('http://localhost:7865/login', {json: {userName: 'Betty'}}, (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Betty');
      expect(res.request.method).to.equal('POST');
    });
  });
});
