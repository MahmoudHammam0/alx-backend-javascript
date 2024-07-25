const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call the payment function with the correct args', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
    stub.returns(10);
    spy.restore();
    stub.restore();
  });
});
