const {dbConn} = require("../config/db.config")

const complaintModel = {
    tableName: 'complaint',
    fields: {
        complaintId: "complaintID",
        topic: "topic",
        problem: "problem",
        feedback: "feedback",
        date: "date",
        time: "time",
        userId: "userID",
    }
}

const addComplaint = async (topic, problem, userId) => {

    await dbConn.query(`INSERT INTO ${complaintModel.tableName} (
                            ${complaintModel.fields.topic},
                            ${complaintModel.fields.problem},
                            ${complaintModel.fields.date},
                            ${complaintModel.fields.time},
                            ${complaintModel.fields.userId}) VALUES (?,?,?,?,?)`,
        [topic, problem, new Date(), new Date(), userId]);
}

const addFeedback = async (feedback, complaintId) => {
    await dbConn.query(`UPDATE ${complaintModel.tableName} SET 
                 ${complaintModel.fields.feedback} = ?
                 WHERE ${complaintModel.fields.complaintId} = ?`, [feedback, complaintId])
}

const getComplaintsByUserId = async (userId) => {
    const [rows] = await dbConn.query(`SELECT * FROM ${complaintModel.tableName} WHERE ${complaintModel.fields.userId} = ?`, [userId])

    if (rows.length > 0) return rows;
    return null;
}

const getAllComplaints = async () => {
    const [rows] = await dbConn.query(`SELECT * FROM ${complaintModel.tableName}`)

    if (rows.length > 0) return rows;
    return null;
}

module.exports = {
    addComplaint,
    getAllComplaints,
    addFeedback,
    getComplaintsByUserId,
}
