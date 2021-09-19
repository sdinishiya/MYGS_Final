const {USER_TYPES} = require("../constants/CommonConstants");
const {NOTIFICATION_STATUS} = require("../constants/CommonConstants");
const {dbConn} = require("../config/db.config")

const notificationModel = {
    tableName: 'notification',
    fields: {
        notificationId: "notificationId",
        title: "title",
        description: "description",
        status: "status",
        userType: "userType",
        userId: "userID",
    }
}

const addNotification = async (title, description, userType, userId) => {

    await dbConn.query(`INSERT INTO ${notificationModel.tableName} (
                            ${notificationModel.fields.title},
                            ${notificationModel.fields.description},
                            ${notificationModel.fields.status},
                            ${notificationModel.fields.userType},
                            ${notificationModel.fields.userId}) VALUES (?,?,?,?,?)`,
        [title, description, NOTIFICATION_STATUS.UNREAD, userType, userId ? userId : null]);
}

const getNotificationByUserId = async (userId, userType) => {
    if (userType !== USER_TYPES.ADMIN) {
        const [rows] = await dbConn.query(`SELECT * FROM ${notificationModel.tableName} WHERE ${notificationModel.fields.userId} = ?`, [userId])
        if (rows.length > 0) {
            return rows;
        } else {
            return null;
        }
    } else {
        const [rows] = await dbConn.query(`SELECT * FROM ${notificationModel.tableName} WHERE ${notificationModel.fields.userType} = ?`, [userType])
        if (rows.length > 0) {
            return rows;
        } else {
            return null;
        }
    }
}

const changeNotificationStatus = async (status, notificationId) => {
    await dbConn.query(`UPDATE ${notificationModel.tableName} SET
                  ${notificationModel.fields.status} = ?
                  WHERE ${notificationModel.fields.notificationId} = ?`, [status, notificationId])
}

const deleteNotification = async (notificationId) => {
    await dbConn.query(`DELETE FROM ${notificationModel.tableName} WHERE ${notificationModel.fields.notificationId} = ?`, notificationId)
}


module.exports = {
    addNotification,
    changeNotificationStatus,
    getNotificationByUserId,
    deleteNotification
}
