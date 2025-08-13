import React, {useState, useRef} from "react";
import {getAll} from '../services/todoListApi.js'

const USERID = 1

function TodoList() {
    const inputRef = useRef(null)
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [allTodos, setAllTodos] = useState([])
    const [userId, setUserId] = useState(1)

    const handleGetAllTodos = async () => {
        return setAllTodos(await getAll(userId))
    }
    const displayAllTodos = (allTodos) => {
        if (!Array.isArray(allTodos) || allTodos.length === 0) {
            return null
        }
        return (
            <ul>
                {allTodos.map((todo) => (
                    <li key={todo.uuid}>
                        {todo.content}
                    </li>
                ))}
            </ul>
        )

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const 
        
        
    }

    return (
        <div>
            <p className="font-mono font-medium text-red-500"> Todo List</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    ref={inputRef}
                    className="border-2 border-gray-300 rounded-md p-2"
                    type="text"
                    placeholder="Add a new todo"
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-orange-500 text-white p-2 rounded-md"
                    disabled={!text.trim()}
                >
                    Add
                </button>
            </form>
            {/*<input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Add a new todo"/>*/}
            {/*<button className="bg-orange-500 text-white p-2 rounded-md">Add</button>*/}
            <button className="bg-orange-500 text-white p-2 rounded-md" onClick={handleGetAllTodos}>show all</button>
            {displayAllTodos(allTodos)}
        </div>
    );
}

export default TodoList;
