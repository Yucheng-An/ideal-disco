import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import Test from "./components/Test.jsx"

function App() {
  return (
    <div>
      <Header />
      <TodoList />
        <Test/>
    </div>
  );
}
export default App;
