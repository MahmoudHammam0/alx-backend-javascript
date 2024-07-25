const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call the payment function with the correct args with stubs', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    stub.calledWith('SUM', 100, 20);
    spy.calledWith('The total is: 10');
    spy.restore();
    stub.restore();
  });
});
