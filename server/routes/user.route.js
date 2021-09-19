const { userController } = require("../controllers");
const { Router } = require('express');

const router = Router();

router.route('/findAll').get(userController.getAllUsers);

module.exports = router;
