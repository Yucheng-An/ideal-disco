const config = require("./utils/config.js")
const express = require("express");
const app = express();
const cors = require("cors");

const userRouter = require("./routes/usersRoute");
const todosRouter = require("./routes/todosRoute");
const loginRouter = require("./routes/loginRoute");

const middleware = require("./utils/middleware");

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use(middleware.requestLogger);

app.use("/api/users", userRouter);
app.use("/api/todolist", todosRouter);
app.use("/api/login", loginRouter);


app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


config.ConnectDatabase()

module.exports = app