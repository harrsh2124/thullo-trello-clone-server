const app = require('./app');
const dbConnection = require('./utils/dbConnection');

dbConnection();
app();
