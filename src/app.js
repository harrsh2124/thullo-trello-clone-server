const express = require('express');
const env = require('./config/env');

const app = express();
const PORT = env.app.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

module.exports = () => app;
