const TodoSchema = require('../models/Todo');
const UserSchema = require("../models/User");
const config = require('../utils/config')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get("Authorization");
    if (authorization && authorization.startsWith("Bearer ")) {
        return authorization.replace("Bearer ", "");
    }
    return null;
}

async function getAllTodos(request, response, next) {
    try {
        const list = await TodoSchema.find({});
        response.json(list);
    } catch (error) {
        next(error);
    }
}

async function getTodosByUser(request, response, next) {
    try {
        const inputId = Number(request.params.user);
        if (Number.isNaN(inputId)) {
            return response.status(400).json({error: 'Invalid userId'});
        }
        const todos = await TodoSchema.find({user: inputId});
        response.json(todos);
    } catch (error) {
        next(error);
    }
}

async function createTodo(request, response, next) {
    try {
        const body = request.body;
        const decodedToken = jwt.verify(getTokenFrom(request), config.SECRET)
        if (!decodedToken.id) {
            return response.status(401).json({error: "token invalid"});
        }
        const user = await UserSchema.findById(decodedToken.id);
        // const user = await UserSchema.findById(body.userId)
        const now = new Date().toISOString();
        const newTodo = new TodoSchema({
            content: body.content,
            createDate: now,
            lastModify: now,
            finished: false,
            category: [],
            user: user.id
        });
        const savedItem = await TodoSchema.create(newTodo);
        user.todolist = user.todolist.concat(savedItem.id)
        user.save()
        response.status(200).json(savedItem);
    } catch (error) {
        next(error);
    }
}

async function updateFinish(request, response, next) {
    try {
        const {uuid} = request.params;
        const todo = await TodoSchema.findOne({uuid})
        if (!todo) {
            return response.status(400).json({error: "Todo not found"})
        }
        const updatedTodo = await TodoSchema.updateOne(
            {uuid},
            {
                $set: {
                    finished: !todo.finished,
                    lastModify: new Date().toISOString()
                }
            }
        )
        return response.status(201).json(updatedTodo);
    } catch (error) {
        next(error);
    }
}

async function deleteTodo(request, response, next) {
    try {
        const {uuid} = request.params;
        const result = await TodoSchema.deleteOne({uuid: uuid});
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
