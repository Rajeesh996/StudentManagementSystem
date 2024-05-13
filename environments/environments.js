require('dotenv').config();

const environments = {
  mongo_url: process.env.MONGO_URL,
  port: process.env.PORT,
};

module.exports = environments;