const User = require('../models/User.js');
const bcrypt = require("bcrypt");

// const crypto = require("crypto");

async function getAllUsers(request, response, next) {
    try {
        const result = await User.find({}).populate("todolist");
        response.json(result);
    } catch (error) {
        next(error);
    }
}

async function createUser(request, response) {
    const {username, name, password} = request.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        username: username,
        name: name,
        passwordHash: passwordHash,
    });
    const savedUser = await newUser.save()
    response.status(201).json(savedUser);
}

module.exports = {
    getAllUsers,
    createUser,
};
