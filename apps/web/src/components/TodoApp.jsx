import React, {useState, useEffect} from "react";
import {getAll, createTodo} from "../services/todoListApi.js";
import TodoListDisplay from "./TodoListDisplay";

const USERID = 1;

function TodoApp() {
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [userId, setUserId] = useState(USERID);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const res = await getAll(userId);
        setTodoList(res.data);
    };

    const addToDo = async (e) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        const payload = {userId: userId, content: newTodo.trim()};
        const res = await createTodo(payload);
        if (res?.status === true || res?.status === 200) {
            setNewTodo("");
            await fetchTodos();
        }
    };
    const toggleTodo = async (uuid) => {
        console.log(uuid);
    }
    const deleteTodo = async (uuid) => {
        console.log(uuid);
    }

    return (
        <div>
            <p className="font-mono font-medium text-red-500">Todo List</p>
            <form onSubmit={addToDo} className="flex gap-2">
                <input
                    className="border-2 border-gray-300 rounded-md p-2"
                    type="text"
                    placeholder="Add a new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit" className="bg-orange-500 text-white p-2 rounded-md">
                    Add
                </button>
            </form>
            <TodoListDisplay todoList={todoList} onDelete={deleteTodo} onToggle={toggleTodo}/>
        </div>
    );
}

export default TodoApp;
