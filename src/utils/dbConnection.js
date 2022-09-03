const mongoose = require('mongoose');
const env = require('../config/env');

const dbConnection = () => {
  try {
    mongoose.connect(env.database.mongodb_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Mongo DB connected.');
  } catch (error) {
    console.log(error.message);

    // exit process with failure
    process.exit(1);
  }
};

module.exports = dbConnection;
