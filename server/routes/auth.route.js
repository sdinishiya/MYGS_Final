const { authController } = require("../controllers");
const { Router } = require('express');

const router = Router();

router.route('/sign-up').post(authController.sighUp);

router.route('/login').post(authController.login);

module.exports = router;
