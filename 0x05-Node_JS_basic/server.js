const express = require('express');
const router = require('./routes');

const app = express();
const port = 1245;

router(app);
app.listen(port, () => {
  console.log('Server running at http://%s:%d', '127.0.0.1', port);
});

module.exports = app;
