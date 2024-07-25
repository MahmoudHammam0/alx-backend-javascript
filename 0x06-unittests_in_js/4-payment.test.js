const sendPaymentRequestToApi = require('./4-payment.js')
const Utils = require('./utils.js')

const sinon = require("sinon");
const chai = require("chai")
const expect = chai.expect

describe("sendPaymentRequestToApi", function() {
    it("Spy sendPaymentRequestToApi", function() {
        const spy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(100, 20)

        expect(spy.calledWithExactly('SUM', 100, 20)).to.be.true;
        spy.restore();

    });
});

describe("Stub test for the calculateNumber", function() {
    it("Stub the calculateNumber function", function() {
        const stub = sinon.stub(Utils, "calculateNumber");
        stub.returns(10);
        stub.calledWith('SUM', 100, 20);
        stub.restore();
    });
});

describe("sendPaymentRequestToApi", function() {
    it("Spy the console.log", function() {
        const spy = sinon.spy(console, "log");
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledWith("The total is: 10")).to.be.false;
        spy.restore();
    });
});
