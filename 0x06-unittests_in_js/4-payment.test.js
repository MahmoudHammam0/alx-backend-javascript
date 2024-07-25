const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call the payment function with the correct args', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    spy.calledOnce;
    spy.calledWith('SUM', 100, 20);
    spy.restore();
  });

  it('should call the payment function with the correct args', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    stub.calledWith('SUM', 100, 20);
    spy.calledWith('The total is: 10');
    stub.returns(10);
    spy.restore();
    stub.restore();
  });
});
