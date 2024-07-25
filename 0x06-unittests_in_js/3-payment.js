const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalPayment = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log('The total is: %d', totalPayment);
}

module.exports = sendPaymentRequestToApi;
