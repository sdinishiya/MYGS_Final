const {dbConn} = require("../config/db.config")
const bcrypt = require('bcrypt');

const userModel = {
    tableName: 'user',
    fields: {
        userId: "userID",
        firstName: "fname",
        lastName: "lname",
        address: "address",
        phone: "phone",
        userType: "userType",
        email: "email",
        password: "password",
        status: "status"
    }
}


const createUser = async (firstName, lastName, address, phone, userType, email, password, status) => {
    const encryptedPass = await bcrypt.hash(password, 10)

    await dbConn.query(`INSERT INTO ${userModel.tableName}
                           (${userModel.fields.firstName},
                            ${userModel.fields.lastName},
                            ${userModel.fields.address},
                            ${userModel.fields.phone},
                            ${userModel.fields.userType},
                            ${userModel.fields.email},
                            ${userModel.fields.password},
                            ${userModel.fields.status})
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [firstName, lastName, address, phone, userType, email, encryptedPass, status]);

}

const findUserByEmail = async (email) => {
    const [rows] = await dbConn.query(`SELECT * FROM ${userModel.tableName} WHERE ${userModel.fields.email} = ? LIMIT 1`, email);

    if (rows.length > 0) return rows[0];
    return null;
}

const getAllUsers = async () => {
    const [rows] = await dbConn.query(`SELECT * FROM ${userModel.tableName}`);

    if (rows.length > 0) return rows;
    return null;
}

const findUserById = async (userId) => {
    const [rows] = await dbConn.query(`SELECT * FROM ${userModel.tableName} WHERE ${userModel.fields.userId} = ? LIMIT 1`, userId);

    if (rows.length > 0) return rows[0];
    return null;
}


module.exports = {
    createUser,
    findUserByEmail,
    getAllUsers,
    findUserById
};
