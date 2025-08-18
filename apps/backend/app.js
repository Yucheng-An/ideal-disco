require("dotenv").config();
const express = require("express");
const cors = require("cors");
// Import database connection
require("./config/dbconfig");
const app = express();
app.use(cors()); //Access Anywhere!!!
app.use(express.json());
const userRouter = require("./routes/users");
const todosRouter = require("./routes/todos");

app.use("/api/users", userRouter);
app.use("/api/todolist", todosRouter);

app.get("/", (req, res) => {
  res.status(200).send("<h1>This is get root directory from ideal-disco!</h1>");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`The server is running at port: ${PORT}`);
  console.log("Address is: localhost:", PORT);
});
