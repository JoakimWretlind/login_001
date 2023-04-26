// routes related to auth
const { Router } = require("express");
const { getUsers } = require("../controllers/auth");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");
const { registerValidation } = require("../validators/auth");
const router = Router();

// getUser is a function from controllers/auth
router.get("/get-users", getUsers); // from controllers/auth
router.post("/register", registerValidation, validationMiddleware); // from validators/auth

module.exports = router;
