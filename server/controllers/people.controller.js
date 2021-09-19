const httpStatus = require('http-status');
const { peopleModel } = require("../models");

const createPeople = async (req, res) => {
    try{
        const user = await peopleModel.findPeopleByRegId(req.body.regId)
        if (!user) {
            await peopleModel.createPeople(req.body.regId, req.body.firstName, req.body.lastName, req.body.nic, req.body.dob, req.body.homeNo, req.body.address, req.body.phone, req.body.status, req.body.incomeStatus);
            res.status(httpStatus.CREATED).send({message: "Created User"})
        } else {
            res.status(httpStatus.BAD_REQUEST).send({message: "A user with current the Reg ID already exists"})
        }
    } catch (err) {
        if (err) {
            console.log(err)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
        }
    }
}

const updatePeople = async (req, res) => {
    try{
        const user = await peopleModel.findPeopleByRegId(req.body.regId)
        if (!user) {
            res.status(httpStatus.BAD_REQUEST).send({message: "Invalid Reg ID"})
        } else {
            await peopleModel.updatePeople(req.body.regId, req.body.firstName, req.body.lastName, req.body.nic, req.body.dob, req.body.homeNo, req.body.address, req.body.phone, req.body.status, req.body.incomeStatus);
            res.status(httpStatus.CREATED).send({message: "Updated User"})
        }
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }
}

const getAllPeople = async (req, res) => {
    const users = await peopleModel.getAllPeople();

    if (!users) res.status(httpStatus.NO_CONTENT).send({message: "No users available"})
    res.status(httpStatus.OK).send(users);
}

const getPeopleAbove18 = async (req, res) => {
    const users = await peopleModel.getPeopleAboveAge(18);

    if (!users) res.status(httpStatus.NO_CONTENT).send({message: "No users available"})
    res.status(httpStatus.OK).send(users);
}

const deletePerson = async (req, res) => {
    try {
        const user = await peopleModel.findPeopleByRegId(req.body.regId)
        if (!user) {
            res.status(httpStatus.BAD_REQUEST).send({message: "User not available"})
        } else {
            await peopleModel.deletePeople(req.body.regId)
            res.status(httpStatus.NO_CONTENT).send();
        }
    } catch (err) {
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Something went wrong"})
    }

}

module.exports = {
    getAllPeople,
    createPeople,
    getPeopleAbove18,
    deletePerson,
    updatePeople
}
