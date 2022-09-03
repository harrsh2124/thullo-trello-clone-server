const express = require('express');
const env = require('./config/env');

const app = express();
const PORT = env.app.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

app.get('/', (req, res) => {
  return res.status(200).json({
    status: true,
    message: 'Server is up and running.',
  });
});

module.exports = () => app;
