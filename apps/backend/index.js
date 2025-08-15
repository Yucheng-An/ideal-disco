require('dotenv').config()
const express = require('express')
const cors = require('cors')
const todosRouter = require('./routes/todos')
const app = express()
app.use(cors());//Anywhere!!!
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('<h1>This is get root directory from ideal-disco!</h1>');
});
app.use('/api/todolist', todosRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({error: err.message || 'Server error'});
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`);
    console.log('Address is: localhost:', PORT);
});