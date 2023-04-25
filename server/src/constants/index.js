const { config } = require("dotenv");
config();

module.exports = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
  SERVER_URL: process.env.SERVER_UR,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
  USER: process.env.USER,
  HOST: process.env.HOST,
  DBPORT: process.env.DBPORT,
};
