const { check } = require("express-validator");
const db = require("../db");

// check password - has it the correct length
const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage("Password has to be between 6 and 15 characters.");

// check email - is the email-format an email
const email = check("email")
  .isEmail()
  .withMessage("Please provide a valid email.");

// check if email exists - every user must have a unique email
const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
    value,
  ]);
  if (rows.length) {
    throw new Error("Email already exists.");
  }
});

module.exports = {
  registerValidation: [email, password, emailExists],
};
