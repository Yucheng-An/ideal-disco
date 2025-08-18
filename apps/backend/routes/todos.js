const express = require('express')
const router = express.Router();
const {
    getAllTodos,
    getTodosByUser,
    createTodo,
    updateFinish,
    deleteTodo
} = require('../controllers/todosAPI');

router.get('/', getAllTodos);
router.get('/:userId', getTodosByUser);
router.post('/', createTodo);
router.patch('/:uuid', updateFinish);
router.delete('/:uuid', deleteTodo);
module.exports = router;