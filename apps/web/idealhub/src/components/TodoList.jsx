import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input className="border-2 border-gray-300 rounded-md p-2" type="text" placeholder="Add a new todo" />
      <button className="bg-blue-500 text-white p-2 rounded-md">Add</button>
      <ul className="list-disc">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
