const httpStatus = require('http-status');
const { userModel } = require("../models");

const getAllUsers = async (req, res) => {
    const users = await userModel.getAllUsers();

    if (!users) res.status(httpStatus.NO_CONTENT).send({message: "No users available"})
    res.status(httpStatus.OK).send(users);
}

module.exports = {
    getAllUsers
}
