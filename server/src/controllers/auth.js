const db = require("../db");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM users");
    console.log(rows);
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  try {
    console.log("validation passed");
  } catch (error) {
    console.log(error.message);
  }
};
