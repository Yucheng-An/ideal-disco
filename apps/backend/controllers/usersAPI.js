const userlistDB = require('../models/User.js');
const bcrypt = require("bcrypt");
// const User = require("../models/User");
const crypto = require("crypto");


async function getAllUsers(request, response, next) {
    try {
        const list = await userlistDB.find({});
        response.json(list);
    } catch (error) {
        next(error);
    }
}

async function createUser(request, response, next) {
    try {
        console.log(request.body);
        const body = request.body;
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(body.password, saltRounds);
        const user = {
            uuid: body.uuid || crypto.randomUUID(),
            username: body.username,
            name: body.name,
            passwordHash: passwordHash,
        };
        const savedUser = await userlistDB.create(user);
        response.status(201).json(savedUser);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getAllUsers,
    createUser,
};
