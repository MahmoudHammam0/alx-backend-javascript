const express = require('express');

const app = express();
const port = 7865;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]*)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const paymentObj = { payment_methods: { credit_cards: true, paypal: false } };
  res.json(paymentObj);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port %s', port);
});

module.exports = app;
