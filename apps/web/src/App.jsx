import {useState} from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import TodoApp from "./components/TodoApp.jsx";
import Test from "./components/Test.jsx"

function App() {
    return (
        <div>
            <Header/>
            <TodoApp/>
        </div>
    );
}

export default App;
