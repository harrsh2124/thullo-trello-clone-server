const express = require('express');
const AppRouter = require('./app.routes');

const Router = express.Router();

Router.use('/', AppRouter);

module.exports = Router;
