const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToAPI()', function() {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  it('should test sendPaymentRequestToApi with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('should test sendPaymentRequestToApi with 100 and 20', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });

  afterEach(() => {
    spy.restore()
  })
});
