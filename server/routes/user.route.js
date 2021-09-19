const { userController } = require("../controllers");
const { Router } = require('express');
const multer = require('multer');

const router = Router();

const upload = multer({storage: multer.memoryStorage()})

router.route('/findAll').get(userController.getAllUsers);

router.route('/updateUser').post(userController.updateUser);

router.route('/imageUpload/:id').post(upload.single("image"), userController.imageUpload);

module.exports = router;
