const { Pool } = require("pg");
const { USER, HOST, DBPORT, PASSWORD, DATABASE } = require("../constants");

const pool = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: DBPORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
