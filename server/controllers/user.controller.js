const httpStatus = require('http-status');
const { userModel } = require("../models");

const getAllUsers = async (req, res) => {
    const users = await userModel.getAllUsers();

    if (!users) res.status(httpStatus.NO_CONTENT).send({message: "No users available"})
    res.status(httpStatus.OK).send(users);
}

const updateUser = async (req, res) => {
    try {
        await userModel.updateUser(req.body.firstName,req.body.lastName, req.body.address, req.body.phone, req.body.email, req.body.userId )
        res.status(httpStatus.OK).send({message: "Changed user details"})
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

const imageUpload = async (req, res) => {

    try {
        const image = req.file.buffer.toString('base64');
        await userModel.insertImage(image, req.params.id)
        res.status(httpStatus.OK).send(image)
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

module.exports = {
    getAllUsers,
    updateUser,
    imageUpload
}
