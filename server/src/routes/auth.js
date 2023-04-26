// routes related to auth
const { Router } = require("express");
const {
  getUsers,
  register,
  login,
  protected,
  logout,
} = require("../controllers/auth");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");
const { userAuth } = require("../middlewares/auth-middleware");
const { registerValidation, loginValidation } = require("../validators/auth");
const router = Router();

router.get("/get-users", getUsers); // from controllers/auth
// A protected route
router.get("/protected", userAuth, protected); // userAuth from /middlewares/auth-middleware
router.post("/register", registerValidation, validationMiddleware, register); // from validators/auth & controllers/auth
router.post("/login", loginValidation, validationMiddleware, login); // from validators/auth & controllers/auth
router.get("/logout", userAuth, logout);

module.exports = router;
