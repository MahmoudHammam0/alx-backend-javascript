const expect = require('chai').expect;
const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', function() {
  it('should test the async function with done', function() {
    getPaymentTokenFromApi(true).then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
