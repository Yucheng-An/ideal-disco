const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const UserSchema = require("../models/User")
const config = require("../utils/config")

async function userLogin(request, response, next) {
    try {
        const {username, password} = request.body;
        const user = await UserSchema.findOne({username: username})
        const passwordCorrect = user === null
            ? false
            : await bcrypt.compare(password, user.passwordHash);

        if (!(user && passwordCorrect)) {
            return response.status(401).json({
                error: "invalid username or password"
            });
        }
        const userForToken = {
            username: user.username,
            id: user.id,
        };
        const token = jwt.sign(userForToken, config.SECRET, {expiresIn: 60 * 60});
        response.status(200).send({
            token: token,
            username: user.username,
            name: user.name
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    userLogin,
};