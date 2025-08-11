import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}
export default App;
