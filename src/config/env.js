const { normalizePort, getOsEnv } = require('../lib/env');
require('dotenv').config();

const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',

  app: {
    port: normalizePort(process.env.PORT || getOsEnv('PORT')),
    routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
  },
};

module.exports = env;
