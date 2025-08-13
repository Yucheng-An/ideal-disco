import React, {useState} from "react";
import {getAll} from '../services/todoListApi.js'

const USERID = 1

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [allTodos, setAllTodos] = useState([])

    const handleGetAllTodos = async (userId) => {
        // Set userId = 1
        const Id = 1
        return setAllTodos(await getAll(Id))
        // setAllTodos(result)
        // result.map((task) => {console.log(task)})
    }
    return (
        <div>
            <p className="font-mono font-medium text-red-500"> Todo List</p>
            <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Add a new todo"/>
            <button className="bg-orange-500 text-white p-2 rounded-md">Add</button>
            <button className="bg-orange-500 text-white p-2 rounded-md" onClick={handleGetAllTodos}>show all</button>
            <ul className="list-disc">
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
