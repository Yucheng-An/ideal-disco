require('dotenv').config()
const express = require('express');
const cors = require('cors')
const todolistDB = require('./model/todolistDB.js')
const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credential:false
}))



app.get('/',(request, response) =>{
    response.status(200).send('<h1>This is get root directory from ideal-disco!</h1>')
})
app.get('/api/todolist', (request,response) => {
    todolistDB.find({}).then(list =>{
        response.json(list)
    })
})
app.get('/api/todolist/:userId', async (request, response) => {
    const inputId = Number(request.params.userId);   // path param     // query param
     if (Number.isNaN(inputId)) {
            return response.status(400).json({ error: 'Invalid userId' });
        }
     const todos = await todolistDB.find({userId : inputId});
     response.json(todos);

});

app.post('/api/todolist', async (request, response) => {
    try {
        const body = request.body;
        if (body.content === undefined) {
            return response.status(400).json({ error: "content missing" });
        }
        const todo = new todolistDB({
            uuid: body.uuid,
            content: body.content,
            id: body.id,
            createDate: body.createDate,
            lastModify: body.lastModify,
            finish: Boolean(body.finish),
            category: body.category,
            userId: body.userId
        });
        const savedItem = await todo.save();
        response.json(savedItem);
    } catch (error) {
        console.log(error);
        response.status(500).json({ error: "Server error" });
    }
});


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`)
}) 