const httpStatus = require('http-status');
const { notificationModel } = require("../models");

const getAllNotifications = async (req, res) => {
    const notifications = await notificationModel.getNotificationByUserId(req.query.userId, req.query.userType);
    if (!notifications) {
        res.status(httpStatus.NO_CONTENT).send({message: "No notifications available"})
    } else {
        res.status(httpStatus.OK).send(notifications);
    }
}

const addNotification = async (req, res) => {
    try {
        await notificationModel.addNotification(req.body.title,req.body.description, req.body.userType, req.body.userId)
        res.status(httpStatus.OK).send({message: "Added notification"})
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

const changeNotificationStatus = async (req, res) => {
    try {
        await notificationModel.changeNotificationStatus(req.body.status, req.body.notificationId)
        res.status(httpStatus.OK).send({message: "Changed status"})
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

const deleteNotification = async (req, res) => {
    try {
        await notificationModel.deleteNotification(req.body.notificationId)
        res.status(httpStatus.OK).send({message: "Deleted Notification"})
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

module.exports = {
    addNotification,
    changeNotificationStatus,
    deleteNotification,
    getAllNotifications
}
