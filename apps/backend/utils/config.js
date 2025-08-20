require("dotenv").config()
const mongoose = require("mongoose").set("strictQuery", true);
const MONGODB_URI = process.env.MONGODBURL
const PORT = process.env.PORT
const SECRET = process.env.SECRET
const logger = require("./logger")

function ConnectDatabase() {
    mongoose
        .connect(MONGODB_URI)
        .then(() => {
            logger.info(`Database has been connected, URL: ${MONGODB_URI}`);
        })
        .catch((error) => {
            logger.error("Database connection error:", error);
        });
}

module.exports = {
    MONGODB_URI,
    PORT,
    SECRET,
    ConnectDatabase
}