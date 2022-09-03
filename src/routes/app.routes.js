const express = require('express');
const AppStatus = require('../controllers/app/appStatus');

const AppRouter = express.Router();

AppRouter.get('/', AppStatus);

module.exports = AppRouter;
