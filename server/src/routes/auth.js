// routes related to auth
const { Router } = require("express");
const { getUsers } = require("../controllers/auth");
const { registerValidation } = require("../validators/auth");
const router = Router();

// getUser is a function from controllers/auth
router.get("/get-users", getUsers); // from controllers/auth
router.post("/register", registerValidation); // from validators/auth

module.exports = router;
