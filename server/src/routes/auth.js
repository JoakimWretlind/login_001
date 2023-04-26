// routes related to auth
const { Router } = require("express");
const { getUsers, register } = require("../controllers/auth");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");
const { registerValidation, loginValidation } = require("../validators/auth");
const router = Router();

router.get("/get-users", getUsers); // from controllers/auth
router.post("/register", registerValidation, validationMiddleware, register); // from validators/auth & controllers/auth
router.post("/login", loginValidation, validationMiddleware); // from validators/auth/

module.exports = router;
