const { check } = require("express-validator");
const db = require("../db");
const { compare } = require("bcrypt");

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
  const { rows } = await db.query("SELECT * from users WHERE email = $1", [
    value,
  ]);

  if (rows.length) {
    throw new Error("Email already exist.");
  }
});

// login validation
const loginFieldsCheck = check("email").custom(async (value, { req }) => {
  const user = await db.query("SELECT * from users WHERE email = $1", [value]);

  if (!user.rows.length) {
    throw new Error("Email does not exist.");
  }

  // the compare function comes from bcrypt
  const validPassword = await compare(req.body.password, user.rows[0].password);

  if (!validPassword) {
    throw new Error("Wrong password");
  }

  req.user = user.rows[0];
});

module.exports = {
  registerValidation: [email, password, emailExists],
  loginValidation: [loginFieldsCheck],
};
