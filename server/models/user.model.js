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
        status: "status",
        userImage: "userImage",
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

const updateUser = async (firstName, lastName, address, phone, email, userId) => {

    await dbConn.query(`UPDATE ${userModel.tableName} SET
                            ${userModel.fields.firstName} = ?,
                            ${userModel.fields.lastName} = ?,
                            ${userModel.fields.address} = ?,
                            ${userModel.fields.phone} = ?,
                            ${userModel.fields.email} = ?
                           WHERE ${userModel.fields.userId} = ?`, [firstName, lastName, address, phone, email, userId]);

}

const insertImage = async (image, userId) => {
    await dbConn.query(`UPDATE ${userModel.tableName} SET
                            ${userModel.fields.userImage} = ?
                           WHERE ${userModel.fields.userId} = ?`, [image, userId]);
}


module.exports = {
    createUser,
    findUserByEmail,
    getAllUsers,
    findUserById,
    updateUser,
    insertImage
};
