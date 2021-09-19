const httpStatus = require('http-status');
const { complaintModel, userModel } = require("../models");

const addComplaint = async (req, res) => {
    try {
        const user = await userModel.findUserById(req.body.userId)
        if (!user) {
            res.status(httpStatus.BAD_REQUEST).send({message: "Invalid user id"})
        } else {
            await complaintModel.addComplaint(req.body.topic, req.body.problem, req.body.userId)
            res.status(httpStatus.CREATED).send({message: "Added complaint"})
        }
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

const getAllComplaints = async (req, res) => {
    const data = await complaintModel.getAllComplaints();
    if (!data) {
        res.status(httpStatus.NO_CONTENT).send({message: "No complaints available"})
    } else {
        res.status(httpStatus.OK).send(data);
    }
}

const getComplaintsByUser = async (req, res) => {
    try {
        const user = await userModel.findUserById(req.params.userId)
        if (!user) {
            res.status(httpStatus.BAD_REQUEST).send({message: "Invalid user id"})
        } else {
            const data = await complaintModel.getComplaintsByUserId(req.params.userId)
            if (!data) {
                res.status(httpStatus.NO_CONTENT).send({message: "No complaints"})
            } else {
                res.status(httpStatus.OK).send(data)
            }
        }
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

const addFeedback = async (req, res) => {
    try {
        await complaintModel.addFeedback(req.body.feedback, req.body.complaintId)
        res.status(httpStatus.OK).send({message: "Added feedback"})
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

module.exports = {
    addComplaint,
    getAllComplaints,
    addFeedback,
    getComplaintsByUser
}
