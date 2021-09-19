const { addUserToChatEngine } = require("../config/chat.config");
const httpStatus = require('http-status');
const { userModel } = require("../models");
const bcrypt = require('bcrypt');

const sighUp = async (req, res) => {
    try{
        const user = await userModel.findUserByEmail(req.body.email)
        if (!user) {
            await userModel.createUser(req.body.firstName, req.body.lastName, req.body.address, req.body.phone, req.body.userType, req.body.email, req.body.password, req.body.status);
            await addUserToChatEngine({
                username: req.body.firstName,
                secret: req.body.email,
                email: req.body.email,
                first_name: req.body.firstName,
                last_name: req.body.lastName,
            })
            res.status(httpStatus.CREATED).send({message: "Created User"})
        } else {
            res.status(httpStatus.BAD_REQUEST).send({message: "A user with current the email already exists"})
        }
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

const login = async (req, res) => {
    try {
        const user = await userModel.findUserByEmail(req.body.email)
        if (!user) {
            res.status(httpStatus.NOT_FOUND).send({message: "User not found"})
            return;
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordMatch) {
            res.status(httpStatus.BAD_REQUEST).send({message: "Invalid credentials"})
            return;
        }

        res.status(httpStatus.OK).send({message: "Login Success", data: user})

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

module.exports = {sighUp, login}
