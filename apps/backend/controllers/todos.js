const crypto = require('crypto');
const todolistDB = require('../model/todolistDB');

async function getAllTodos(request, response, next) {
    try {
        const list = await todolistDB.find({});
        response.json(list);
    } catch (error) {
        next(error);
    }
}

async function getTodosByUser(request, response, next) {
    try {
        const inputId = Number(request.params.userId);
        if (Number.isNaN(inputId)) {
            return response.status(400).json({error: 'Invalid userId'});
        }
        const todos = await todolistDB.find({userId: inputId});
        response.json(todos);
    } catch (error) {
        next(error);
    }
}

async function createTodo(request, response, next) {
    try {
        const body = request.body;
        if (!body || !body.content || body.userId == null) {
            return response.status(400).json({error: 'content and userId are required'});
        }

        const now = new Date().toISOString();
        const todo = {
            uuid: crypto.randomUUID(),
            content: body.content,
            createDate: now,
            lastModify: now,
            finish: false,
            category: [],
            id: 1,               // remove if not used
            userId: body.userId,
        };

        const savedItem = await todolistDB.create(todo);
        response.status(200).json(savedItem);
    } catch (error) {
        next(error);
    }
}

// Need finish
async function updateFinish(request, response, next) {
    try {
        const uuid = request.params;
        const finish = request.body;
        if (typeof finish !== 'boolean') {
            return response.status(400).json({error: 'finish must be boolean'});
        }
        const result = await todolistDB.updateOne(
            {uuid},
            {$set: {finish, lastModify: new Date().toISOString()}}
        );
        if (!result || result.matchedCount === 0) {
            return response.status(404).json({error: 'Todo not found'});
        }

        response.json({status: true});
    } catch (error) {
        next(error);
    }
}

// Need finish
async function deleteTodo(request, response, next) {
    try {
        const uuid = request.params;
        const result = await todolistDB.deleteOne(uuid);
        if (!result || result.deletedCount === 0) {
            return response.status(404).json({error: 'Todo not found'});
        }
        response.status(204).send();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllTodos,
    getTodosByUser,
    createTodo,
    updateFinish,
    deleteTodo,
};
