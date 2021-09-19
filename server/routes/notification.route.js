const { notificationController } = require("../controllers");
const { Router } = require('express');

const router = Router();

router
    .route('/')
    .get(notificationController.getAllNotifications)
    .post(notificationController.addNotification)
    .delete(notificationController.deleteNotification)
    .put(notificationController.changeNotificationStatus);

module.exports = router;
