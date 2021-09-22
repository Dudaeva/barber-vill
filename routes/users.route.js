const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);

module.exports = router;