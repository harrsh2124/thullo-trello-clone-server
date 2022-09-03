import * as dotenv from 'dotenv';
import * as path from 'path';
import { getOsEnv, normalizePort } from '../lib/env';

/**
 * Load .env file file.
 */
dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

/**
 * Environment variables
 */
const env = {
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',

  app: {
    port: normalizePort(process.env.PORT || getOsEnv('PORT')),
    routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
  },
};

export default env;
