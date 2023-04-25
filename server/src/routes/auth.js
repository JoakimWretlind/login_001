// routes related to auth
const { Router } = require("express");
const { getUsers } = require("../controllers/auth");
const router = Router();

// getUser is a function from controllers/auth
router.get("/get-users", getUsers);

module.exports = router;
